import { NextResponse } from "next/server";
import db from "@/utils/db";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (id === null) {
    return NextResponse.json({});
  }

  const noteData = await db.note.findFirst({
    where: {
      name: id,
    },
  });

  return NextResponse.json(noteData);
}
