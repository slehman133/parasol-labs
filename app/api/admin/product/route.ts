// code by Samuel Lehman

import { NextResponse } from "next/server";
import { createProduct } from "@/utils/shopifyAdmin";

export async function POST(request: Request) {
    const product = await request.json()

    const response = await createProduct(product)

    return NextResponse.json(response)
}