// code by Samuel Lehman

import "./styles.css"
import { getProduct } from '@/utils/storefront'
import React from 'react'
import {Image} from "@nextui-org/react"
import AddToCart from '../../components/products/AddToCart'

interface ProductPageProps {
  params: {
    handle: string;
  };
}

const unSlug = (str: string) => {
  return str.replace(/-/g, ' ').replace(/^\w|\s\w/g, c => c.toUpperCase())
}

export async function generateMetadata({ params }: { params: { handle: string } }) {
  return {
    title: `${unSlug(params.handle)} at Parasol Labs`,
  }
}

const ProductPage = async (props: ProductPageProps) => {
  const variables = { handle: props.params.handle }
  const product = await getProduct(variables)
  const quantityAvailable = product.variants.edges[0].node.quantityAvailable
  const image = product.images.edges[0]?.node
  const variantId = product.variants.edges[0].node

  // console.log(image?.transformedSrc)

  const imageSrc = image?.transformedSrc || `/images/${props.params.handle}.jpg`


  return (
    <>
      <div className='flex-item p-6 text-foreground m-12 mb-auto mt-26 lg:mx-24 mx-auto gap-6'>
        <div className='m-5 mb-auto mt-16 lg:max-w-[50%] mx-auto'>
          <Image
            src={imageSrc}
            alt={image?.altText || 'Product image'}
            className='mx-auto'
            radius='none'
          />
        </div>
        <div className='mx-auto my-12 max-w-3xl'>
          <h1 className='font-bold text-5xl'>{product.title}</h1>
          <h3 className='font-semibold text-xl'>${Number(product.priceRange.minVariantPrice.amount).toFixed(2)}</h3>
          <p>{product.description}</p>
          {quantityAvailable > 0 ?
            <AddToCart
              name={product.title}
              handle={product.handle}
              price={product.priceRange.minVariantPrice.amount}
              image={image?.transformedSrc}
              variantId={variantId} />
            :
            <div className='flex flex-col items-center border-2 border-foreground 
            m-12 p-5 rounded text-xl rounded-2xl'>
              <p>This product is currently unavailable</p>
              <p>Check back frequently to see if it becomes available</p>
            </div>
          }
        </div>
      </div>
    </>
  )
}

export default ProductPage