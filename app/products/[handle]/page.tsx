import storefront from '@/utils/storefront'
import React from 'react'
import Image from 'next/image'

const query = `
query SingleProduct($handle: String!){
  productByHandle(handle: $handle){
    title
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
}
`

const getProduct = async (query: string, variables: { handle: string }) => {
    const product = await storefront(query, variables)
    return product.data.productByHandle
}

const ProductPage = async (props: any) => {
    const variables = { handle: props.params.handle }
    const product = await getProduct(query, variables)
    const image = product.images.edges[0].node

    return (
        <>
            <div className='flex flex-row'>
                <div>
                    <Image
                        src={image.transformedSrc}
                        alt={product.altText}
                        width={500}
                        height={500} />
                </div>
                <div>
                    <h1>{product.title}</h1>
                    <h3>{product.priceRange.minVariantPrice.amount}</h3>
                    <p>{product.description}</p>
                </div>
            </div>
        </>
    )
}

export default ProductPage