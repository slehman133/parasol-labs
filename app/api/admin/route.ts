// code by Samuel Lehman

import { NextResponse } from "next/server";
import { adminEditQuantity } from "@/utils/shopifyAdmin";

export async function PATCH(request: Request) {
    const req = await request.json()
    const { id, quantity, variantId } = req
    const response = await adminEditQuantity(id.replace('gid://shopify/Product/', ''),
        quantity, variantId)
    return NextResponse.json(response)
}