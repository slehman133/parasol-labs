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
const DisplayPanel = () => {

    return (
        <>
            <div className="my-5">
                <h1 className="text-4xl font-bold">General Form</h1>
                <GeneralFormTable />
            </div>
            <div className="my-5">
                <h1 className="text-4xl font-bold">Partnership Form</h1>
                <PartnershipFormTable />
            </div>
        </>

    )
}

export default DisplayPanel;
