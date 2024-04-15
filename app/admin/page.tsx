import PartnershipFormTable from "../components/webforms/tables/partnershipformtable";
import GeneralFormTable from "../components/webforms/tables/generalformtable";
import React from 'react'
import ProductDisplay from '../components/admin/ProductDisplay';
import OrderDisplay from '../components/admin/OrderDisplay';
import { getProducts } from '@/utils/storefront';
import { adminGetProducts, getOrders } from '@/utils/shopifyAdmin';
import ProductSection from "../components/admin/ProductSection";

export async function generateMetadata() {
    return {
        title: "Admin - Parasol Labs",
    };
}


const AdminPage = async () => {
    const products = await getProducts()
    // console.log(products)
    // const adminProducts = await adminGetProducts()
    const orders = await getOrders()
    // console.log(adminProducts)

    return (
        <>
            <div className='m-24'>
                <h1 className='text-4xl font-bold'>Messages</h1>
                <div className='my-5'>
                    {/* <PartnershipFormTable /> */}
                    {/* <GeneralFormTable /> */}
                </div>
                <h1 className='text-4xl font-bold'>Orders</h1>
                <div className='my-5'>
                    <OrderDisplay orders={orders} />
                </div>
                <h1 className='text-4xl font-bold'>Analytics</h1>
                <div className='my-5'>
                    <iframe 
                    width="1200" 
                    height="900" 
                    src="https://lookerstudio.google.com/embed/reporting/985175c2-a8e5-44a1-97df-dcbec3c2e0d8/page/9HNjD" 
                    sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"/>
                </div>
                
                <div className="flex justify-between">
                {/* 
                    <h1 className='text-4xl font-bold'>Products</h1>
                    <button className="h-12 rounded-lg border-white border-2 font-bold px-5">Add Product</button>
                </div>
                <div className='my-5'>
                    <ProductDisplay products={products} />
                </div> */}
                <ProductSection products={products} />
                </div>
            </div>
        </>

    )
}

export default AdminPage;