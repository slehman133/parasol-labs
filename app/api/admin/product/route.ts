// code by Samuel Lehman

import { NextResponse } from "next/server";
import { createProduct } from "@/utils/shopifyAdmin";

export async function POST(request: Request) {
    const product = await request.json()
    // const response = req
    // console.log(response)

    const response = await createProduct(product)
    console.log(response)

    return NextResponse.json(response)
}