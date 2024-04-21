"use client"

import React, { useState } from 'react'
import ProductDisplay from './ProductDisplay'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Button } from "@nextui-org/react";


const ProductSection = ({ products }: { products: any }) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const [product, setProduct] = useState({
        title: "",
        descriptionHtml: "",
        handle: "",
        altText: "",
        imageUrl: ""
    })


    const [formData, setFormData] = useState(new FormData())

    return (
        <>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1 items-center">
                                Create Item
                            </ModalHeader>
                            <ModalBody className="gap-1 items-center">
                                <form className='flex flex-col gap-3'>
                                    <div className='flex flex-col'>
                                        <label htmlFor="title">Title </label>
                                        <input
                                            type="text"
                                            name="title"
                                            id="title"
                                            className="input input-bordered w-full max-w-xs"
                                            onChange={(e) => setProduct({ ...product, title: e.target.value })}
                                        />
                                    </div>
                                    <div className='flex flex-col'>
                                        <label htmlFor="description">Description</label>
                                        <textarea
                                            name="description"
                                            id="description"
                                            className="textarea textarea-bordered w-full max-w-xs"
                                            onChange={(e) => setProduct({ ...product, descriptionHtml: e.target.value })}
                                        />
                                    </div>
                                    <div className='flex flex-col'>
                                        <label htmlFor="handle">Handle</label>
                                        <input
                                            type="text"
                                            name="handle"
                                            id="handle"
                                            className="input input-bordered w-full max-w-xs"
                                            onChange={(e) => setProduct({ ...product, handle: e.target.value })}
                                        />
                                    </div>
                                    <div className='flex flex-col'>
                                        <label htmlFor="image">Image</label>
                                        <input
                                            formEncType='multipart/form-data'
                                            type="file"
                                            name="image"
                                            id="image"
                                            className="file-input file-input-bordered w-full max-w-xs"
                                            onChange={async (e) => {
                                                const image = e.target.files![0]
                                                const fd = new FormData()
                                                fd.append('file', image)
                                                fd.append('handle', product.handle)
                                                setFormData(fd)
                                            }}
                                        />
                                    </div>
                                    <div className='flex flex-col'>
                                        <label htmlFor="handle">Alt Text For Image</label>
                                        <input
                                            type="text"
                                            name="handle"
                                            id="handle"
                                            className="input input-bordered w-full max-w-xs"
                                            onChange={(e) => setProduct({ ...product, altText: e.target.value })}
                                        />
                                    </div>
                                </form>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="primary" onPress={async () => {
                                    const imageRes = await fetch("/api/admin/product/image", {
                                        method: "POST",
                                        body: formData
                                    }).then(res => res.json())
                                    setProduct({ ...product, imageUrl: imageRes.imageUrl })
                                    const prodRes = await fetch("/api/admin/product", {
                                        method: "POST",
                                        body: JSON.stringify(product),
                                    })
                                    onClose()
                                }}>
                                    Add Item
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
            <div className="flex justify-between">
                <h1 className='text-4xl font-bold'>Products</h1>
                <button
                    onClick={onOpen}
                    className="h-12 rounded-lg border-white border-2 font-bold px-5 hover:bg-white hover:text-black"
                >Add Product</button>
            </div>
            <div className='my-5'>
                <ProductDisplay products={products} />
            </div>
        </>
    )
}

export default ProductSection