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
                    <GeneralFormTable />
                </div>
                <h1 className='text-4xl font-bold'>Orders</h1>
                <div className='my-5'>
                    <OrderDisplay orders={orders} />
                </div>
                {/* <div className="flex justify-between">
                    <h1 className='text-4xl font-bold'>Products</h1>
                    <button className="h-12 rounded-lg border-white border-2 font-bold px-5">Add Product</button>
                </div>
                <div className='my-5'>
                    <ProductDisplay products={products} />
                </div> */}
                <ProductSection products={products} />
            </div>
        </>

    )
}

export default AdminPage;