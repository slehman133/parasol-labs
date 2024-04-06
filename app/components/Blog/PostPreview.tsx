import { PostMetadata } from "./PostMetadata";
import { client } from '@/sanity/lib/client'
import { parseISO, format} from 'date-fns'
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
const parseArticleData = async (article: any) => {
    const sanityPrefix = `https://cdn.sanity.io/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${process.env.NEXT_PUBLIC_SANITY_DATASET}/`
    const imageURL = article.mainImage ?
        sanityPrefix + article.mainImage.asset._ref
            .replace("image-", "")
            .replace("-webp", ".webp")
            .replace("-jpeg", ".jpeg")
            .replace("-png", ".png")    // Best we remove PNGs but for now, this renders
        : "/images/placeholderimage.jpg"

    const author = await client.fetch(`*[_type == 'author' && _id == $ref][0]`,
    { ref: article.author["_ref"] }) 

    const subtitle = article.subtitle ? await client.fetch(`*[_type == 'subtitle' && _id == $ref][0]`,
    { ref: article.subtitle["_ref"] }) : null

    const date = parseISO(article._createdAt)

    return { imageURL,  author, subtitle, date  }
}

const PostPreview = async (props:PostMetadata ) => {
  const slug = props.slug.current
  const article = await client.fetch(`*[_type == "post" && slug.current == $slug][0]`, { slug }, { cache: "no-store" })
  
  const { imageURL, author, date, subtitle} = await parseArticleData(article)
  return (
    <>
        <div className="flex flex-row p-2 hover:ring-4 gap-4">
          <Link key={slug} href={`/news/${slug}`}>
            <Card
              className="h-[300px] max-w-[600px]"
            >
              <CardHeader className="z-10 absolute flex-col !items-start top-1 gap-1">
                <p className="text-tiny text-white/60 uppercase font-bold">
                  {article.title}
                </p>
                <h4 className="text-white font-medium text-large">
                  {article.subtitle}
                </h4>
                <p className="text-tiny text-white font-medium text-large">
                  <time dateTime={article._createdAt}>{format(date, 'LLLL d, yyyy')}</time>
                </p>
                <h4 className="text-white font-medium text-large">
                  {author.name}
                </h4>
              </CardHeader>
              
              {imageURL && 
                <Image
                  removeWrapper
                  alt= {article.title}
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


