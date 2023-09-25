import { getPostData } from "@/utils/posts";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  const postIDs = getPostData(id || "");

  return NextResponse.json(postIDs);
}
