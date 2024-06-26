import React, { useEffect } from "react";

import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useState } from "react";
import { Input } from "@nextui-org/react";
import { Button, ButtonGroup, Divider } from "@nextui-org/react";
import { getOrders, getOrdersByEmail } from '@/utils/shopifyAdmin'
import OrdersDisplay from '@/components/account/signin/OrdersDisplay'
import UserSettings from "@/app/components/account/signin/UserSettings";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";


const AccountSettingsPage = async (props: { params: { id: string } }) => {
  const session: any = await getServerSession(authOptions)
  const variables = { userId: props.params.id };

  if (session?.user?.id !== variables.userId) {
    redirect("/404")
  }

  // const user = await fetch(`http://localhost:3000/api/user/${variables.userId}`)
  //   .then(res => res.json())

  const orders = await getOrders()
    .then(res => res.filter((e: any) => e.email === session.user.email))


  // console.log(session)

  return (
    <>
      <div className="m-[5%_10%_2%_10%] container px-4 mx-auto">
        <div className="grid grid-rows-auto gap-10">
          <div className=" text-center md:text-left p-4">
            <h1 className="font-bold text-4xl">Account Settings</h1>
          </div>
          <Divider orientation="horizontal" />
          <div className="lg:flex lg:justify-center items-center grid grid-cols-1 gap-10 text">
            {/* make the background color of the child div slightly brighter than the color of the parent div */}
            <UserSettings userId={variables.userId} />
            <div>
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