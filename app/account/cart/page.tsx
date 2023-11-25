'use client'

import { useCart, CartItem } from '@/app/context/CartContext';
import React from 'react';

const calcTotalPrice = (items: CartItem[]): string => {
    let total = 0
    items.map((e: CartItem) => {
        total += Number(e.price * e.quantity)
    })
    return total.toFixed(2)
}
const CartPage = () => {
    const { cartItems, clearCart } = useCart();
    return (
        <>
            <div className='m-10'>
                <h1 className='text-5xl text-black ml-[25rem]'>Cart</h1>
                <div className='text-black'>
                    {cartItems.length > 0 ? (
                        <>
                            <h1 className='text-xl text-black ml-[25.25rem]'>Total Price: ${calcTotalPrice(cartItems)}</h1>
                            {cartItems.map((item, index) => (
                                <div key={index} className='flex flex-row border-2 border-black max-w-5xl overflow-hidden mx-auto my-5'>
                                    <div className='max-w-sm'>
                                        <img src={item.image} alt={item.name} />
                                    </div>
                                    <div className='p-5'>
                                        <h1 className='font-bold text-2xl'>{item.name}</h1>
                                        <p>Quantity: {item.quantity}</p>
                                        <p>Total Price: ${(item.price * item.quantity).toFixed(2)}</p>
                                    </div>
                                </div>
                            ))}

                            <div className='flex justify-center m-5'>
                                <button className='btn btn-primary' onClick={(e) => {
                                    e.preventDefault();
                                    clearCart();
                                }}>Proceed To Checkout</button>
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

export default CartPage;
