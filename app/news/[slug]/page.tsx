const ArticlePage = async (props: any) => {
    const slug = props.params.slug
    const res = await fetch(`https://q7s7f1a1.api.sanity.io/v2021-06-07/data/query/local?query=*`,
        { cache: 'no-store' })
        .then(res => res.json())
    const data = res.result.filter((e: any) => e.slug?.current == slug)[0]
    // console.log(data)

    const imageURL = data.mainImage ?
        `https://cdn.sanity.io/images/q7s7f1a1/local/${data.mainImage.asset._ref
            .replace("image-", "")
            .replace("-webp", ".webp")}` : null

    return (
        <>
            <div className='m-20'>
                <h1>{data.title}</h1>
                {imageURL &&
                    <img src={imageURL} alt="image" />
                }
                <p>{data.body[0].children[0].text}</p>
            </div>
        </>
    )
}

export default ArticlePage