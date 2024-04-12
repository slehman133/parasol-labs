"use client"
import { useState } from 'react'
import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell } from "@nextui-org/react";
import { adminGetProducts, adminEditQuantity } from '@/utils/shopifyAdmin';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Button } from "@nextui-org/react";


const ProductDisplay = ({ products }: { products: any }) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const [inventoryToChange, setInventoryToChange] = useState({
        id: 0,
        variantId: 0,
        totalInventory: 0
    });

    const [priceToChange, setPriceToChange] = useState({
        id: 0,
        variantId: 0,
        price: 0
    });

    const [changing, setChanging] = useState("")

    return (
        <>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            {changing === "inventory" &&
                                <>
                                    <ModalHeader className="flex flex-col gap-1 items-center">
                                        Change Quantity
                                    </ModalHeader>
                                    <ModalBody className="gap-1">
                                        <form>
                                            <label>Enter Change:</label>
                                            <input
                                                className='ml-2'
                                                type="number"
                                                // placeholder={inventoryToChange.totalInventory.toString()}
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
                                                            variantId: inventoryToChange.variantId,
                                                            quantity: inventoryToChange.totalInventory
                                                        }),
                                                })
                                            onClose()
                                        }}>
                                            Change
                                        </Button>
                                    </ModalFooter>
                                </>}
                            {changing === "price" &&
                                <>
                                    <ModalHeader className="flex flex-col gap-1 items-center">
                                        Change Price
                                    </ModalHeader>
                                    <ModalBody className="gap-1">
                                        <form>
                                            <label>Enter Price:</label>
                                            <input
                                                className='ml-2'
                                                type="number"
                                                // placeholder={inventoryToChange.totalInventory.toString()}
                                                onChange={(e) =>
                                                    setPriceToChange({
                                                        ...priceToChange,
                                                        price: parseFloat(e.target.value)
                                                    })}
                                            />
                                        </form>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="danger" variant="light" onPress={onClose}>
                                            Close
                                        </Button>
                                        <Button color="primary" onPress={async () => {
                                            const res = await fetch('/api/admin/product/price',
                                                {
                                                    method: "PATCH",
                                                    body: JSON.stringify(
                                                        {
                                                            event: "edit-price",
                                                            id: priceToChange.id,
                                                            variantId: priceToChange.variantId,
                                                            price: priceToChange.price
                                                        }),
                                                })
                                            onClose()
                                        }}>
                                            Change
                                        </Button>
                                    </ModalFooter>
                                </>}
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
                        const { id, title, description, totalInventory, handle,
                            priceRange: { minVariantPrice: { amount } }, variants: { edges } } = e.node
                        const variantId = edges[0].node.id
                        return (
                            <TableRow key={id}>
                                <TableCell>{<a href={`/products/${handle}`}>{title}</a>}</TableCell>
                                <TableCell>
                                    <div
                                        className='cursor-pointer'
                                        onClick={() => {
                                            setInventoryToChange(
                                                { id, totalInventory, variantId })
                                            setChanging("inventory")
                                            onOpen()
                                        }}>
                                        {totalInventory}
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className='cursor-pointer'
                                        onClick={() => {
                                            setPriceToChange(
                                                { id, price: amount, variantId })
                                            setChanging("price")
                                            onOpen()
                                        }}>
                                        ${amount}
                                    </div>
                                </TableCell>
                                <TableCell>{description}</TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody >
            </Table >
        </>
    )
}

export default ProductDisplay