https://www.prisma.io/docs/orm/more/help-and-troubleshooting/help-articles/nextjs-prisma-client-dev-practices

import prisma from "@/utils/db"
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const formData = await request.json()
    const user = await prisma.user.create({
        data: {
            email: formData.email,
            firstName: formData.firstName,
            lastName: formData.lastName,
            password: formData.password,
            isAdmin: false,
        }
    })
    console.log(user)
    return NextResponse.json(user);
}