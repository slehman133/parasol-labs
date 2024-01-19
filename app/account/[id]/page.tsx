'use client'

import React, { ReactNode } from 'react'

import { signOut, useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import {useState} from 'react'


const AccountSettingsPage = (props: ReactNode) => {

  const variables = { userId: props.params.id }
  const { data: session } = useSession()
  const [formData, setFormData] = useState({
    email: session?.user?.email,
    firstName: session?.user?.firstName,
    lastName: session?.user.lastName,
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  })


  // console.log(variables)
  // console.log(session)

  if (session?.user.id !== variables.userId) {
    redirect("/404")
  }

  return (
    <>
      <div className='mx-auto my-32 text-black w-[40%] '>
        <h1 className='text-6xl'>Account Settings</h1>
        <div>
          <div className='flex flex-col my-2'>
            <h3 className='text-2xl'>Basic Information</h3>
            <form className='flex flex-col form-control'
              onSubmit={async (e)=>{
                e.preventDefault()
                await fetch("http://localhost:3000/api/user/edit", {
                  method: "PATCH",
                  body: JSON.stringify({
                    ...formData,
                    event: 'edit-basic-information',
                  })
                })
                signOut()
                redirect("/api/auth/signin")
              }}
            >
              <label htmlFor="email">Email</label>
              <input className='input bg-white border-black b-2' type="email" 
                placeholder={session?.user?.email} value={formData.email} 
                onChange={(e)=>setFormData({...formData, email: e.target.value })}/>
              <div className='flex justify-between my-2'>
                <div className='flex flex-col w-[48%]'>
                  <label htmlFor="first_name">First Name</label>
                  <input className='input bg-white border-black b-2' type="text" 
                    placeholder={session?.user.firstName} value={formData.firstName} 
                    onChange={(e)=>setFormData({...formData, firstName: e.target.value })}/>
                </div>
                <div className='flex flex-col w-[48%]'>
                  <label htmlFor="last_name">Last Name</label>
                  <input className='input bg-white border-black b-2' type="text"
                    placeholder={session?.user.lastName} value={formData.lastName} 
                    onChange={(e)=>setFormData({...formData, lastName: e.target.value })}
                  />
                </div>
              </div>
              <input className='btn btn-primary my-2 w-52 self-center' type="submit" value="Submit Changes" />
            </form>
          </div>
          <div className='flex flex-col my-2'>
            <h3 className='text-2xl'>Change Password</h3>
            <form className='flex flex-col' action=""
              onSubmit={async (e)=>{
                e.preventDefault()
                await fetch("http://localhost:3000/api/user/edit", {
                  method: "PATCH",
                  body:JSON.stringify({
                    ...formData,
                    event: 'change-password',
                  })                
                })
                signOut()
                redirect("/")
              }}>
              <label htmlFor="currentPassword">Current Password</label>
              <input className='input bg-white border-black b-2' type="password" 
                placeholder="Current Password" value={formData.currentPassword}
                onChange={(e)=>{setFormData({...formData, currentPassword: e.target.value})}}
              />
              <label htmlFor="new_password">New Password</label>
              <input className='input bg-white border-black b-2' type="password" 
                placeholder="New Password" value={formData.newPassword}
                onChange={(e)=>{setFormData({...formData, newPassword: e.target.value})}}
              />
              <label htmlFor="confirm_password">Confirm New Password</label>
              <input className='input bg-white border-black b-2' type="password" 
                placeholder="Confirm New Password" value={formData.confirmNewPassword}
                onChange={(e)=>{setFormData({...formData, confirmNewPassword: e.target.value})}}
              />
              <input className='btn btn-error my-2 w-52 self-center' type="submit" value="Change Password" />
            </form>
          </div>
          <div className='flex flex-col'>
            <h3 className='text-2xl'>Delete Account</h3>
            <button className='btn btn-error my-2 w-52 self-center' type="submit" value="Change Password"
              onClick={async (e)=>{
                e.preventDefault()
                await fetch("http://localhost:3000/api/user/edit", {
                  method: "PATCH",
                  body: JSON.stringify({
                    event: "delete",
                    email: session?.user?.email
                  })
                })
                signOut()
                redirect("/")
              }}>
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default AccountSettingsPage
