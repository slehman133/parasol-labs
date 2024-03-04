// code by Samuel Lehman

'use client'

import { useCart, CartItem } from '@/app/context/CartContext';
import { createCheckout } from '@/utils/storefront';
import React, { useState } from 'react';
import Spinner from '@/components/Spinner';
import { motion } from "framer-motion"
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react"
import Link from 'next/link';
const calcTotalPrice = (items: CartItem[]): string => {
    let total = 0
    items.map((e: CartItem) => {
        total += Number(e.price * e.quantity)
    })
    return total.toFixed(2)
}
const CartPage = () => {
    const { cartItems, clearCart, removeFromCart, editItemQuantity } = useCart();
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [loading, setLoading] = useState(false)

    let itemToRemove = 0

    return (
        <>
            {loading && <Spinner />}
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1 text-center">Removing Item</ModalHeader>
                            <ModalBody>
                                <p>
                                    Are you sure you want to remove this item?
                                </p>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onPress={() => {
                                    removeFromCart(itemToRemove)
                                    onClose()
                                }}>
                                    Yes
                                </Button>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Cancel
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>

            <motion.div
                initial={{
                    opacity: 0,
                    y: 100
                }}
                animate={{
                    opacity: 1,
                    y: 0
                }}
                transition={{ duration: 0.75 }}>

                <div className='grid grid-cols-2 gap-5 h-[95vh]'>
                    <div className='col-start-1 m-16 overflow-y-scroll max-h-[80vh]'>
                        {
                            cartItems.length > 0 &&
                            <Link href="/products"><h1 className='text-xl font-bold mx-28'>&larr; View more products</h1></Link>
                        }
                        {cartItems.length > 0 ? (
                            <>
                                {cartItems.map((item, index) => (
                                    <div key={index} className='relative flex flex-row overflow-hidden mx-28 shadow-small my-5'>
                                        <div className='overflow-hidden'>
                                            <img className="object-cover h-48 w-48" src={item.image} alt={item.name} />
                                        </div>
                                        <div className='p-5'>
                                            <h1 className='font-bold text-2xl'>{item.name}</h1>
                                            <p>Quantity: </p>
                                            <div className='flex gap-5'>
                                                <button disabled={item.quantity == 1} onClick={() => {
                                                    editItemQuantity(item, index, -1)
                                                }}>-</button>
                                                <p>{item.quantity}</p>
                                                <button onClick={() => {
                                                    editItemQuantity(item, index, 1)
                                                }}>+</button>
                                            </div>
                                            <p>Total Price: ${(item.price * item.quantity).toFixed(2)}</p>
                                        </div>
                                        <div className='absolute right-2 bottom-2'>
                                            <img className='h-8 w-8 hover:cursor-pointer hover:animate-pulse'
                                                src="/images/trash.png"
                                                alt="trash button"
                                                onClick={(e) => {
                                                    itemToRemove = index
                                                    onOpen()
                                                }} />
                                        </div>
                                    </div>
                                ))}
                            </>
                        ) : (
                            <div>
                                <p className='ml-[25.5rem] text-2xl'>No items in cart</p>
                            </div>
                        )
                        }
                    </div>
                    <div className='col-start-2 m-16'>
                        <h1 className='text-5xl font-bold'>Order Summary</h1>
                        <p className='my-5 text-2xl'>Total Price: ${calcTotalPrice(cartItems)}</p>
                        <button className='border-2 border-white p-5 mt-56 text-xl font-semibold
                    hover:bg-white hover:text-black hover:border-black hover: cursor-pointer transition-all'
                            disabled={cartItems.length == 0}
                            onClick={async (e) => {
                                e.preventDefault()
                                setLoading(true)
                                const res = await createCheckout(cartItems)
                                clearCart();
                                window.location.replace(res.data.checkoutCreate.checkout.webUrl)
                            }}
                        >Proceed To Checkout &rarr;</button>
                    </div>

                </div>
            </motion.div >
        </>
    );
};

export default CartPage;
