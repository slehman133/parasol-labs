"use client"

import React, { useEffect, useState, useCallback } from 'react'
import ProductCard from './ProductCard'
import { Pagination } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { SearchIcon } from '@/public/SearchIcon';

const ProductsDisplay = (props: { products: any }) => {

    const [page, setPage] = useState(1);
    const [pages, setPages] = useState(Math.ceil(props.products.length / 5));
    const [products, setProducts] = useState(props.products);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const filteredProducts = props.products.filter((e: any) =>
            e.node.title.toLowerCase().startsWith(search.toLowerCase())
        );
        setProducts(filteredProducts);
        setPages(Math.ceil(filteredProducts.length / 5));
        setPage(1);
    }, [search, props.products]);

    useEffect(() => {
            const startIndex = (page - 1) * 5;
            const endIndex = page * 5;
            const slicedProducts = props.products.slice(startIndex, endIndex);
            setProducts(slicedProducts);
            setPages(Math.ceil(slicedProducts.length / 5));
    }, [page, props.products]);

    const onSearchChange = useCallback((value?: string) => {
            if (value) {
                setSearch(value);
            } else {
                setSearch("");
            }
    }, []);

    return (
        <>
            <div className=" container mx-auto flex flex-wrap">
                <div className="w-full mx-auto flex md:flex-row flex-col justify-around gap-4">
                        <Input
                            className="w-full sm:max-w-[44%] my-auto"
                            placeholder='Search by title...'
                            value={search}
                            onValueChange={onSearchChange}
                            startContent={<SearchIcon className='dark:invert'/>}
                            variant='underlined'
                        />
                        <Pagination
                            showControls
                            data-active-page
                            onChange={(e) => setPage(e)}
                            total={pages}
                            page={page}
                            initialPage={1}
                            className='my-auto'
                        />
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
                        page={page}
                        initialPage={1} />
                </div>
            </div>
        </>
    )
}
export default ProductsDisplay