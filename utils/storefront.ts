// code by Samuel Lehman

import { CartItem } from "@/app/context/CartContext"



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
      }),
      cache: "no-store",
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
        variants(first: 1){
          edges{
            node{
              id
              quantityAvailable
            }
          }
        }
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
      products(first:100){
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
            totalInventory
            variants(first: 10) {
              edges {
                node {
                  id
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

const createCheckout = async (cartItems: CartItem[], email = "") => {
  const lineItems = cartItems.map((e) => {
    return {
      variantId: e.variantId.id,
      quantity: Number(e.quantity)
    }
  })

  const query = email !== "" ? `
    mutation {
    checkoutCreate(input: {
      email: "${email}",
      lineItems:[
        ${lineItems.map(e =>
    `{variantId: "${e.variantId}",
          quantity: ${e.quantity}},
        `
  )}]
    }) {
      checkout {
         id
         webUrl
         lineItems(first: 100) {
           edges {
             node {
               title
               quantity
             }
           }
         }
      }
    }
  }
  `
    :
    `
    mutation {
    checkoutCreate(input: {
      lineItems:[
        ${lineItems.map(e =>
      `{variantId: "${e.variantId}",
          quantity: ${e.quantity}},
        `
    )}]
    }) {
      checkout {
         id
         webUrl
         lineItems(first: 100) {
           edges {
             node {
               title
               quantity
             }
           }
         }
      }
    }
  }
  `
  const checkout = await storefront(query)
  return checkout
}

const buyItNow = async (variantId: string, quantity: number, email = "") => {
  const query = email !== "" ? `mutation{
  checkoutCreate(input:{
    email: "${email}",
    lineItems:{
      variantId: "${variantId}",
      quantity: ${quantity}
    }
  }){
    checkout{
      webUrl
    }
  }
}`:
    `mutation{
  checkoutCreate(input:{
    lineItems:{
      variantId: "${variantId}",
      quantity: ${quantity}
    }
  }){
    checkout{
      webUrl
    }
  }
}`

  const checkout = await storefront(query)
  return checkout
}


export default storefront
export { getProduct, getProducts, createCheckout, buyItNow }