import { readNoteData } from "@/utils/service";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  const noteIDs = readNoteData(id || "");

  return NextResponse.json(noteIDs);
}
