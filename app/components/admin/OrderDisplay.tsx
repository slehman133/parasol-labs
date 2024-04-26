"use client"
import React from 'react'
import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell } from "@nextui-org/react";
import { adminGetProducts, adminEditQuantity } from '@/utils/shopifyAdmin';


const ProductDisplay = ({ orders }: { orders: any }) => {
    const classNames = React.useMemo(
    () => ({
      wrapper: ["max-h-[382px]"],
      th: ["bg-[inherit]", "text-default-500", "border-b", "border-divider"],
      td: [
        // changing the rows border radius
        // first
        "group-data-[first=true]:first:before:rounded-none",
        "group-data-[first=true]:last:before:rounded-none",
        // middle
        "group-data-[middle=true]:before:rounded-none",
        // last
        "group-data-[last=true]:first:before:rounded-none",
        "group-data-[last=true]:last:before:rounded-none",
      ],
    }),
    []
  );

    return (
        <>
            <Table classNames={classNames} removeWrapper isCompact>
                <TableHeader>
                    <TableColumn>
                        Status
                    </TableColumn>
                    <TableColumn>
                        Order #
                    </TableColumn>
                    <TableColumn>
                        Product(s)
                    </TableColumn>
                    {/* <TableColumn>
                        First Name
                    </TableColumn>
                    <TableColumn>
                        Last Name
                    </TableColumn>
                    <TableColumn>
                        Email
                    </TableColumn> */}

                    <TableColumn>
                        Shipping Address
                    </TableColumn>
                    <TableColumn>
                        Total Price
                    </TableColumn>
                </TableHeader>
                <TableBody emptyContent="No orders found">
                    {orders.map((e: any) => {
                        const {
                            id,
                            displayFulfillmentStatus,
                            lineItems: { nodes },
                            name,
                            email,
                            shippingAddress: {
                                firstName,
                                lastName,
                                formatted
                            },
                            quantity,
                            totalPriceSet: {
                                shopMoney: { amount }
                            } } = e
                        return (
                            <TableRow key={id}>
                                <TableCell>{displayFulfillmentStatus == "UNFULFILLED" ? "IN PROGRESS" : "Fulfilled"}</TableCell>
                                <TableCell>{name}</TableCell>
                                <TableCell>
                                    {
                                        nodes.map((e: any) => {
                                            const { quantity, variant } = e
                                            return (
                                                <p key={id}>{variant?.product?.title} x{quantity}</p>
                                            )
                                        })
                                    }
                                </TableCell>
                                {/* <TableCell>{firstName}</TableCell>
                                <TableCell>{lastName}</TableCell>
                                <TableCell>{email}</TableCell> */}
                                <TableCell>{formatted.join(' ')}</TableCell>
                                <TableCell>${amount}</TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </>
    )
}

export default ProductDisplay