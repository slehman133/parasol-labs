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
    })


    return (
        <>
            <div className=''>
                <form className='flex flex-col max-w-xl mx-auto my-40 p-5'
                    onSubmit={async (e) => {
                        e.preventDefault();
                        const res = await fetch("/api/user", {
                            method: 'POST',
                            body: JSON.stringify(formData),

                        });
                        router.push("/api/auth/signin")
                    }}>
                    <label>Email</label>
                    <input type="text" id="email"
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        value={formData.email} />

                    <label htmlFor="">First Name
                    </label>
                    <input type="text"
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        value={formData.firstName} />

                    <label htmlFor="">Last Name
                    </label>
                    <input type="text"
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        value={formData.lastName} />

                    <label htmlFor="">Password
                    </label>
                    <input type="password"
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        value={formData.password} />

                    <input className='btn btn-primary my-5' type="submit" value="Submit" />
                </form>
            </div>
        </>
    )
}

export default SignUpPage