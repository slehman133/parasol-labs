// code by Samuel Lehman

'use client'
import { createContext, useContext, ReactNode, useState, useEffect } from 'react';

export interface CartItem {
    name: string;
    handle: string;
    price: number;
    image: string;
    quantity: number;
    variantId: {
        id: string
    };
}

interface CartContextProps {
    addToCart: (item: CartItem) => void;
    cartItems: CartItem[];
    clearCart: () => void;
    removeFromCart: (index: number) => void;
    editItemQuantity: (item: CartItem, index: number, newQuantity: number) => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export function useCart(): CartContextProps {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
}

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [mounted, setMounted] = useState(false)
    const inStorage = typeof window !== 'undefined' ? localStorage.getItem('productsInCart') : null
    const productsInCart = inStorage ? JSON.parse(inStorage) : []
    const [cartItems, setCartItems] = useState<CartItem[]>(productsInCart);


    useEffect(() => {
        localStorage.setItem('productsInCart', JSON.stringify(cartItems))
    }, [cartItems])

    useEffect(() => {
        setMounted(true)
    }, [])

    const addToCart = (item: CartItem) => {
        cartItems ? setCartItems([...cartItems, item]) : setCartItems([item])
    };

    const removeFromCart = (index: number) => {
        const newArr = cartItems.filter((item, i: number) => {
            if (i !== index) {
                return true
            }
        })
        setCartItems(newArr)
    }

    const clearCart = () => {
        setCartItems([]);
    };

    const editItemQuantity = (item: CartItem, index: number, newQuantity: number) => {
        setCartItems(() => {
            let newArr = [...cartItems]
            const newItem = { ...item }
            newItem.quantity += newQuantity
            newArr.splice(index, 1, newItem)
            return newArr
        })
    }

    const contextValue: CartContextProps = {
        addToCart,
        cartItems,
        clearCart,
        removeFromCart,
        editItemQuantity
    };


    return (
        <>
            {
                mounted &&
                <CartContext.Provider value={contextValue}>
                    {children}
                </CartContext.Provider>
            }
        </>
    )
};
