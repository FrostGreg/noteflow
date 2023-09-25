import { getAllPostIds } from "@/utils/posts";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const tag = searchParams.get("tag");

  const postIDs = getAllPostIds(tag || undefined);

  return NextResponse.json(postIDs);
}
