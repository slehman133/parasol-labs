import prisma from "@/utils/db";
import { NextResponse } from "next/server";

// POST /api/webforms/post
// Required fields in body: formData: {
//   companyName: string,
//   companyWebpage: string,
//   streetAddress: string,
//   streetAddress2: string,
//   city: string,
//   stateOrProvince: string,
//   postalCode: string,
//   services: string[],
//   additionalInfo: string,
//   contactName: string,
//   phoneNumber: string,
//   emailAddress: string,
// }
export async function POST(req: Request) {
  try {
    const formData = await req.json();

    console.log(formData);
    await prisma.partnershipForm.create({
      data: {
        companyName: formData.companyName,
        companyWebpage: formData.companyWebpage,
        streetAddress: formData.streetAddress,
        streetAddress2: formData.streetAddress2,
        city: formData.city,
        stateOrProvince: formData.stateOrProvince,
        postalCode: formData.postalCode,
        services: formData.services,
        additionalInfo: formData.additionalInfo,
        contactName: formData.contactName,
        phoneNumber: formData.phoneNumber,
        emailAddress: formData.emailAddress,
      },
    });
    return NextResponse.json({ status: 200 });
  } catch (e) {
    console.error("ERROR: ", e);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

//develop get method to get all the partnership forms
export async function GET() {
  try {
    const forms = await prisma.partnershipForm.findMany();
    return NextResponse.json(forms);
  } catch (e) {
    console.error("ERROR: ", e);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

//develop a method that will delete the specified partnership form
export async function DELETE(req: Request) {
  try {
    const formData = await req.json();
    await prisma.partnershipForm.delete({
      where: {
        id: formData.id,
      },
    });
    return NextResponse.json({ status: 200 });
  } catch (e) {
    console.error("ERROR: ", e);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}