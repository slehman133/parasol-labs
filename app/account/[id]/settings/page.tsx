'use client'

import React from 'react'

import { signOut, useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import { useState } from 'react'
import { Input } from "@nextui-org/react";
import { Button, ButtonGroup } from "@nextui-org/react";
import * as ga from '@/lib/gtagHelper'

const AccountSettingsPage = (props: { params: { id: string } }) => {

  const variables = { userId: props.params.id }

  const { data: session }: any = useSession()

  const [formData, setFormData] = useState({
    email: session?.user?.email,
    firstName: session?.user?.firstName,
    lastName: session?.user.lastName,
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  })


  const createGAEventEdit = async () => {
    ga.event({
      action: "User_change_settings",
      category: "user",
      label: "user_settings",
      value: "user changed settings successfully",
      username: session?.user?.username 
    })
  };
    const createGAEventDelete = async () => {
    ga.event({
      action: "User_delete_account",
      category: "user",
      label: "user_delete_account",
      value: "user deleted account successfully",
      username: session?.user?.username
    })
  };

  if (session?.user.id !== variables.userId) {
    redirect("/404")
  }

  return (
    <>
      <div className='mx-auto my-32 text-white w-[40%] '>
        <div>
          <div className='flex flex-col my-2'>
            <h3 className='text-2xl'>Basic Information</h3>
            <form className='flex flex-col form-control'
              onSubmit={async (e) => {
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
              <Input type="email"
                placeholder={session?.user?.email} value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
              <div className='flex justify-between my-2'>
                <div className='flex flex-col w-[48%]'>
                  <label htmlFor="first_name">First Name</label>
                  <Input
                    placeholder={session?.user.firstName} value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} />
                </div>
                <div className='flex flex-col w-[48%]'>
                  <label htmlFor="last_name">Last Name</label>
                  <Input
                    type="text"
                    placeholder={session?.user.lastName} value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  />
                </div>
              </div>
              <Input className='w-[40%] mx-auto' type="submit" value="Submit Changes" />
            </form>
          </div>
          <div className='flex flex-col my-2'>
            <h3 className='text-2xl'>Change Password</h3>
            <form className='flex flex-col' action=""
              onSubmit={async (e) => {
                e.preventDefault()
                await fetch("http://localhost:3000/api/user/edit", {
                  method: "PATCH",
                  body: JSON.stringify({
                    ...formData,
                    event: 'change-password',
                  })
                })
                createGAEventEdit()
                signOut({ callbackUrl: '/' })
              }}>
              <label htmlFor="currentPassword">Current Password</label>
              <Input type="password"
                placeholder="Current Password" value={formData.currentPassword}
                onChange={(e) => { setFormData({ ...formData, currentPassword: e.target.value }) }}
              />
              <label htmlFor="new_password">New Password</label>
              <Input
                placeholder="New Password" value={formData.newPassword}
                onChange={(e) => { setFormData({ ...formData, newPassword: e.target.value }) }}
              />
              <label htmlFor="confirm_password">Confirm New Password</label>
              <Input type="password"
                placeholder="Confirm New Password" value={formData.confirmNewPassword}
                onChange={(e) => { setFormData({ ...formData, confirmNewPassword: e.target.value }) }}
              />
              <Input className='w-[40%] mx-auto' type="submit" value="Change Password" />
            </form>
          </div>
          <div className='flex flex-col'>
            <h3 className='text-2xl'>Delete Account</h3>
            <Button className='w-[40%] mx-auto' onPress={async (e) => {
              // e.preventDefault()
              await fetch("http://localhost:3000/api/user/edit", {
                method: "PATCH",
                body: JSON.stringify({
                  event: "delete",
                  email: session?.user?.email
                })
              })
              createGAEventDelete()
              signOut({ callbackUrl: '/' })
            }}>
              Delete Account</Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default AccountSettingsPage
