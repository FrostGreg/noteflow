import { readFileSync, readdirSync } from "fs";
import matter from "gray-matter";
import path from "path";

export function getPostsDir() {
  return `${process.cwd()}/src/app/posts`;
}

export function getAllPostIds() {
  const fileNames = readdirSync(getPostsDir());

  return fileNames.map((fileName) => fileName.replace(/\.mdx$/, ""));
}

export function getPostData(id: string) {
  const fullPath = path.join(process.cwd(), "/src/app/posts/", `${id}.mdx`);
  const fileContents = readFileSync(fullPath, "utf8");

  const matterResult = matter(fileContents);

  return {
    id,
    ...matterResult,
  };
}
