// code by Samuel Lehman

import { NextResponse } from "next/server";
import { fulfillOrder } from "@/utils/shopifyAdmin";

export async function PATCH(request: Request) {
    const order = await request.json()
    const response = await fulfillOrder(order.id)
    console.log(response)

    return NextResponse.json(response)
}