//create a POST request for the general form, similar to partnership form

import prisma from '@/utils/db';
import { NextResponse } from "next/server";

// POST /api/webforms/generalform
// Required fields in body: formData: {
    // name    String @db.VarChar(255)
    // email   String @db.VarChar(255)
    // message String @db.Text
// }

export async function POST(req: Request) {
    try {
        const formData = await req.json();

        console.log(formData)
        await prisma.contactForm.create({
            data: {
                name: formData.name,
                email: formData.email,
                message: formData.message,
            }
        })
        return NextResponse.json({ status: 200 });
    }
    catch(e) {
        console.error("ERROR: ", e);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}