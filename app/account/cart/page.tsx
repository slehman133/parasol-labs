// code by Samuel Lehman

'use client'

import { useCart, CartItem } from '@/app/context/CartContext';
import { createCheckout } from '@/utils/storefront';
import React from 'react';

const calcTotalPrice = (items: CartItem[]): string => {
    let total = 0
    items.map((e: CartItem) => {
        total += Number(e.price * e.quantity)
    })
    return total.toFixed(2)
}
const CartPage = () => {
    const { cartItems, clearCart, removeFromCart } = useCart();
    return (
        <>
            <div className='m-10 mt-24'>
                <h1 className='text-5xl text-black ml-[25rem]'>Cart</h1>
                <div className='text-black'>
                    {cartItems.length > 0 ? (
                        <>
                            <h1 className='text-xl text-black ml-[25.25rem]'>Total Price: ${calcTotalPrice(cartItems)}</h1>
                            {cartItems.map((item, index) => (
                                <div key={index} className='relative flex flex-row border-2 border-black max-w-5xl overflow-hidden mx-auto my-5'>
                                    <div className='max-w-sm'>
                                        <img src={item.image} alt={item.name} />
                                    </div>
                                    <div className='p-5'>
                                        <h1 className='font-bold text-2xl'>{item.name}</h1>
                                        <p>Quantity: {item.quantity}</p>
                                        <p>Total Price: ${(item.price * item.quantity).toFixed(2)}</p>
                                    </div>
                                    <div className='absolute right-1 bottom-1'>
                                        <img className='h-12 w-12 hover:cursor-pointer' src="/images/trash.png" alt="trash button"
                                            onClick={(e) => removeFromCart(cartItems[index])} />
                                    </div>
                                </div>
                            ))}

                            <div className='flex justify-center m-5'>
                                <button className='btn btn-primary' onClick={async (e) => {
                                    e.preventDefault();
                                    const res = await createCheckout(cartItems[0].variantId.id, Number(cartItems[0].quantity))
                                    clearCart();
                                    window.location.replace(res.data.checkoutCreate.checkout.webUrl)
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
