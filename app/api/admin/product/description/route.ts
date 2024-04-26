// code by Samuel Lehman

import { NextResponse } from "next/server";
import { editDescription } from "@/utils/shopifyAdmin";

export async function PATCH(request: Request) {
    const product = await request.json()
    const response = await editDescription(product)
    // console.log(response)

    return NextResponse.json(response)
}