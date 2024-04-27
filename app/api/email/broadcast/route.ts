"use server";
import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend("re_8AxWPfn4_CivcWdtdS2UZtPHnZLADuAPX");

export async function POST(req: Request) {
  try {
    const form = await req.json();
    const { data, error } = await resend.contacts.create({
      email: form.email,
      firstName: form.firstName, //this is a hack for now, don't want to spend money to have multiple broadcast groups, so filter by first name for specifying who to broadcast to
      audienceId: "04ea60b5-dd3d-461b-ae1c-43b9421d932f",
    });
    console.log("DATA: ", data);
    console.log("ERROR: ", error);
    return NextResponse.json({ status: 200 });
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const data = resend.contacts.list({
      audienceId: "04ea60b5-dd3d-461b-ae1c-43b9421d932f",
    });
    return NextResponse.json({ status: 200 });
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
