// import { readNotesIds } from "@/utils/service";
import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const tag = searchParams.get("tag");

  const noteMetas = await prisma.note.findMany({
    where: {
      OR: [
        {
          chips: {
            contains: tag || "",
            mode: "insensitive",
          },
        },
        {
          title: {
            contains: tag || "",
            mode: "insensitive",
          },
        },
      ],
    },
    select: {
      date: true,
      name: true,
      title: true,
      length: true,
      imagePath: true,
      chips: true,
    },
  });
  return NextResponse.json(noteMetas);
}
