import prisma from "@/utils/db"
import { NextResponse } from "next/server";

export async function GET(request: Request, params: { params: { id: string } }) {
    const user = await prisma.user.findUnique({
        where: {
            id: Number(params.params.id)
        }
    })

    return NextResponse.json(user)
}