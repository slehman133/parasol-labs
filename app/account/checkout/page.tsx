'use client'

import { useCart, CartItem } from '@/app/context/CartContext';
import React from 'react';

const CheckOutPage = () => {
    const { cartItems, clearCart } = useCart();

    const calcTotalPrice = (items: CartItem[]): number => {
        let total = 0
        items.map((e: CartItem) => {
            total += Number(e.price * e.quantity)
        })
        return total
    }

    return (
        <>
            <div className='m-10'>
                <h1 className='text-5xl text-black ml-[25rem]'>Checkout</h1>
                <div className='text-black'>
                    {cartItems.length > 0 ? (
                        <>
                            <h1 className='text-3xl text-black ml-[25.25rem]'>Total Price: ${calcTotalPrice(cartItems)}</h1>
                            {cartItems.map((cart, index) => (
                                <div key={index} className='flex flex-row border-2 border-black max-w-5xl overflow-hidden mx-auto my-5'>
                                    <div className='max-w-sm'>
                                        <img src={cart.image} alt={cart.name} />
                                    </div>
                                    <div className='p-5'>
                                        <h1 className='font-bold text-2xl'>{cart.name}</h1>
                                        <p>Quantity: {cart.quantity}</p>
                                        <p>Total Price: ${cart.price * cart.quantity}</p>
                                    </div>
                                </div>
                            ))}

                            <div className='flex justify-center m-5'>
                                <button className='btn btn-primary' onClick={(e) => {
                                    e.preventDefault();
                                    clearCart();
                                }}>Confirm Order</button>
                            </div>
                        </>
                    ) : (
                        <div>
                            <p className='ml-[25.5rem] my-5'>No items in cart</p>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default CheckOutPage;
