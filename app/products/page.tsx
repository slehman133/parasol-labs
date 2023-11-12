import React from 'react'
import ProductCard from '../components/products/ProductCard'
import storefront from '@/utils/storefront'

const query = `
query Products{
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

const getProducts = async (query: string, variables = {}) => {
  const products = await storefront(query)
  return products.data.products.edges
}

const ProductsPage = async () => {
  const products = await getProducts(query)
  return (
    <>
      <div>
        <h1>ProductsPage</h1>

        <div className='flex flex-wrap'>
          {products.map((e: any) => {
            const item = e.node
            const id = item.id.slice(-13)
            const image = item.images.edges[0]?.node.transformedSrc
            const altText = item.images.edges[0]?.node.altText
            const price = item.priceRange.minVariantPrice.amount

            return <ProductCard
              key={item.handle} handle={item.handle} image={image} title={item.title}
              altText={altText} price={price} />
          })}
        </div>
      </div>
    </>
  )
}

export default ProductsPage