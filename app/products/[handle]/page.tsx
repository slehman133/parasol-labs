import { getProduct } from '@/utils/storefront'
import React from 'react'
import Image from 'next/image'
import AddToCart from '../../components/products/AddToCart'

interface ProductPageProps {
  params: {
    handle: string;
  };
}

export async function generateMetadata({ params }: { params: { handle: string } }) {
  return {
    title: `${params.handle} at Parasol Labs`,
  }
}

const ProductPage = async (props: ProductPageProps) => {
  const variables = { handle: props.params.handle }
  const product = await getProduct(variables)
  const image = product.images.edges[0]?.node
  const variantId = product.variants.edges[0].node


  return (
    <>
      <div className='flex flex-row text-[var(--text-color)] m-12 mb-auto mt-32'>
        <div className='m-5 mb-auto mt-12'>
          {image ?
            <Image
              src={image.transformedSrc}
              alt={image.altText}
              width={8000}
              height={8000} />
            :
            <div className='bg-white w-[500px] h-[500px]'>

            </div>
          }
        </div>
        <div className='m-12'>
          <h1 className='font-bold text-5xl'>{product.title}</h1>
          <h3 className='font-semibold text-xl'>${product.priceRange.minVariantPrice.amount}</h3>
          <p>{product.description}</p>
          <AddToCart name={product.title} handle={product.handle} price={product.priceRange.minVariantPrice.amount} image={image.transformedSrc} variantId={variantId} />
        </div>
      </div>
    </>
  )
}

export default ProductPage