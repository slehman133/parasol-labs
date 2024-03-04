import Link from "next/link";
import { PostMetadata } from "./PostMetadata";
import { createClient } from '@sanity/client'
import Image from 'next/image'

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
            <div className="flex flex-row border border-solid border-slate-500 p-2 hover:ring-4 gap-4">
                <div className="basis-2/12 md:basis-1/3">
                    {/* imageURL && */
                        <Image height={1600} width={1600} className='mx-auto' src="/images/placeholderimage.jpg" alt="image" />
                    }
                </div>

                <div className="basis-10/12 md:basis-2/3">
                    <Link key={props.slug?.current} href={`/news/${props.slug?.current}`}>
                        <h2 className="text-xl">{props.title}</h2>
                    </Link>
                    <p className="invisible md:visible">{props.subtitle}</p>
                    <p className="invisible md:visible">{props.date}</p>
                    {/* <p">{author}</p> */}
                </div>
            </div>
        </>
    )
};

export default PostPreview;