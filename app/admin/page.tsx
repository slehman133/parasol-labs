import PartnershipFormTable from "../components/webforms/tables/partnershipformtable";
import GeneralFormTable from "../components/webforms/tables/generalformtable";
import React from 'react'
import ProductDisplay from '../components/admin/ProductDisplay';
import OrderDisplay from '../components/admin/OrderDisplay';
import { getProducts } from '@/utils/storefront';
import { adminGetProducts, getOrders } from '@/utils/shopifyAdmin';

export async function generateMetadata() {
  return {
    title: "Admin - Parasol Labs",
  };
}


const AdminPage = async () => {
    const products = await getProducts()
    console.log(products)
    // const adminProducts = await adminGetProducts()
    const orders = await getOrders()
    // console.log(adminProducts)

    return (
        <>
            <div className='m-24'>
               {/* <PartnershipFormTable /> */}
                <GeneralFormTable />
                <h1 className='text-4xl font-bold'>Orders</h1>
                <div className='my-5'>
                    <OrderDisplay orders={orders} />
                </div>
                <h1 className='text-4xl font-bold'>Products</h1>
                <div className='my-5'>
                    <ProductDisplay products={products} />
                </div>
            </div>
        </>

    )
}

export default AdminPage;