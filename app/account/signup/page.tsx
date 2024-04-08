// code by Samuel Lehman


'use client'

import React, { useState } from 'react'
import prisma from '@/utils/db'
import { useRouter } from 'next/navigation'

const SignUpPage = () => {
    const router = useRouter()
    const [formData, setFormData] = useState({
        email: "",
        firstName: "",
        lastName: "",
        password: "",
        confirmPassword: "",
    })

    const event = ({ action, category, label, value }: any) => {
        const measurementId = process.env.NEXT_PUBLIC_MEASUREMENT_ID || ""; // Ensure measurementId is defined
        window.gtag('config', measurementId, { // Use measurementId as argument
            event_category: category,
            event_label: label,
            value: value,
        })
    }

    const handleSubmit = async (e: any) => {
        event({
            action: 'user_signup',
            category: 'user',
            label: 'New user created.',
            value: formData,
        })
        e.preventDefault();
        await fetch("/api/user", {
            method: 'POST',
            body: JSON.stringify(formData),
        });
        router.push("/api/auth/signin")
    }

    return (
        <>
            <div className='text-black'>
                <form className='flex flex-col max-w-xl mx-auto my-40 p-5 gap-3'
                    onSubmit={handleSubmit}>
                    <label>Email</label>
                    <input className='bg-white text-black' type="text"
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        value={formData.email} />

                    <label>First Name
                    </label>
                    <input className='bg-white text-black' type="text"
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        value={formData.firstName} />

                    <label>Last Name</label>
                    <input className='bg-white text-black' type="text"
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        value={formData.lastName} />

                    <label htmlFor="">Password</label>
                    <input className='bg-white text-black' type="password"
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        value={formData.password} />

                    <label htmlFor="">Confirm Password</label>
                    <input className='bg-white text-black' type="password"
                        onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                        value={formData.confirmPassword} />

                    <input className='btn btn-primary my-5' type="submit" value="Submit" />
                </form>
            </div>
        </>
    )
}

export default SignUpPage