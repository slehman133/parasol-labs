// code by Samuel Lehman


import React from "react";
import ProductCard from "../components/products/ProductCard";
import { getProducts } from "@/utils/storefront";
import ProductsDisplay from "@/components/products/ProductsDisplay";

export async function generateMetadata() {
  return {
    title: "Products from Parasol Labs",
  };
}

const ProductsPage = async () => {
  const products = await getProducts();
  return (
    <>
      <div className="text-[var(--text-color)] my-24 ">
        {/* <div className="flex flex-wrap">
          {products.map((e: any) => {
            const item = e.node;
            const id = item.id.slice(-13);
            const description = item.description;
            const image = item.images.edges[0]?.node.transformedSrc ?
              item.images.edges[0]?.node.transformedSrc
              :
              `/images/${item.handle}.jpg`;
            const altText = item.images.edges[0]?.node.altText;
            const price = item.priceRange.minVariantPrice.amount;

            return (
              <ProductCard
                data-testid="ProductCard"
                key={item.handle}
                handle={item.handle}
                image={image}
                title={item.title}
                altText={altText}
                price={price}
                description={description}
              />
            );
          })}
        </div> */}
        <ProductsDisplay products={products} />
      </div>
    </>
  );
};

export default ProductsPage;
