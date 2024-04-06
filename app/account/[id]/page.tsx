import React, { useEffect } from "react";

import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useState } from "react";
import { Input } from "@nextui-org/react";
import { Button, ButtonGroup, Divider } from "@nextui-org/react";
import { getOrders, getOrdersByEmail } from '@/utils/shopifyAdmin'
import OrdersDisplay from '@/components/admin/OrderDisplay'
import UserSettings from "@/app/components/account/signin/UserSettings";


const AccountSettingsPage = async (props: { params: { id: string } }) => {
  const variables = { userId: props.params.id };

  const user = await fetch(`http://localhost:3000/api/user/${variables.userId}`)
    .then(res => res.json())

  const orders = await getOrders()
    .then(res => res.filter((e: any) => e.email === user.email))

  return (
    <>
      <div className="m-[5%_10%_2%_10%]">
        <div className="grid grid-rows-auto gap-10">
          <div className=" text-center md:text-left p-4">
            <h1 className="font-bold text-4xl">Account Settings</h1>
          </div>
          <Divider orientation="horizontal" />
          <div className="md:flex md:justify-between grid grid-cols-1 gap-10 text">
            {/* make the background color of the child div slightly brighter than the color of the parent div */}
            <UserSettings userId={variables.userId} />
            <div className="w-1/2 bg-[#160914] p-4 rounded-lg">
              <h1 className="font-bold text-4xl pt-5">Orders</h1>
              <Divider orientation="horizontal" />
              <OrdersDisplay orders={orders} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountSettingsPage;