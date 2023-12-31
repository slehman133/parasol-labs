const storefront = async (query: string, variables = {}) => {

    const storefrontAPIUrl = process.env.NEXT_PUBLIC_API_URL || ""

    const response = await fetch(
        storefrontAPIUrl,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-Shopify-Storefront-Access-Token": process.env.NEXT_PUBLIC_ACCESS_TOKEN || "",

            },
            body: JSON.stringify({
                query, variables
            })
        }).then(res => res.json())

    return response
}

export default storefront