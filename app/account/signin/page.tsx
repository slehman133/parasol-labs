'use client'

import React from 'react'
import { Input } from '@nextui-org/react'
import { signIn } from 'next-auth/react'
import EyeFilledIcon from '@/components/account/signin/EyeFilledIcon'
import EyeSlashFilledIcon from "@/components/account/signin/EyeSlashFilledIcon"
import * as ga from '@/lib/gtagHelper'

const SignInPage = () => {
    const [formData, setFormData] = React.useState({
        email: '',
        password: '',
    })
    const createGAEvent = async () => {
        ga.event({
          action: "p_user_sign_in",
          category: "p_user_access",
          label: "p_user_log_in",
          value: `${formData.email} - User logged in`,
        })
      };
    const [isVisible, setIsVisible] = React.useState(false)
    return (
        <>
            <div className='w-[25%] grid-cols-3 mx-auto my-64'>
                <div className='col-start-2'>
                    <h1 className='text-3xl text-center my-5'>Sign In to Parasol Labs</h1>
                    <form className='flex flex-col gap-5'
                        onSubmit={async (e) => {
                            createGAEvent();
                            e.preventDefault()
                            await signIn('credentials', { ...formData, callbackUrl: '/' })
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
                        <p className='text-center'><a href='/account/signup'>Don`t have an account? Sign Up</a></p>
                        <Input type='submit' value='Sign In' />
                    </form>
                </div>
            </div>
        </>
    )
}

export default SignInPage