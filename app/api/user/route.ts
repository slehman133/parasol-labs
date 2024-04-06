// code by Samuel Lehman

import prisma from "@/utils/db"
import { NextResponse } from "next/server";
import { saltAndHash } from "@/utils/hash";

export async function POST(request: Request) {
    try {

        const formData = await request.json()
        const hashedPassword = await saltAndHash(formData.password)

        await prisma.user.create({
            data: {
                email: formData.email,
                firstName: formData.firstName,
                lastName: formData.lastName,
                password: hashedPassword,
            }
        })
        return NextResponse.json({ status: 200 });
    }

    catch (e) {
        console.error("ERROR: ", e)
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }

}