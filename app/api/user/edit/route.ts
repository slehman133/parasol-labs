// code by Samuel Lehman

import prisma from "@/utils/db"
import { NextResponse } from "next/server";
import { saltAndHash } from "@/utils/hash";

export async function PATCH(request: Request) {
  try {

    const data = await request.json()
    // console.log(data)

    if (data.event === 'delete') {
      await prisma.user.delete({
        where: {
          email: data.email
        }
      })
    }

    else if (data.event === 'edit-basic-information') {
      await prisma.user.update({
        where: {
          email: data.email,
        },
        data: {
          email: data.email,
          firstName: data.firstName,
          lastName: data.lastName,
        }
      })
    }

    else if (data.event === 'change-password') {
      await prisma.user.update({
        where: {
          email: data.email,
        },
        data: {
          password: await saltAndHash(data.newPassword),
        }
      })
    }

    else {
      throw new Error("Invalid event type.")
    }
  }

  catch (e) {
    console.error("ERROR: ", e)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }

  return NextResponse.json({ status: 200 })
}
