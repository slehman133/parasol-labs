import { createAdminApiClient, createAdminRestApiClient } from '@shopify/admin-api-client'
const fs = require('fs')



const restAdminClient = createAdminRestApiClient({
  storeDomain: process.env.NEXT_PUBLIC_STORE_URL as string,
  apiVersion: '2023-04',
  accessToken: process.env.SHOPIFY_ADMIN_ACCESS_TOKEN as string,
})

const admin = async (query: string) => {
  const client = createAdminApiClient({
    storeDomain: process.env.NEXT_PUBLIC_STORE_URL as string,
    apiVersion: '2023-04',
    accessToken: process.env.SHOPIFY_ADMIN_ACCESS_TOKEN as string,
  })


  const response = await client.request(query)
  return response
}

export const adminGetProducts = async () => {
  const query =
    `query AdminProducts {
  products(first: 10) {
    edges {
      node {
        id
        totalInventory
        priceRangeV2 {
          minVariantPrice {
            amount
          }
        }
        images(first: 10) {
          edges {
            node {
              altText
              src
            }
          }
        }
        description
        title
      }
    }
  }
}`
  const products = await admin(query)
  return products.data.products.edges.map((e: any) => e.node)
}

export const adminGetProduct = async (id: string) => {
  const response = await restAdminClient.get("/products/" + id)
    .then(res => res.json())
  return response
}

export const adminEditQuantity = async (id: string, quantity: number, variantId: string) => {
  const inventoryLevelIdProductQuery =
    `
    {
    product(id: "gid://shopify/Product/${id}") {
      id
    }
    productVariants(first: 10) {
      edges {
        node {
          id
        }
      }
    }
    productVariant(id: "${variantId}") {
      inventoryManagement
      inventoryItem {
        inventoryLevel(locationId: "gid://shopify/Location/92259844385") {
          id
        }
      }
    }
  }
  `

  const inventoryLevelProductId = await admin(inventoryLevelIdProductQuery)
    .then(res => res.data.productVariant.inventoryItem.inventoryLevel.id)

  const inventoryAdjustQuery =
    `mutation  {
      inventoryAdjustQuantity(input: {
        inventoryLevelId: "${inventoryLevelProductId}"
        availableDelta: ${quantity}
      }) {
        inventoryLevel {
          id
          available
          incoming
          item {
            id
            sku
          }
          location {
            id
            name
          }
        }
      }
    }`
  const products = await admin(inventoryAdjustQuery)
  return products
}

export const getOrders = async () => {
  const query = `query {
  orders(first: 100) {
    edges {
      node {
        id
        email
        name
        createdAt
        shippingAddress {
          address1
          city
          country
          province
          zip
          firstName
          lastName
          formatted(withName: false)
        }
        totalPriceSet {
          shopMoney {
            amount
          }
        }
        displayFulfillmentStatus
         lineItems(first: 100) {
           nodes {
             id
            quantity
             variant {
               id
               product {
                 title
                 featuredImage {
                   url
                   altText
                 }
               }
             }
            }
          }
      }
    }
  }
}`

  const orders = await admin(query).then(res => res.data.orders.edges.map((e: any) => e.node))
  return orders
}

export const getOrdersByEmail = async (email: string) => {
  const query =
    `query {
      customers(first: 100, query: "${email}") {
        edges{
          node {
            firstName
            lastName
            defaultAddress {
              id
              address1
            }
          }
        }
      }
    }`

  const orders = await admin(query).then(res => res)
  console.log(orders)


  return orders
}

// Product creation functions

const createProductQuery = async (product:
  {
    title: string,
    descriptionHtml: string,
    handle: string,
    imageUrl: string,
    altText: string
  }) => {
  const createProdQuery =
    `
    mutation{
      productCreate(input: {
        title: "${product.title}",
        descriptionHtml: "${product.descriptionHtml}",
        handle: "${product.handle}"
      }) 
      {
        product {
          id
          title
          handle
          descriptionHtml
        }
      userErrors {
        field
        message
      }
    }
  }
  `
  const newProduct = await admin(createProdQuery)
  return newProduct
}

const publishProductQuery = async (id: string) => {
  const pubQuery =
    `mutation {
      publishablePublish(id: "${id}", 
      input: {publicationId: "gid://shopify/Publication/207711338785"}){
      userErrors {
        field
        message
      }
    }
  }`
  const pubRes = await admin(pubQuery)
  return pubRes

}

const uploadImage = async (product: any) => {
  const filename = `${product.handle}.jpg`

  const stagedUploadQuery =
    `mutation {
  stagedUploadsCreate(input: [
    {
      filename: "${filename}",
      mimeType: "image/jpeg",
      resource: IMAGE,
      fileSize: "899765"
    }
  ])
    {
    stagedTargets {
      url
      resourceUrl
      parameters {
        name
        value
      }
    }
    userErrors {
      field, message
    }
  }
}`
  const stagedUploadRes = await admin(stagedUploadQuery)
  const { url, resourceUrl } = stagedUploadRes.data.stagedUploadsCreate.stagedTargets[0]
  const params = stagedUploadRes.data.stagedUploadsCreate.stagedTargets[0].parameters[0]


  const form = new FormData();
  params.forEach(({ name, value }: { name: string, value: string }) => {
    form.append(name, value)
  })


  const res = await fetch('https://shopify-staged-uploads.storage.googleapis.com/', {
    method: 'POST',
    body: form
  })

  console.log(res)

}

export const createProduct = async (product:
  {
    title: string,
    descriptionHtml: string,
    handle: string,
    imageUrl: string,
    altText: string
  }) => {



  const newProduct = await createProductQuery(product)
  console.log(newProduct)

  const pubQuery = await publishProductQuery(newProduct.data.productCreate.product.id)
  console.log(pubQuery)

  const imageRes = await uploadImage(product)

  return newProduct

}