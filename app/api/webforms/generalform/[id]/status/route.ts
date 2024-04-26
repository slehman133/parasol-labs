import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utils/db";

export async function PATCH(
  request: NextRequest,
  params: { params: { id: string } }
) {
  const { status } = await request.json();
  try {
    const user = await prisma.contactForm.update({
      where: {
        id: Number(params.params.id),
      },
      data: {
        status: status,
      },
    });
    return NextResponse.json(user);
  } catch (e) {
    console.error("ERROR: ", e);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
