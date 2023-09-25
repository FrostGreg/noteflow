import { readFileSync, readdirSync } from "fs";
import matter from "gray-matter";
import path from "path";
import postTopicsMap from "./postTopicsMap.json" assert { type: "json" };
import { PostData } from "./types";

export function getPostsDir() {
  return `${process.cwd()}/public/posts`;
}

/*
  Posts will be added through git PR's and redeploying the server therefore
  no requirement for live updating so this caching is fine.
*/
let allPostIDs: string[] | undefined = undefined;

export function readPostIds(tag?: string) {
  if (tag !== undefined) {
    return postTopicsMap[tag as keyof typeof postTopicsMap] || [];
  }

  if (allPostIDs === undefined) {
    const fileNames = readdirSync(getPostsDir());
    allPostIDs = fileNames.map((fileName) => fileName.replace(/\.mdx$/, ""));
  }
  return allPostIDs;
}

const postDataCache = new Map();

export function readPostData(id: string) {
  if (postDataCache.has(id)) {
    return postDataCache.get(id);
  }

  const fullPath = path.join(getPostsDir(), `${id}.mdx`);

  let fileContents;

  try {
    fileContents = readFileSync(fullPath, "utf8");
  } catch (e) {
    return {};
  }

  const matterResult = matter(fileContents);

  const response = {
    id,
    ...matterResult,
    data: {
      ...matterResult.data,
      // remove duplicates from chips
      chips: Array.from(new Set(matterResult.data.chips)),
    } as PostData,
  };

  postDataCache.set(id, response);

  return response;
}
