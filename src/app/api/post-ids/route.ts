import { readPostIds } from "@/utils/service";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const tag = searchParams.get("tag");

  const postIDs = readPostIds(tag || undefined);

  return NextResponse.json(postIDs);
}
