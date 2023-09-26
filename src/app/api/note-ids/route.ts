import { readNotesIds } from "@/utils/service";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const tag = searchParams.get("tag");

  const noteIDs = readNotesIds(tag || undefined);

  return NextResponse.json(noteIDs);
}
