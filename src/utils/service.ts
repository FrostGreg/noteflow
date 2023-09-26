import { readFileSync, readdirSync } from "fs";
import matter from "gray-matter";
import path from "path";
import noteTopicsMap from "./noteTopicsMap.json" assert { type: "json" };
import { NoteData } from "./types";

export function getNotesDir() {
  return `${process.cwd()}/public/notes`;
}

/*
  Notes will be added through git PR's and redeploying the server therefore
  no requirement for live updating so this caching is fine.
*/
let allNotesIDs: string[] | undefined = undefined;

export function readNotesIds(tag?: string) {
  if (tag !== undefined) {
    return noteTopicsMap[tag as keyof typeof noteTopicsMap] || [];
  }

  if (allNotesIDs === undefined) {
    const fileNames = readdirSync(getNotesDir());
    allNotesIDs = fileNames.map((fileName) => fileName.replace(/\.mdx$/, ""));
  }
  return allNotesIDs;
}

const noteDataCache = new Map();

export function readNoteData(id: string) {
  if (noteDataCache.has(id)) {
    return noteDataCache.get(id);
  }

  const fullPath = path.join(getNotesDir(), `${id}.mdx`);

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
    } as NoteData,
  };

  noteDataCache.set(id, response);

  return response;
}
