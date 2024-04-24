// code by Samuel Lehman

import { NextResponse } from "next/server";
import { createProduct } from "@/utils/shopifyAdmin";
import { deleteProduct } from "@/utils/shopifyAdmin";

export async function POST(request: Request) {
    const product = await request.json()

    const response = await createProduct(product)

    return NextResponse.json(response)
}

export async function DELETE(request: Request) {
    const product = await request.json()

    const response = await deleteProduct(product)

    return NextResponse.json(response)
}