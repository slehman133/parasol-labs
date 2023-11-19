import storefront from '@/utils/storefront'
import React, { useState } from 'react'
import Image from 'next/image'
import AddToCart from '../../components/products/AddToCart'

const getProduct = async (variables: { handle: string }) => {
  const query =
    `query SingleProduct($handle: String!){
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
    }`

  const product = await storefront(query, variables)
  return product.data.productByHandle
}

const ProductPage = async (props: any) => {
  const variables = { handle: props.params.handle }
  const product = await getProduct(variables)
  const image = product.images.edges[0]?.node

  return (
    <>
      <div className='flex flex-row'>
        <div className='m-5'>
          {image ?
            <Image
              src={image.transformedSrc}
              alt={product.altText}
              width={8000}
              height={8000} />
            :
            <div className='bg-white w-[500px] h-[500px]'>

            </div>
          }
        </div>
        <div className='m-12'>
          <h1 className='font-bold text-5xl'>{product.title}</h1>
          <h3 className='font-semibold text-xl'>{product.priceRange.minVariantPrice.amount}</h3>
          <p>{product.description}</p>
          <AddToCart />
        </div>
      </div>
    </>
  )
}

export default ProductPage