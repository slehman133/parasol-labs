"use client";

import React from "react";

import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useState } from "react";
import { Input } from "@nextui-org/react";
import { Button, ButtonGroup, Divider } from "@nextui-org/react";

const AccountSettingsPage = (props: { params: { id: string } }) => {
  const variables = { userId: props.params.id };

  const { data: session }: any = useSession();

  const [formData, setFormData] = useState({
    email: session?.user?.email,
    firstName: session?.user?.firstName,
    lastName: session?.user.lastName,
    currentPassword: session?.user.password,
    newPassword: "",
    confirmNewPassword: "",
  });

  console.log(session);

  const [updateEnabled, setUpdateEnabled] = useState(false);

  if (session?.user.id !== variables.userId) {
    redirect("/");
  }

  return (
    <>
      <div className="m-[5%_10%_2%_10%]">
        <div className="grid grid-rows-auto gap-10">
          <div className=" text-center md:text-left p-4">
            <h1 className="font-bold text-4xl">Account Settings</h1>
          </div>
          <Divider orientation="horizontal" />
          <div className="md:flex md:justify-between grid grid-cols-1 gap-10 text">
            {/* make the background color of the child div slightly brighter than the color of the parent div */}
            <div className="w-1/2 bg-[#160914] p-4 rounded-lg">
              <h1 className="font-bold text-4xl pt-5">Profile</h1>
              <Divider orientation="horizontal" />
              <div className="grid grid-flow-row gap-1">
                <form
                  onSubmit={async (e) => {
                    e.preventDefault();
                    await fetch("http://localhost:3000/api/user/edit", {
                      method: "PATCH",
                      body: JSON.stringify({
                        ...formData,
                        event: "edit-basic-information",
                      }),
                    });
                    signOut();
                    redirect("/api/auth/signin");
                  }}
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
                </form>
                {/* if updateEnabled is true, show the form to change the password */}
                {updateEnabled && (
                  <form
                    className=""
                    action=""
                    onSubmit={async (e) => {
                      e.preventDefault();
                      await fetch("http://localhost:3000/api/user/edit", {
                        method: "PATCH",
                        body: JSON.stringify({
                          ...formData,
                          event: "change-password",
                        }),
                      });
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
                      placeholder="New Password"
                      value={formData.newPassword}
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          newPassword: e.target.value,
                        });
                      }}
                    />
                    <Input
                      className=" w-1/2"
                      variant="underlined"
                      type="password"
                      placeholder="Confirm New Password"
                      value={formData.confirmNewPassword}
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          confirmNewPassword: e.target.value,
                        });
                      }}
                    />
                    <div className="flex justify-between">
                      <Button
                        className="w-1/3 my-5 mx-auto"
                        color="warning"
                        variant="bordered"
                        type="submit"
                        value="Change Password"
                      >
                        Change Password
                      </Button>
                      <Button
                        className="w-1/3 my-5 mx-auto"
                        variant="bordered"
                        color="danger"
                        onPress={async (e) => {
                          // e.preventDefault()
                          await fetch("http://localhost:3000/api/user/edit", {
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
            <div className="w-1/2 bg-[#160914] p-4 rounded-lg">
              <h1 className="font-bold text-4xl pt-5">Orders</h1>
              <Divider orientation="horizontal" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountSettingsPage;
