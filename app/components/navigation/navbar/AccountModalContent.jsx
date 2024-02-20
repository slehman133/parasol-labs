import React, { useState } from 'react'
import { useSession, signOut } from "next-auth/react";
import { ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@nextui-org/react"
import { Input } from '@nextui-org/react'
import { signIn } from 'next-auth/react'
import EyeFilledIcon from '@/components/account/signin/EyeFilledIcon'
import EyeSlashFilledIcon from "@/components/account/signin/EyeSlashFilledIcon"
import { Spinner } from "@nextui-org/react";
import Link from 'next/link'

const AccountModalContent = ({ isOpen, onOpen, onOpenChange }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        firstName: '',
        lastName: '',
    })
    const [isLoading, setIsLoading] = useState(false)
    const { data: session, status } = useSession()
    const [isVisible, setIsVisible] = useState(false)
    const [isConfirmVisible, setIsConfirmVisible] = useState(false)
    const [activeTab, setActiveTab] = useState("signin")
    return (
        <ModalContent>
            {(onClose) =>
            (status == "unauthenticated" ?
                <>
                    {isLoading ?
                        <div className="flex justify-center m-16">
                            <Spinner />
                        </div>
                        :
                        <>
                            {activeTab == "signin" &&
                                <>
                                    <ModalHeader className="flex flex-col gap-1 text-center">Sign In to Parasol Labs</ModalHeader>
                                    <ModalBody>
                                        <div className=''>
                                            <div className='col-start-2'>
                                                <form className='flex flex-col gap-5'
                                                    onSubmit={async (e) => {
                                                        e.preventDefault()
                                                        setIsLoading(true)
                                                        const res = await signIn('credentials', { ...formData, redirect: false })
                                                        // console.log(res)
                                                        setIsLoading(false)
                                                    }}>
                                                    <Input type='email' placeholder='Email' value={formData.email}
                                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                                                    <Input placeholder='Password' value={formData.password}
                                                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                                        endContent={
                                                            <button className="focus:outline-none" type="button" onClick={() => setIsVisible(!isVisible)}>
                                                                {isVisible ? (
                                                                    <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                                                ) : (
                                                                    <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                                                )}
                                                            </button>
                                                        }
                                                        type={isVisible ? "text" : "password"} />
                                                    <p onClick={() => setActiveTab("signup")} className='text-center hover:cursor-pointer'>Don&apos;t have an account? <span className='underline'> Sign Up</span></p>
                                                    <Input type='submit' value='Sign In' />
                                                </form>
                                            </div>
                                        </div>
                                    </ModalBody>
                                </>}
                            {activeTab == "signup" &&
                                <>
                                    <ModalHeader className="flex flex-col gap-1 text-center">Sign Up to Parasol Labs</ModalHeader>
                                    <ModalBody>
                                        <div className=''>
                                            <div className='col-start-2'>
                                                <form className='flex flex-col gap-5'
                                                    onSubmit={async (e) => {
                                                        e.preventDefault()
                                                        setIsLoading(true)
                                                        const res = await fetch("/api/user", {
                                                            method: 'POST',
                                                            body: JSON.stringify(formData),

                                                        });
                                                        // console.log(res)
                                                        setIsLoading(false)
                                                        setActiveTab("signin")
                                                    }}>
                                                    <Input type='email' placeholder='Email' value={formData.email}
                                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                                                    <Input type='text' placeholder='First Name' value={formData.firstName}
                                                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} />
                                                    <Input type='text' placeholder='Last Name' value={formData.lastName}
                                                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} />
                                                    <Input placeholder='Password' value={formData.password}
                                                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                                        endContent={
                                                            <button className="focus:outline-none" type="button" onClick={() => setIsVisible(!isVisible)}>
                                                                {isVisible ? (
                                                                    <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                                                ) : (
                                                                    <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                                                )}
                                                            </button>
                                                        }
                                                        type={isVisible ? "text" : "password"} />
                                                    <Input placeholder='Confirm Password' value={formData.confirmPassword}
                                                        onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                                                        endContent={
                                                            <button className="focus:outline-none" type="button" onClick={() => setIsConfirmVisible(!isConfirmVisible)}>
                                                                {isConfirmVisible ? (
                                                                    <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                                                ) : (
                                                                    <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                                                )}
                                                            </button>
                                                        }
                                                        type={isConfirmVisible ? "text" : "password"} />
                                                    <p onClick={() => setActiveTab("signin")} className='text-center hover:cursor-pointer'>Have an account? <span className='underline'> Sign In</span></p>
                                                    <Input type='submit' value='Sign In' />
                                                </form>
                                            </div>
                                        </div>
                                    </ModalBody>
                                </>}
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                            </ModalFooter>
                        </>
                    }
                </>
                :
                <>
                    <ModalHeader className="flex flex-col gap-1 text-center">My Account</ModalHeader>
                    {isLoading ?
                        <div className="flex justify-center m-16">
                            <Spinner />
                        </div> :
                        <>
                            <ModalBody>
                                <div className=''>
                                    <div className='flex flex-col justify-center items-center gap-3'>
                                        <Link href={`/account/${session.user.id}`}>
                                            <Button>My Account</Button>
                                        </Link>
                                        <Button onClick={async () => {
                                            setIsLoading(true)
                                            await signOut({ redirect: false })
                                            setIsLoading(false)
                                        }
                                        }>Sign Out</Button>
                                    </div>
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
        </ModalContent >
    )
}

export default AccountModalContent