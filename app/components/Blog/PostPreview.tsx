import { PostMetadata } from "./PostMetadata";
import { createClient } from '@sanity/client'
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Divider,
  Image,
  Input,
  Link,
  Textarea,
} from "@nextui-org/react";

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
    console.log(slug)
    

    return (
        <>
            <div className="flex flex-row border border-solid border-slate-500 p-2 hover:ring-4 gap-4">
              <Link key={props.slug?.current} href={`/news/${props.slug?.current}`}>
                <Card
                  className="h-[300px] "
                >
                  <CardHeader className="z-10 absolute flex-col !items-start top-1">
                    <p className="text-tiny text-white/60 uppercase font-bold">
                      {props.title}
                    </p>
                    <h4 className="text-white font-medium text-large">
                      {props.subtitle}
                    </h4>
                    <h4 className="text-white font-medium text-large">
                      {props.date}
                    </h4>
                  </CardHeader>
                  
                  {imageURL && 
                    <Image
                      removeWrapper
                      alt= {props.title}
                      className="z-0 w-auto h-full object-cover brightness-50"
                      src={imageURL}
                    />
                  }
                </Card>
              </Link>
            </div>
        </>
    )
};

export default PostPreview;


