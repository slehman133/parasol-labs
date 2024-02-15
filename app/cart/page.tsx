// code by Samuel Lehman

'use client'

import { useCart, CartItem } from '@/app/context/CartContext';
import { createCheckout } from '@/utils/storefront';
import React, { useRef } from 'react';
import Spinner from '@/components/Spinner';

const calcTotalPrice = (items: CartItem[]): string => {
    let total = 0
    items.map((e: CartItem) => {
        total += Number(e.price * e.quantity)
    })
    return total.toFixed(2)
}
const CartPage = () => {
    const { cartItems, clearCart, removeFromCart, editItemQuantity } = useCart();
    const removeItemModal = useRef<HTMLDialogElement>(null)
    const clearCartModal = useRef<HTMLDialogElement>(null)
    const [loading, setLoading] = React.useState(false)

    let itemToRemove = 0

    return (
        <>
            {loading && <Spinner />}
            <dialog ref={removeItemModal}>
                <div className='flex bg-white text-black '>
                    <div className='col-start-2 row-start-2 p-12'>
                        <p className='text-xl'>Are you sure you want to remove this item from the cart?</p>
                        <div className='flex justify-between mx-32 m-5'>
                            <button className='btn btn-primary w-28 btn-error'
                                onClick={() => {
                                    removeFromCart(itemToRemove)
                                    removeItemModal.current?.close()
                                }}>Yes</button>
                            <button className='btn btn-primary w-28'
                                onClick={() => {
                                    removeItemModal.current?.close()
                                }}>Cancel</button>
                        </div>
                    </div>
                </div>
            </dialog>

            <dialog ref={clearCartModal}>
                <div className='flex bg-white text-black '>
                    <div className='col-start-2 row-start-2 p-12'>
                        <p className='text-xl'>Are you sure you want to clear ALL items from cart?</p>
                        <div className='flex justify-between mx-24 m-5'>
                            <button className='btn btn-primary w-28 btn-error'
                                onClick={() => {
                                    clearCart()
                                    clearCartModal.current?.close()
                                }}>Yes</button>
                            <button className='btn btn-primary w-28'
                                onClick={() => {
                                    clearCartModal.current?.close()
                                }}>Cancel</button>
                        </div>
                    </div>
                </div>
            </dialog>

            <div className='m-10 mt-24 mx-[30rem]'>
                <div className='relative'>
                    <h1 className='text-5xl text-black'>Cart</h1>
                    {cartItems.length > 0 &&
                        <button
                            className='btn btn-error absolute right-0 bottom-0'
                            onClick={() => clearCartModal.current?.showModal()}
                        >Clear Cart</button>
                    }
                </div>
                {cartItems.length > 0 &&
                    <h1 className='text-xl text-black'>Total Price: ${calcTotalPrice(cartItems)}</h1>
                }

                <div className='text-black' >
                    {cartItems.length > 0 ? (
                        <>
                            {cartItems.map((item, index) => (
                                <div key={index} className='relative flex flex-row border-2 border-black bg-white max-w-5xl overflow-hidden mx-auto my-5'>
                                    <div className='max-w-sm'>
                                        <img src={item.image} alt={item.name} />
                                    </div>
                                    <div className='p-5'>
                                        <h1 className='font-bold text-2xl'>{item.name}</h1>
                                        <p>Quantity: </p>
                                        <div className='flex gap-5'>
                                            <button disabled={item.quantity == 0} onClick={() => {
                                                editItemQuantity(item, index, -1)
                                            }}>-</button>
                                            <p>{item.quantity}</p>
                                            <button onClick={() => {
                                                editItemQuantity(item, index, 1)
                                            }}>+</button>
                                        </div>
                                        <p>Total Price: ${(item.price * item.quantity).toFixed(2)}</p>
                                    </div>
                                    <div className='absolute right-1 bottom-1'>
                                        <img className='h-9 w-9 hover:cursor-pointer' src="/images/trash.png" alt="trash button"
                                            onClick={(e) => {
                                                itemToRemove = index
                                                removeItemModal.current?.showModal()
                                            }} />
                                    </div>
                                </div>
                            ))}
                        </>
                    ) : (
                        <div>
                            <p className='ml-[25.5rem] my-5'>No items in cart</p>
                        </div>
                    )
                    }
                </div>
                {cartItems.length > 0 &&
                    <div className='flex justify-center mt-24'>
                        <button className='btn btn-primary' onClick={async (e) => {
                            e.preventDefault()
                            setLoading(true)
                            const res = await createCheckout(cartItems, Number(cartItems[0].quantity))
                            clearCart();
                            window.location.replace(res.data.checkoutCreate.checkout.webUrl)
                        }}>Proceed To Checkout</button>
                    </div>
                }
            </div>
        </>
    );
};

export default CartPage;
