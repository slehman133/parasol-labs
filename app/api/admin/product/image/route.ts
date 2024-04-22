// code by Samuel Lehman

import { NextResponse } from "next/server";

import { cloudinary } from '@/utils/cloudinary'


export async function POST(request: Request) {
    const response = await request.formData()

    const image = response.get('file') as File
    const arrayBuffer = await image.arrayBuffer()
    const buffer = new Uint8Array(arrayBuffer)

    const imageUrl = await new Promise((resolve: any, reject: any) => {
        cloudinary.uploader.upload_stream({
        }, function (error: any, result: any) {
            if (error) {
                console.log(error)
                reject(error);
                return;
            }
            resolve(result?.url);
        })
            .end(buffer);
    })

    // console.log(imageUrl)

    return NextResponse.json({ imageUrl })
}
