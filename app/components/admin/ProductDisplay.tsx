"use client"
import React from 'react'
import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell } from "@nextui-org/react";

const ProductDisplay = ({ products }: { products: any }) => {
    return (
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
                        priceRangeV2: { minVariantPrice: { amount } } } = e
                    return (
                        <TableRow key={1}>
                            <TableCell>{title}</TableCell>
                            <TableCell>{totalInventory}</TableCell>
                            <TableCell>{amount}</TableCell>
                            <TableCell>{description}</TableCell>
                        </TableRow>
                    )
                })}
            </TableBody>
        </Table>
    )
}

export default ProductDisplay