// code by Samuel Lehman


'use client'
import React, { useState } from 'react';
import { useCart } from '@/app/context/CartContext';
import { buyItNow } from '@/utils/storefront';

const AddToCart = (props) => {
    const [productToAdd, setProductToAdd] = useState({
        name: props.name,
        price: props.price,
        handle: props.handle,
        quantity: 1,
        image: props.image,
        variantId: props.variantId,
    })
    const { addToCart } = useCart()

    return (
        <>
            <div className='flex flex-col gap-3 my-4 text-[var(--text-color)] mx-2'>
                <input
                    className='h-12 text-xl text-center rounded-full bg-white'
                    type="number"
                    value={productToAdd.quantity}
                    onChange={(e) => setProductToAdd({ ...productToAdd, quantity: e.target.value })}
                />
                <button className='border-2 border-black rounded-full p-2 text-xl
                hover:bg-blue-600 hover:text-white hover:border-white'
                    onClick={async (e) => {
                        e.preventDefault()
                        await addToCart(productToAdd)
                    }}>Add To Cart
                </button>
                <button className='border-2 bg-black text-white border-white rounded-full p-2 text-xl
                hover:bg-blue-600 hover:text-white hover:border-white'
                    onClick={async (e) => {
                        e.preventDefault()
                        const res = await buyItNow(productToAdd.variantId.id, productToAdd.quantity)
                        window.location.replace(res.data.checkoutCreate.checkout.webUrl)
                    }}>
                    Buy It Now
                </button>
            </div>
        </>
    );
};

export default AddToCart;
