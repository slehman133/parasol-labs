// code by Samuel Lehman

import { NextResponse } from "next/server";
import { cloudinary } from '@/utils/cloudinary'


export async function POST(request: Request) {
    const response = await request.formData()

    const image = response.get('file') as File
    const arrayBuffer = await image.arrayBuffer()
    const buffer = new Uint8Array(arrayBuffer)

    const imageUrl = await new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream({
        }, function (error, result) {
            if (error) {
                console.log(error)
                reject(error);
                return;
            }
            resolve(result?.url);
        })
            .end(buffer);
    })

    return NextResponse.json({ imageUrl })
}