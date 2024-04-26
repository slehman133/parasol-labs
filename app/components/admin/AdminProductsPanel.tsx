"use client";
import React from "react";
import PartnershipFormTable from "@/components/webforms/tables/partnershipformtable";
import GeneralFormTable from "@/components/webforms/tables/generalformtable";
import OrderDisplay from "@/components/admin/OrderDisplay";
import ProductSection from "@/components/admin/ProductSection";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import UsersSection from "./UsersSection";
import Link from "next/link";
const AdminProductsPanel = ({
    orders,
    products,
}: {
    orders: any;
    products: any;
}) => {
    const router = useRouter()
    const tab = useSearchParams().get("tab")
    const [activeTab, setActiveTab] = React.useState(tab || "orders")

    return (
        <>
            <div className="border-b-2 border-slate-500 flex text-2xl gap-5 mb-5">

                <h1
                    className="hover:bg-white hover:cursor-pointer hover:text-black"
                    onClick={() => {
                        setActiveTab("orders")
                        router.push('/admin?tab=orders')
                    }}
                >
                    Orders
                </h1>
                <h1
                    className="hover:bg-white hover:cursor-pointer hover:text-black"
                    onClick={() => {
                        setActiveTab("products")
                        router.push('/admin?tab=products')
                    }}
                >
                    Products
                </h1>

            </div>
            {activeTab === "orders" && (
                <>
                    <h1 className="text-4xl font-bold">Orders</h1>
                    <div className="my-5">
                        <OrderDisplay orders={orders} />
                    </div>
                </>
            )}
            {activeTab === "analytics" && (
                <>
                    <h1 className='text-4xl font-bold'>Analytics</h1>
                    <div className='my-5'>
                        <iframe
                            width="1200"
                            height="900"
                            src="https://lookerstudio.google.com/embed/reporting/985175c2-a8e5-44a1-97df-dcbec3c2e0d8/page/9HNjD"
                            sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox" />
                    </div>
                </>
            )}
            {activeTab === "products" && (
                <>
                    <div>
                        <ProductSection products={products} />
                    </div>
                </>
            )}
        </>
    );
};

export default AdminProductsPanel;
