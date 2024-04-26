import React from 'react'
import { getProducts } from '@/utils/storefront';
import { getOrders } from '@/utils/shopifyAdmin';
import DisplayPanel from "../components/admin/DisplayPanel";
import { getServerSession } from 'next-auth';
import { authOptions } from '@/utils/authOptions';
import AdminPanel from '../components/admin/AdminPanel';
import AdminProductsPanel from '../components/admin/AdminProductsPanel';
import AdminFormsPanel from '../components/admin/AdminFormsPanel';
export async function generateMetadata() {
    return {
        title: "Admin - Parasol Labs",
    };
}


const AdminPage = async () => {
    const { user: { role } } = await getServerSession(authOptions) as { user: any }
    // console.log(role)
    const products = await getProducts()
    // console.log(products)
    // const adminProducts = await adminGetProducts()
    const orders = await getOrders()
    // console.log(adminProducts)
    return (
        <>
            <div className='m-24'>
                {role === 'superadmin' &&
                    <DisplayPanel orders={orders} products={products} />
                }
                {role === 'admin' &&
                    <AdminPanel orders={orders} products={products} />
                }
                {role === 'admin_products' &&
                    <AdminProductsPanel orders={orders} products={products} />
                }
                {role === 'admin_forms' &&
                    <AdminFormsPanel />
                }
            </div>
        </>

    )
}

export default AdminPage;