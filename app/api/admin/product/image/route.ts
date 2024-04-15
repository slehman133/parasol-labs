// code by Samuel Lehman

import { NextResponse } from "next/server";
import { createProduct } from "@/utils/shopifyAdmin";
const fs = require('fs')

export async function POST(request: Request) {
    const response = await request.formData()

    const image = response.get('file') as File
    const fileExtension = image.name.split('.').pop()
    console.log(fileExtension)
    const handle = response.get('handle') as string
    // console.log(image, handle)
    const arrayBuffer = await image.arrayBuffer()
    const buffer = new Uint8Array(arrayBuffer)



    // const blob = new Blob([buffer], { type: `image/${fileExtension}` })
    const blob = new Blob([buffer], { type: `image/jpg` })
    const imageUrl = URL.createObjectURL(blob)

    await fs.writeFile(`${process.cwd()}/public/images/${handle}.jpg`,
        buffer,
        (err: ErrorCallback) => {
            if (err) console.log(err)
        })


    return NextResponse.json(response)
}