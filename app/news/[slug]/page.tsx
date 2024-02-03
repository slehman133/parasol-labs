const ArticlePage = async (props: any) => {
    let key = 0
    const slug = props.params.slug
    const res = await fetch(`https://q7s7f1a1.api.sanity.io/v2021-06-07/data/query/local?query=*`,
        { cache: 'no-store' })
        .then(res => res.json())
    const data = res.result.filter((e: any) => e.slug?.current == slug)[0]
    // console.log(data)
    const author = null
    const bodyText = data.body.map((e: any) => e.children).flat().map((e: any) => e.text)

    const imageURL = data.mainImage ?
        `https://cdn.sanity.io/images/q7s7f1a1/local/${data.mainImage.asset._ref
            .replace("image-", "")
            .replace("-webp", ".webp")
            .replace("-jpeg", ".jpeg")
        }` : null

    return (
        <>
            <div className="my-24 grid grid-cols-[20%_60%_20%]">
                <div className='text-black col-start-2'>
                    <h1 className="text-5xl font-bold">{data.title}</h1>
                    {imageURL &&
                        <div className="my-10">
                            <img className='mx-auto' src={imageURL} alt="image" />
                        </div>
                    }
                    <div>
                        {bodyText.map((e: string) => {
                            return (
                                <>
                                    <div key={`${++key}${new Date().getTime()}`} className="my-4">
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