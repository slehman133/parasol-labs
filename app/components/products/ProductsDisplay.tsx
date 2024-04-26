"use client"

import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import { Pagination } from "@nextui-org/react";

const ProductsDisplay = (props: { products: any }) => {

    const pages = Math.ceil(props.products.length / 5);

    const [page, setPage] = useState(1);
    const [products, setProducts] = useState(props.products);


    useEffect(() => {
        setProducts(props.products.slice((page - 1) * 5, page * 5))
    }, [page])



    return (
        <>
            <div className="flex flex-wrap">
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
                <div className="mx-auto mt-16">
                    <Pagination
                        showControls
                        data-active-page
                        onChange={(e) => setPage(e)}
                        total={pages}
                        initialPage={1} />
                </div>
            </div>
        </>
    )
}
export default ProductsDisplay