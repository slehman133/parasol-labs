import React from 'react'
import { adminGetProducts } from '@/utils/storefront';

export async function generateMetadata() {
    return {
        title: "Admin - Parasol Labs",
    };
}


const AdminPage = async() => {
    const products = await adminGetProducts()
    console.log(products)
    return (
        <div>AdminPage</div>
    )
}

export default AdminPage