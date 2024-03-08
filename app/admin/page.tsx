import React from 'react'
import { adminGetProducts, adminEditQuantity } from '@/utils/storefront';
import ProductDisplay from '../components/admin/ProductDisplay';

export async function generateMetadata() {
    return {
        title: "Admin - Parasol Labs",
    };
}


const AdminPage = async () => {
    const products = await adminGetProducts()
    console.log(products)

    const res = await adminEditQuantity('gid://shopify/Product/8863165743393', 10)
    console.log(res)

    return (
        <>
            <div className='m-24'>
                <h1 className='text-4xl font-bold'>Products</h1>
                <div className='my-5'>
                    <ProductDisplay products={products} />
                </div>
            </div>
        </>

    )
}

export default AdminPage