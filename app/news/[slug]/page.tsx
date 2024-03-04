import Image from 'next/image'
import { client } from '@/sanity/lib/client'

const parseArticleData = async (article: any) => {
    const sanityPrefix = `https://cdn.sanity.io/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${process.env.NEXT_PUBLIC_SANITY_DATASET}/`

    const imageURL = article.mainImage ?
        sanityPrefix + article.mainImage.asset._ref
            .replace("image-", "")
            .replace("-webp", ".webp")
            .replace("-jpeg", ".jpeg")
            .replace("-png", ".png")
        : null

    const bodyText = article.body.map((e: any) => e.children)
        .flat().map((e: any) => e.text)

    const author = await client.fetch(`*[_type == 'author' && _id == $ref][0]`,
        { ref: article.author["_ref"] })

    return { imageURL, bodyText, author }
}

const ArticlePage = async (props: { params: { slug: string } }) => {
    const slug = props.params.slug
    const article = await client.fetch(`*[_type == "post" && slug.current == $slug][0]`, { slug }, { cache: "no-store" })
    const { imageURL, bodyText, author } = await parseArticleData(article)

    return (
        <>
            <div className="my-24 grid grid-cols-[20%_60%_20%]">
                <div className='col-start-2'>
                    <h1 className="text-5xl font-bold text-center">{article.title}</h1>
                    {imageURL &&
                        <div className="my-10">
                            <Image height={2000} width={2000} className='mx-auto' src={imageURL} alt="image" />
                        </div>
                    }
                    {author &&
                        <div className='my-5'>
                            <h3>
                                By {author.name}
                            </h3>
                        </div>
                    }
                    <div>
                        {bodyText.map((e: string) => {
                            return (
                                <>
                                    <div key={e} className="my-4">
                                        <p className="text-xl">{e}</p>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ArticlePage