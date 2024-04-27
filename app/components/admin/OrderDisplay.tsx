"use client"
import React from 'react'
import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell } from "@nextui-org/react";
import { adminGetProducts, adminEditQuantity } from '@/utils/shopifyAdmin';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Button } from "@nextui-org/react";


const OrderDisplay = ({ orders }: { orders: any }) => {

    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const [orderToChange, setOrderToChange] = React.useState({
        id: "",
        name: "",
        status: "",
    });

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
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            {orderToChange.status != "FULFILLED" ?
                                <>
                                    <ModalHeader className="flex flex-col gap-1 items-center">
                                        Change Fulfillment Status
                                    </ModalHeader>
                                    <ModalBody className="gap-1">
                                        <div className='text-center'>
                                            Mark order {orderToChange.name} as fulfilled?
                                        </div>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="danger" variant="light" onPress={onClose}>
                                            Close
                                        </Button>
                                        <Button color="primary" onPress={async () => {
                                            const res = await fetch(`/api/admin/orders`,
                                                {
                                                    method: "PATCH",
                                                    body: JSON.stringify(orderToChange)
                                                })
                                            // console.log(res)
                                            onClose()
                                        }}>
                                            Change
                                        </Button>
                                    </ModalFooter>
                                </>
                                :
                                <>
                                    <ModalHeader className="flex flex-col gap-1 items-center">
                                        Change Fulfillment Status
                                    </ModalHeader>
                                    <ModalBody className="gap-1">
                                        <div className='text-center'>
                                            Order {orderToChange.name} already fulfilled.
                                        </div>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="danger" variant="light" onPress={onClose}>
                                            Close
                                        </Button>
                                    </ModalFooter>
                                </>
                            }
                        </>
                    )}
                </ModalContent>
            </Modal>
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
                    <TableColumn>
                        First Name
                    </TableColumn>
                    <TableColumn>
                        Last Name
                    </TableColumn>
                    <TableColumn>
                        Email
                    </TableColumn>

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
                            <TableRow
                                className='cursor-pointer'
                                key={id}
                                onClick={() => {
                                    setOrderToChange({ id, name, status: displayFulfillmentStatus })
                                    onOpen()
                                }}>
                                <TableCell>{displayFulfillmentStatus == "UNFULFILLED" ? "IN PROGRESS" : "FULFILLED"}</TableCell>
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
                                <TableCell>{firstName}</TableCell>
                                <TableCell>{lastName}</TableCell>
                                <TableCell>{email}</TableCell>
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

export default OrderDisplay