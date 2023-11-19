import React from 'react'
import ProductCard from '../components/products/ProductCard'
import storefront from '@/utils/storefront'


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
    }`
  const products = await storefront(query)
  return products.data.products.edges
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