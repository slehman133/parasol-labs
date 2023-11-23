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

const getProduct = async (variables: { handle: string }) => {
  const query =
    `query SingleProduct($handle: String!){
      productByHandle(handle: $handle){
        title
        handle
        description
        priceRange{
          minVariantPrice{
            amount
          }
        }
        images(first: 1){
          edges{
            node{
              transformedSrc
              altText
            }
          }
        }
      }
    }`

  const product = await storefront(query, variables)
  return product.data.productByHandle
}

const getProducts = async () => {
  const query =
    `query Products{
      products(first:6){
        edges{
          node {
            id
            title
            handle
            priceRange{
              minVariantPrice{
                amount
              }
            }
            description
            images(first: 1){
              edges{
                node{
                  transformedSrc
                  altText
                }
              }
            }
          }
        }
      }
    }
    `
  const products = await storefront(query)
  return products.data.products.edges
}

export default storefront
export { getProduct, getProducts }