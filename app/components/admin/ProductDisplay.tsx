"use client"
import { useState } from 'react'
import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell } from "@nextui-org/react";
import { adminGetProducts, adminEditQuantity } from '@/utils/shopifyAdmin';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Button } from "@nextui-org/react";


const ProductDisplay = ({ products }: { products: any }) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [inventoryToChange, setInventoryToChange] = useState({
        id: 0,
        totalInventory: 0
    });

    return (
        <>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1 items-center">
                                Change Quantity
                            </ModalHeader>
                            <ModalBody className="gap-1">
                                <form>
                                    <label>Enter New Quantity:</label>
                                    <input
                                        className='ml-2'
                                        type="number"
                                        placeholder={inventoryToChange.totalInventory.toString()}
                                        onChange={(e) =>
                                            setInventoryToChange({
                                                ...inventoryToChange,
                                                totalInventory: parseInt(e.target.value)
                                            })}
                                    />
                                </form>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="primary" onPress={async () => {
                                    const res = await fetch('/api/admin',
                                        {
                                            method: "PATCH",
                                            body: JSON.stringify(
                                                {
                                                    event: "edit-quantity",
                                                    id: inventoryToChange.id,
                                                    quantity: inventoryToChange.totalInventory
                                                }),
                                        })
                                    onClose()
                                }}>
                                    Change
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
            <Table>
                <TableHeader>
                    <TableColumn>
                        Title
                    </TableColumn>
                    <TableColumn>
                        Inventory
                    </TableColumn>
                    <TableColumn>
                        Price
                    </TableColumn>
                    <TableColumn>
                        Description
                    </TableColumn>
                </TableHeader>
                <TableBody>
                    {products.map((e: any) => {
                        const { id, title, description, totalInventory,
                            priceRange: { minVariantPrice: { amount } } } = e.node
                        return (
                            <TableRow key={id}>
                                <TableCell>{title}</TableCell>
                                <TableCell>
                                    <div
                                        className='cursor-pointer'
                                        onClick={() => {
                                            setInventoryToChange({ id, totalInventory })
                                            onOpen()
                                        }}>
                                        {totalInventory}
                                    </div>
                                </TableCell>
                                <TableCell>{amount}</TableCell>
                                <TableCell>{description}</TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </>
    )
}

export default ProductDisplay