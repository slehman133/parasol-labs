"use client";
import React, { useEffect } from 'react'
import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useState } from "react";
import { Input } from "@nextui-org/react";
import { Button, ButtonGroup, Divider } from "@nextui-org/react";


const validatePassword = (password: string) => {
    const re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/
    return re.test(password)
}

const validateConfirmPassword = (password: string, confirmPassword: string) => {
    return password === confirmPassword
}

const validateCreds = (formData: any, setErrors: any, errors: any) => {
    validatePassword(formData.password) ? setErrors({ ...errors, password: false }) : setErrors({ ...errors, password: true })
    validateConfirmPassword(formData.password, formData.confirmPassword) ? setErrors({ ...errors, confirmPassword: false }) : setErrors({ ...errors, confirmPassword: true })

}

const UserSettings = ({ userId }: { userId: string }) => {
    const { data: session }: any = useSession();

    const [formData, setFormData] = useState({
        email: session?.user?.email,
        firstName: session?.user?.firstName,
        lastName: session?.user.lastName,
        currentPassword: session?.user.password,
        newPassword: "",
        confirmNewPassword: "",
    });

    const [updateEnabled, setUpdateEnabled] = useState(false);

    const [errors, setErrors] = useState({
        currentPassword: false,
        newPassword: false,
        confirmNewPassword: false,
        changeFailed: false,
    })


    useEffect(() => {
        validateCreds(formData, setErrors, errors)
    }, [formData])

    return (
        <>
            <div className="w-auto bg-[inherit] p-4 rounded-lg">
                <h1 className="font-bold text-4xl pt-5">Profile</h1>
                <Divider orientation="horizontal" />
                <div className="grid grid-flow-row gap-1">
                    <form name='basic-information'
                    // onSubmit={async (e) => {
                    // e.preventDefault();
                    // const res = await fetch("http://localhost:3000/api/user/edit", {
                    //     method: "PATCH",
                    //     body: JSON.stringify({
                    //         ...formData,
                    //         event: "edit-basic-information",
                    //     }),
                    // });
                    // console.log(res)

                    // signOut();
                    // redirect("/api/auth/signin");
                    // }}
                    >
                        <div className="grid grid-cols-1 md:flex md:justify-end gap-5 md:gap my-2">
                            <Input
                                className="w-1/2"
                                variant="underlined"
                                label="First Name"
                                isReadOnly={!updateEnabled}
                                placeholder={session?.user.firstName}
                                value={formData.firstName}
                                onChange={(e) =>
                                    setFormData({ ...formData, firstName: e.target.value })
                                }
                            />
                            <Input
                                className="w-1/2"
                                variant="underlined"
                                label="Last Name"
                                type="text"
                                isReadOnly={!updateEnabled}
                                placeholder={session?.user.lastName}
                                value={formData.lastName}
                                onChange={(e) =>
                                    setFormData({ ...formData, lastName: e.target.value })
                                }
                            />
                        </div>
                        <Input
                            className="my-2"
                            type="email"
                            variant="underlined"
                            label="Email"
                            isReadOnly={!updateEnabled}
                            placeholder={session?.user?.email}
                            value={formData.email}
                            onChange={(e) =>
                                setFormData({ ...formData, email: e.target.value })
                            }
                        />
                        {updateEnabled &&
                            <div className='flex justify-center'>
                                <Button
                                    className="w-1/2 my-5 mx-auto p-2"
                                    color="primary"
                                    variant="bordered"
                                    form='basic-information'
                                    type="submit"
                                    onClick={async (e) => {
                                        e.preventDefault();
                                        const res = await fetch("http://localhost:3000/api/user/edit", {
                                            method: "PATCH",
                                            body: JSON.stringify({
                                                ...formData,
                                                event: "edit-basic-information",
                                            }),
                                        });
                                        // console.log(res)
                                    }}
                                >
                                    Change Basic Information
                                </Button>
                            </div>
                        }
                    </form>
                    {/* if updateEnabled is true, show the form to change the password */}
                    {updateEnabled && (
                        <>
                            {/* <Button
                                className="w-1/2 my-5 mx-auto p-2"
                                color="primary"
                                variant="bordered"
                                form='basic-information'
                                type="submit"
                                value="Change Password"
                            >
                                Change Basic Information
                            </Button> */}
                            <form
                                className=""
                                action=""
                                onSubmit={async (e) => {
                                    e.preventDefault();
                                    const res = await fetch("http://localhost:3000/api/user/edit", {
                                        method: "PATCH",
                                        body: JSON.stringify({
                                            ...formData,
                                            event: "change-password",
                                        }),
                                    });
                                    if (!res.ok) {
                                        setErrors({ ...errors, changeFailed: true })
                                        return
                                    }
                                    signOut({ callbackUrl: "/" });
                                }}
                            >
                                <Input
                                    className="my-2 w-1/2"
                                    variant="underlined"
                                    type="password"
                                    placeholder="Current Password"
                                    value={formData.currentPassword}
                                    onChange={(e) => {
                                        setFormData({
                                            ...formData,
                                            currentPassword: e.target.value,
                                        });
                                    }}
                                />
                                <Input
                                    className="my-2 w-1/2"
                                    variant="underlined"
                                    type="password"
                                    placeholder="New Password"
                                    value={formData.newPassword}
                                    onChange={(e) => {
                                        const newPassword = e.target.value
                                        setFormData({ ...formData, newPassword })
                                        if (validatePassword(newPassword)) {
                                            setErrors({ ...errors, newPassword: false })
                                        }
                                        else {
                                            setErrors({ ...errors, newPassword: true })
                                        }
                                    }}
                                />
                                {errors.newPassword && <p className='text-red-500 text-center max-w-sm'>Valid password is required. Must contain one uppercase letter, one lowercase letter, one number, and one special character, and be at least 8 characters long.</p>}

                                <Input
                                    className=" w-1/2"
                                    variant="underlined"
                                    type="password"
                                    placeholder="Confirm New Password"
                                    value={formData.confirmNewPassword}
                                    onChange={(e) => {
                                        const confirmNewPassword = e.target.value
                                        setFormData({ ...formData, confirmNewPassword })
                                        if (validateConfirmPassword(formData.newPassword, confirmNewPassword)) {
                                            setErrors({ ...errors, confirmNewPassword: false })
                                        } else {
                                            setErrors({ ...errors, confirmNewPassword: true })
                                        }
                                    }}
                                />
                                {errors.confirmNewPassword && <p className='text-red-500 text-center max-w-sm'>Passwords do not match.</p>}
                                {errors.changeFailed && <p className='text-red-500 text-center max-w-sm'>Sign up failed. Please try again or use different credentials.</p>}

                                <div className="flex justify-between">
                                    <Button
                                        className="w-1/3 my-5 mx-auto"
                                        color="warning"
                                        variant="bordered"
                                        type="submit"
                                        value="Change Password"
                                        disabled={errors.newPassword || errors.confirmNewPassword
                                            || (formData.newPassword !== formData.confirmNewPassword)}
                                    >
                                        Change Password
                                    </Button>
                                    <Button
                                        className="w-1/3 my-5 mx-auto"
                                        variant="bordered"
                                        color="danger"
                                        onPress={async (e) => {
                                            // e.preventDefault()
                                            const res = await fetch("http://localhost:3000/api/user/edit", {
                                                method: "PATCH",
                                                body: JSON.stringify({
                                                    event: "delete",
                                                    email: session?.user?.email,
                                                }),
                                            });
                                            signOut({ callbackUrl: "/" });
                                        }}
                                    >
                                        Delete Account
                                    </Button>
                                </div>
                            </form>
                        </>
                    )}
                    <div className="flex justify-between">
                        <Button
                            onPress={() => setUpdateEnabled(!updateEnabled)}
                            className="w-1/3 my-5 mx-auto"
                            variant="bordered"
                        >
                            {updateEnabled ? "Cancel" : "Edit Profile"}
                        </Button>
                        <Button
                            onPress={() => {
                                signOut({ callbackUrl: "/" });
                            }}
                            className="w-1/3 my-5 mx-auto"
                            variant="bordered"
                        >
                            Sign out
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserSettings