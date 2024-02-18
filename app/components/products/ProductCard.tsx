// code by Samuel Lehman
'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from "framer-motion"

interface ProductCardProps {
    key: string;
    handle: string;
    image: string;
    title: string;
    altText: string;
    price: number;
    description: string;
}

const ProductCard = (props: ProductCardProps) => {
    return (
        <>
            <motion.div className="flex flex-wrap shadow-2xl flex-row w-[90%] mx-auto my-5 justify-between text-white"
                initial={{
                    opacity: 0,
                    y: 100
                }}
                animate={{
                    opacity: 1,
                    y: 0
                }}
                transition={{ duration: 0.75 }}>
                <div className='flex flex-col justify-evenly m-5 p-5 gap-3'>
                    <h2 className="text-5xl font-bold">{props.title}</h2>
                    <p className='font-semibold'>${props.price}</p>
                    <div className='h-60 overflow-hidden max-w-5xl'>
                        <p className='text-clip'>{props.description}</p>
                    </div>
                    <div className='flex justify-center'>
                        <Link className='border-2 border-white hover:bg-blue-600 hover:text-white hover:border-white' href={`/products/${props.handle}`}>
                            <button className='p-5 px-28'>View</button>
                        </Link>
                    </div>
                </div>
                <div className='overflow-hidden max-w-lg'>
                    <Image className='object-cover w-full h-full' height={9000} width={9000} src={props.image} alt={props.altText} />
                </div>
            </motion.div >
        </>)
}

export default ProductCard