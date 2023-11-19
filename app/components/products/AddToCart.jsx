'use client'
import React, { useState } from 'react';

const AddToCart = () => {
    const [itemQuantity, setItemQuantity] = useState(1);

    const handleQuantityChange = (e) => {
        setItemQuantity(e.target.value);
    };

    return (
        <>
            <div className='flex flex-col gap-3 my-5'>
                <input
                    className='h-12 text-xl text-center rounded-full'
                    type="number"
                    value={itemQuantity}
                    onChange={handleQuantityChange}
                />
                <button className='border-2 border-black rounded-full p-2 text-xl
            hover:bg-blue-600 hover:text-white hover:border-white'>Add To Cart</button>
            </div>
        </>
    );
};

export default AddToCart;
