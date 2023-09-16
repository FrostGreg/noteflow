import { readFileSync, readdirSync } from "fs";
import matter from "gray-matter";
import path from "path";

export function getPostsDir() {
  return `${process.cwd()}/public/posts`;
}

export function getAllPostIds() {
  const fileNames = readdirSync(getPostsDir());

  return fileNames.map((fileName) => fileName.replace(/\.mdx$/, ""));
}

export type PostData = {
  title: string;
  author: string;
  date: string;
  length: string;
  imagePath: string;
  chips: string[];
};

export function getPostData(id: string) {
  const fullPath = path.join(getPostsDir(), `${id}.mdx`);
  const fileContents = readFileSync(fullPath, "utf8");

  const matterResult = matter(fileContents);

  return {
    id,
    ...matterResult,
    data: {
      ...matterResult.data,
      // remove duplicates from chips
      chips: Array.from(new Set(matterResult.data.chips)),
    } as PostData,
  };
}
