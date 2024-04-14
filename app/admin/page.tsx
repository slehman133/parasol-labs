import PartnershipFormTable  from "../components/webforms/tables/partnershipformtable";
import GeneralFormTable from "../components/webforms/tables/generalformtable";
import React from 'react'
import ProductDisplay from '../components/admin/ProductDisplay';
import OrderDisplay from '../components/admin/OrderDisplay';
import { getProducts } from '@/utils/storefront';
import { getOrders } from '@/utils/shopifyAdmin';
import ProductSection from "../components/admin/ProductSection";
import DisplayPannel from "../components/admin/DisplayPannel";

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
                <DisplayPannel orders={orders} products={products} />
            </div>
        </>

    )
}

export default AdminPage;