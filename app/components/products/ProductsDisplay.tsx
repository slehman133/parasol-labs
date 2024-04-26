"use client"

import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import { Pagination } from "@nextui-org/react";
import { Input } from "@nextui-org/react";

const ProductsDisplay = (props: { products: any }) => {

    const [page, setPage] = useState(1);

    const [pages, setPages] = useState(Math.ceil(props.products.length / 5))
    const [products, setProducts] = useState(props.products);
    const [search, setSearch] = useState("");


    useEffect(() => {
        // console.log(products)
        setProducts(props.products.filter((e: any) => e.node.title.toLowerCase().includes(search.toLowerCase())))
        setPages(Math.ceil(props.products.filter((e: any) => e.node.title.toLowerCase().includes(search.toLowerCase())).length / 5))
        setPage(1)
    }, [search, props.products])

    useEffect(() => {
        setProducts(props.products.slice((page - 1) * 5, page * 5))
    }, [page, pages, props.products])



    return (
        <>
            <div className="flex flex-wrap">
                <div className="w-full flex justify-end">
                    <div className='pr-16 sm:pr-20 md:pr-32 lg:pr-40'>
                        <Input
                            className='w-96'
                            placeholder='Search...'
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                </div>
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
            </div>
            <div className='flex justify-center'>
                <div className="mx-auto mt-16">
                    <Pagination
                        showControls
                        onChange={(e) => setPage(e)}
                        total={pages}
                        initialPage={1} />
                </div>
            </div>
        </>
    )
}
export default ProductsDisplay