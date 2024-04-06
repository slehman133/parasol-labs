// code by Samuel Lehman


'use client'
import React, { useState } from 'react';
import { useCart } from '@/app/context/CartContext';
import { buyItNow } from '@/utils/storefront';
import Spinner from '@/components/Spinner';
import { useSession } from 'next-auth/react';

const AddToCart = (props) => {
    const [loading, setLoading] = useState(false)
    const [productToAdd, setProductToAdd] = useState({
        name: props.name,
        price: props.price,
        handle: props.handle,
        quantity: 1,
        image: props.image,
        variantId: props.variantId,
    })
    const { addToCart } = useCart()

    const { data: session } = useSession()

    const [isItemAdded, setIsItemAdded] = useState(false)

    return (
        <>
            {isItemAdded &&
                <div id="toast-default" className="flex items-center w-full max-w-xs p-4 bg-green-500 text-white font-semibold 
                rounded-lg shadow 
                fixed top-20 right-10 
                animate-appearance-in"
                    role=" alert">
                    <div className="ms-3 text-sm">Item(s) Added to Cart</div>
                    <button type="button"
                        className="ms-auto -mx-1.5 -my-1.5 hover:text-gray-900 rounded-lg 
                        focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8"
                        data-dismiss-target="#toast-default" aria-label="Close"
                        onClick={() => setIsItemAdded(false)}
                    >
                        <span className="sr-only">Close</span>
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                    </button>
                </div >}

            {loading && <Spinner />}
            <div className='flex flex-col gap-3 my-4 text-[var(--text-color)] mx-2'>
                <input
                    className='h-12 text-xl text-center rounded-full bg-white text-black'
                    type="number"
                    value={productToAdd.quantity}
                    onChange={(e) => setProductToAdd({ ...productToAdd, quantity: e.target.value })}
                />
                <button className='border-2 border-white rounded-full text-white p-2 text-xl
                hover:bg-blue-600 hover:text-white hover:border-white'
                    onClick={async (e) => {
                        e.preventDefault()
                        setIsItemAdded(false)
                        await addToCart(productToAdd)
                        setIsItemAdded(true)
                    }}>Add To Cart
                </button>
                <button className='border-2 bg-black border-black text-white rounded-full p-2 text-xl
                hover:bg-blue-600 hover:text-white hover:border-white'
                    onClick={async (e) => {
                        e.preventDefault()
                        setLoading(true)
                        const res = await buyItNow(productToAdd.variantId.id,
                            productToAdd.quantity,
                            session?.user.email)
                        window.location.replace(res.data.checkoutCreate.checkout.webUrl)
                    }}>
                    Buy It Now
                </button>
            </div>
        </>
    );
};

export default AddToCart;
