// code by Samuel Lehman

import { NextResponse } from "next/server";
import { editPrice } from "@/utils/shopifyAdmin";

export async function PATCH(request: Request) {
    const product = await request.json()
    // const response = req
    // console.log(response)
    const { id, price, variantId } = product

    const response = await editPrice(id, variantId, price)
    console.log(response)

    return NextResponse.json(response)
}