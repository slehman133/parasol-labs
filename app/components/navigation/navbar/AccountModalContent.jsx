import React, { useEffect, useState } from 'react'
import { useSession, signOut } from "next-auth/react";
import { ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@nextui-org/react"
import { Input } from '@nextui-org/react'
import { signIn } from 'next-auth/react'
import EyeFilledIcon from '@/components/account/signin/EyeFilledIcon'
import EyeSlashFilledIcon from "@/components/account/signin/EyeSlashFilledIcon"
import { Spinner } from "@nextui-org/react";
import Link from 'next/link'
import * as ga from '@/lib/gtagHelper'
import TagManager from 'react-gtm-module';
import { Session } from 'next-auth';


const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/
    return re.test(email)
}

const validatePassword = (password) => {
    const re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/
    return re.test(password)
}

const validateConfirmPassword = (password, confirmPassword) => {
    return password === confirmPassword
}

const validateCreds = (formData, setErrors, errors) => {
    validateEmail(formData.email) ? setErrors({ ...errors, email: false }) : setErrors({ ...errors, email: true })
    validatePassword(formData.password) ? setErrors({ ...errors, password: false }) : setErrors({ ...errors, password: true })
    validateConfirmPassword(formData.password, formData.confirmPassword) ? setErrors({ ...errors, confirmPassword: false }) : setErrors({ ...errors, confirmPassword: true })

}


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


    // Analytics tags Nick W & Kaeden

    const createGAEvent = async () => {
        ga.event({
            action: "user_sign_in",
            category: "user_access",
            label: "user_log_in",
            value: ``,
            username: "",
            value: ` - User logged in`,
        })
    };
    const createGAEventSignOut = async () => {
        ga.event({
            action: "user_sign_out",
            category: "user_sign_out",
            label: "user_sign_out",
            value: ``,
        })
    };

    const [errors, setErrors] = useState({
        email: false,
        password: false,
        confirmPassword: false,
        signInFailed: false,
        signUpFailed: false
    })

    useEffect(() => {
        // console.log(formData)
        validateCreds(formData, setErrors, errors)
    }, [formData])

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
                                                        createGAEvent();
                                                        setIsLoading(true)
                                                        const res = await signIn('credentials', { ...formData, redirect: false })
                                                        // console.log(res)
                                                        // Update Analytics on successful login

                                                        if (res?.ok) {
                                                            const userName = formData.email
                                                            // console.log(userName)
                                                            TagManager.dataLayer({
                                                                dataLayer: {
                                                                    event: 'login',
                                                                    userName: userName
                                                                }
                                                            })
                                                            setErrors({ ...errors, signInFailed: false })
                                                        } else {
                                                            setErrors({ ...errors, signInFailed: true })
                                                        }
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
                                                    {errors.signInFailed && <p className='text-red-500 text-center'>Incorrect email or password.</p>}
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

                                                        })
                                                        if (res?.ok) {
                                                            setErrors({ ...errors, signUpFailed: false })
                                                            setIsLoading(false)
                                                            setActiveTab("signin")
                                                        } else {
                                                            setErrors({ ...errors, signUpFailed: true })
                                                            setIsLoading(false)
                                                        }
                                                        // console.log(res)
                                                    }}>
                                                    <Input type='email' placeholder='Email' value={formData.email}
                                                        onChange={(e) => {
                                                            const email = e.target.value
                                                            setFormData({ ...formData, email })
                                                            if (validateEmail(formData.email)) {
                                                                setErrors({ ...errors, email: false })
                                                            } else {
                                                                setErrors({ ...errors, email: true })
                                                            }
                                                        }}
                                                    />

                                                    {errors.email && <p className='text-red-500 text-center'>Valid email is required.</p>}
                                                    <Input type='text' placeholder='First Name' value={formData.firstName}
                                                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} />
                                                    <Input type='text' placeholder='Last Name' value={formData.lastName}
                                                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} />
                                                    <Input placeholder='Password' value={formData.password}
                                                        onChange={async (e) => {
                                                            const password = e.target.value
                                                            setFormData({ ...formData, password })
                                                            if (validatePassword(password)) {
                                                                setErrors({ ...errors, password: false })
                                                            }
                                                            else {
                                                                setErrors({ ...errors, password: true })
                                                            }
                                                        }}
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
                                                    {errors.password && <p className='text-red-500 text-center'>Valid password is required. Must contain one uppercase letter, one lowercase letter, one number, and one special character, and be at least 8 characters long.</p>}
                                                    <Input placeholder='Confirm Password' value={formData.confirmPassword}
                                                        onChange={(e) => {
                                                            const confirmPassword = e.target.value
                                                            setFormData({ ...formData, confirmPassword })
                                                            if (validateConfirmPassword(formData.password, confirmPassword)) {
                                                                setErrors({ ...errors, confirmPassword: false })
                                                            } else {
                                                                setErrors({ ...errors, confirmPassword: true })
                                                            }
                                                        }}
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
                                                    {errors.confirmPassword && <p className='text-red-500 text-center'>Passwords do not match.</p>}
                                                    {errors.signUpFailed && <p className='text-red-500 text-center'>Sign up failed. Please try again or use different credentials.</p>}
                                                    <p onClick={() => setActiveTab("signin")} className='text-center hover:cursor-pointer'>Have an account? <span className='underline'> Sign In</span></p>
                                                    <Input type='submit' value='Sign Up' disabled={(errors.email || errors.password || errors.confirmPassword)
                                                        || (formData.password !== formData.confirmPassword)} />
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
                                        <Link href={`/account/${session?.user?.id}`}>
                                            <Button>My Account</Button>
                                        </Link>
                                        <Button onClick={async () => {
                                            createGAEventSignOut();
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