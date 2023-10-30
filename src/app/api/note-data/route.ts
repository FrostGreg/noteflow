import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (id === null) {
    return NextResponse.json({});
  }

  const noteData = await prisma.note.findFirst({
    where: {
      name: id,
    },
  });

  return NextResponse.json(noteData);
}
