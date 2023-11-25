import React from 'react'
import ProductCard from '../components/products/ProductCard'
import { getProducts } from '@/utils/storefront'


export async function generateMetadata() {
  return {
    title: 'Products from Parasol Labs',
  }
}


const ProductsPage = async () => {
  const products = await getProducts()
  return (
    <>
      <div className='text-[var(--text-color)]'>
        <div className='flex flex-wrap'>
          {products.map((e: any) => {
            const item = e.node
            const id = item.id.slice(-13)
            const description = item.description
            const image = item.images.edges[0]?.node.transformedSrc
            const altText = item.images.edges[0]?.node.altText
            const price = item.priceRange.minVariantPrice.amount

            return <ProductCard
              key={item.handle} handle={item.handle} image={image} title={item.title}
              altText={altText} price={price} description={description} />
          })}
        </div>
      </div>
    </>
  )
}

export default ProductsPage