import { readFileSync, readdirSync } from "fs";
import matter from "gray-matter";
import path from "path";

export function getPostsDir() {
  return `${process.cwd()}/public/posts`;
}

/*
  Posts will be added through git PR's and redeploying the server therefore
  no requirement for live updating so this caching is fine.
*/
let allPostIDs: string[] | undefined = undefined;

export function getAllPostIds() {
  if (allPostIDs === undefined) {
    const fileNames = readdirSync(getPostsDir());
    allPostIDs = fileNames.map((fileName) => fileName.replace(/\.mdx$/, ""));
  }
  return allPostIDs;
}

export type PostData = {
  title: string;
  author: string;
  date: string;
  length: string;
  imagePath: string;
  chips: string[];
};

const postDataCache = new Map();

export function getPostData(id: string) {
  if (postDataCache.has(id)) {
    return postDataCache.get(id);
  }

  const fullPath = path.join(getPostsDir(), `${id}.mdx`);
  const fileContents = readFileSync(fullPath, "utf8");

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
