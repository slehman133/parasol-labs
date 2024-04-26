import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utils/db";

export async function PATCH(request: NextRequest, params: { params: { id: string } }) {
    const { role } = await request.json();
    // console.log(role)
    try {
        const user = await prisma.user.update({
            where: {
                id: Number(params.params.id),
            },
            data: {
                role: role
            }

        });
        // console.log(user)
        return NextResponse.json(user);
    }
    catch (e) {
        console.error("ERROR: ", e);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}