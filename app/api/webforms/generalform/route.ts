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
                message: formData.html,
            }
        })
        return NextResponse.json({ status: 200 });
    }
    catch(e) {
        console.error("ERROR: ", e);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

//Develop get method to get all the general forms
export async function GET() {
    try {
        const forms = await prisma.contactForm.findMany();
        return NextResponse.json(forms);
    }
    catch(e) {
        console.error("ERROR: ", e);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
//Develop a method to delete a general form
export async function DELETE(req: Request) {
    try {
        const formData = await req.json();
        await prisma.contactForm.delete({
            where: {
                id: formData.id
            }
        });
        return NextResponse.json({ status: 200 });
    }
    catch(e) {
        console.error("ERROR: ", e);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}