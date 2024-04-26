import React from 'react'
import { getProducts } from '@/utils/storefront';
import { getOrders } from '@/utils/shopifyAdmin';
import DisplayPanel from "../components/admin/DisplayPanel";
import { getServerSession } from 'next-auth';
import { authOptions } from '@/utils/authOptions';

export async function generateMetadata() {
    return {
        title: "Admin - Parasol Labs",
    };
}


const AdminPage = async () => {
    // const { user } = await getServerSession(authOptions) as { user: any }
    // console.log(user)
    const products = await getProducts()
    // console.log(products)
    // const adminProducts = await adminGetProducts()
    const orders = await getOrders()
    // console.log(adminProducts)
    return (
        <>
            <div className='m-24'>
                <DisplayPanel orders={orders} products={products} />
            </div>
        </>

    )
}

export default AdminPage;