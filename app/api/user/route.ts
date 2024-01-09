// code by Samuel Lehman

import prisma from "@/utils/db"
import { NextResponse } from "next/server";
import { saltAndHash } from "@/utils/hash";

export async function POST(request: Request) {
    const formData = await request.json()
    const hashedPassword = await saltAndHash(formData.password)

    const user = await prisma.user.create({
        data: {
            email: formData.email,
            firstName: formData.firstName,
            lastName: formData.lastName,
            password: hashedPassword,
        }
    })
    return NextResponse.json(user);
}