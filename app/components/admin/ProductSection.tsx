"use client"

import React, { useState } from 'react'
import ProductDisplay from './ProductDisplay'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Button } from "@nextui-org/react";
import { useRouter, useSearchParams } from 'next/navigation';
import { Spinner } from "@nextui-org/react";

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

    const [loading, setLoading] = useState(false)

    const router = useRouter()

    const image = useSearchParams().get("image")

    return (
        <>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            {loading ?
                                <div className='h-[25vh] grid grid-cols-3 grid-rows-3 place-items-center'>
                                    <div className='col-start-2 row-start-2'>
                                        <Spinner className='mx-auto' />
                                    </div>
                                </div>
                                :
                                <>
                                    <ModalHeader className="flex flex-col gap-1 items-center">
                                        Create Item
                                    </ModalHeader>
                                    <ModalBody className="gap-1 items-center">
                                        <form id="create-form" method='POST'
                                            className='flex flex-col gap-3'>
                                            <div className='flex flex-col'>
                                                <label htmlFor="title">Title </label>
                                                <input
                                                    type="text"
                                                    name="title"
                                                    id="title"
                                                    className="input input-bordered w-full max-w-xs bg-background"
                                                    onChange={(e) => setProduct({ ...product, title: e.target.value })}
                                                    value={product.title}
                                                />
                                            </div>
                                            <div className='flex flex-col'>
                                                <label htmlFor="description">Description</label>
                                                <textarea
                                                    name="description"
                                                    id="description"
                                                    className="textarea textarea-bordered w-full max-w-xs bg-background"
                                                    onChange={(e) => setProduct({ ...product, descriptionHtml: e.target.value })}
                                                    value={product.descriptionHtml}
                                                />
                                            </div>
                                            <div className='flex flex-col'>
                                                <label htmlFor="handle">Handle</label>
                                                <input
                                                    type="text"
                                                    name="handle"
                                                    id="handle"
                                                    className="input input-bordered w-full max-w-xs bg-background"
                                                    onChange={(e) => setProduct({ ...product, handle: e.target.value })}
                                                    value={product.handle}
                                                />
                                            </div>
                                            <div className='flex flex-col'>
                                                <label htmlFor="image">Image</label>
                                                <input
                                                    formEncType='multipart/form-data'
                                                    type="file"
                                                    name="image"
                                                    id="image"
                                                    className="file-input file-input-bordered w-full max-w-xs bg-background"
                                                    onChange={async (e) => {
                                                        const image = e.target.files![0]
                                                        const fd = new FormData()
                                                        fd.append('file', image)
                                                        fd.append('handle', product.handle)
                                                        setFormData(fd)
                                                    }}
                                                />
                                                <button className='btn btn-primary my-2'
                                                    onClick={async (e) => {
                                                        setLoading(true)
                                                        e.preventDefault()
                                                        const imageRes = await fetch("/api/admin/product/image", {
                                                            method: "POST",
                                                            body: formData
                                                        }).then(res => res.json())
                                                        const img = imageRes.imageUrl
                                                        router.push(`/admin?tab=products&image=${img}`)
                                                        setLoading(false)
                                                    }}
                                                >Add Image</button>
                                            </div>
                                            <div className='flex flex-col'>
                                                <label htmlFor="handle">Alt Text For Image</label>
                                                <input
                                                    type="text"
                                                    name="handle"
                                                    id="handle"
                                                    className="input input-bordered w-full max-w-xs bg-background"
                                                    onChange={(e) => setProduct({ ...product, altText: e.target.value })}
                                                    value={product.altText}
                                                />
                                            </div>
                                        </form>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="danger" variant="light" onPress={onClose}>
                                            Close
                                        </Button>
                                        <Button color="primary" onPress={async () => {
                                            setLoading(true)
                                            const prodRes = await fetch("/api/admin/product", {
                                                method: "POST",
                                                body: JSON.stringify({ ...product, imageUrl: image }),
                                            })
                                            router.push(`/admin?tab=products`)
                                            setLoading(false)
                                            onClose()
                                        }}>
                                            Add Item
                                        </Button>
                                    </ModalFooter>
                                </>
                            }
                        </>

                    )}
                </ModalContent>
            </Modal >
            <div className="flex justify-between">
                <h1 className='text-4xl font-bold'><a href="/products">Products</a></h1>
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