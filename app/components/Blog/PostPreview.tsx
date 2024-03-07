import Link from "next/link";
import { PostMetadata } from "./PostMetadata";
import { createClient } from '@sanity/client'
// import Image from 'next/image'
import { Card, CardBody, CardFooter, CardHeader, Image } from "@nextui-org/react";

//Written by Nicholas Whitehorn

//integrated as part of postpreview
//source: https://github.com/pixegami/nextjs-blog-tutorial
const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: '2021-06-07',
    useCdn: false
})
const parseArticleData = async (page: any) => {
    const sanityPrefix = `https://cdn.sanity.io/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${process.env.NEXT_PUBLIC_SANITY_DATASET}/`

    const imageURL = page.mainImage ?
        sanityPrefix + page.mainImage.asset._ref
            .replace("image-", "")
            .replace("-webp", ".webp")
            .replace("-jpeg", ".jpeg")
        : null

    /* const author = await client.fetch(`*[_type == 'author' && _id == $ref][0]`,
        { ref: page.author["_ref"] }) */

    return { imageURL, /* author */ }
}
const PostPreview = async (props: PostMetadata) => {
    const slug = props.slug
    const page = await client.fetch(`*[_type == "post"]`, { slug }, { cache: "no-store" })
    const { imageURL, /* author */ } = await parseArticleData(page)

    return (
        <>
            <Card
                isPressable 
                as={Link}
                href={`/news/${props.slug?.current}`}
                className="h-auto mx-auto"
            >
                <CardHeader className="p-0">
                    <Image 
                        src='/images/placeholderimage.jpg'
                        shadow="sm"
                        radius="lg"
                        alt="default title"
                        width="100%"
                        className="w-full object-cover h-auto "
                    />
                </CardHeader>
                <CardBody>
                    <div>
                        <h2 className="m-5 top-0 text-pretty font-bold text-2xl">{props.title}</h2>
                        <h3>{props.subtitle}</h3>
                        <p>{props.date}</p>
                    </div>
                </CardBody>
            </Card>
        </>
    )
};

export default PostPreview;