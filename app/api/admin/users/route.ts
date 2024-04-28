import { NextResponse } from "next/server";
import prisma from "@/utils/db";

export const dynamic = 'force-dynamic'

export async function GET() {
    try {
        const users = await prisma.user.findMany();
        return NextResponse.json(users);
    }
    catch (e) {
        console.error("ERROR: ", e);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}