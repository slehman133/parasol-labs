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
    removeFromCart: (item: CartItem) => void;
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
    const inStorage = typeof window !== 'undefined' ? localStorage.getItem('productsInCart') : null
    const productsInCart = inStorage ? JSON.parse(inStorage) : []
    const [cartItems, setCartItems] = useState<CartItem[]>(productsInCart);

    useEffect(() => {
        localStorage.setItem('productsInCart', JSON.stringify(cartItems))
    }, [cartItems])

    const addToCart = (item: CartItem) => {
        setCartItems([...cartItems, item]);
    };

    const removeFromCart = (item: CartItem) => {
        const newCartItems = cartItems.filter((e) => e !== item)
        setCartItems(newCartItems)
    }

    const clearCart = () => {
        setCartItems([]);
    };

    const contextValue: CartContextProps = {
        addToCart,
        cartItems,
        clearCart,
        removeFromCart,
    };

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
};
