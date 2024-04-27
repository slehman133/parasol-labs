"use client"

import React, { useEffect, useState, useMemo } from 'react'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Button } from "@nextui-org/react";
import { Spinner } from "@nextui-org/react";
import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell } from "@nextui-org/react";

const UsersSection = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();


  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState([])

  const [userToChange, setUserToChange] = useState({
    id: '',
    role: '',
    email: ''
  })


  useEffect(() => {
    const getUsers = async () => {
      const userRes = await fetch('/api/admin/users', {
        method: 'GET'
      }).then(res => res.json())
      setUsers(userRes)
    }
    getUsers()
  }, [])




  const classNames = useMemo(
    () => ({
      wrapper: ["max-h-[382px]"],
      th: ["bg-transparent", "text-default-500", "border-b", "border-divider"],
      td: [
        // changing the rows border radius
        // first
        "group-data-[first=true]:first:before:rounded-none",
        "group-data-[first=true]:last:before:rounded-none",
        // middle
        "group-data-[middle=true]:before:rounded-none",
        // last
        "group-data-[last=true]:first:before:rounded-none",
        "group-data-[last=true]:last:before:rounded-none",
      ],
    }),
    []
  );


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
                    Change Role
                  </ModalHeader>
                  <ModalBody className="gap-1 items-center">
                    <form
                      className='flex flex-col gap-3'>
                      <div className='flex flex-col'>
                        <label htmlFor="role">Choose new role for {userToChange.email}</label>
                        <select name="role" id="role" onChange={(e) => setUserToChange({ ...userToChange, role: e.target.value })}>
                          <option value="superadmin">Super Admin</option>
                          <option value="admin">Admin</option>
                          <option value="admin_products">Product Admin</option>
                          <option value="admin_forms">Form Admin</option>
                          <option value="user">User</option>
                        </select>
                      </div>
                    </form>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
                      Close
                    </Button>
                    <Button color="primary" onPress={async () => {
                      setLoading(true)
                      const res = await fetch(`/api/admin/users/${userToChange.id}/role`, {
                        method: 'PATCH',
                        body: JSON.stringify({ role: userToChange.role }),
                      })
                      // console.log(res)
                      setLoading(false)
                      onClose()
                    }}>
                      Change Role
                    </Button>
                  </ModalFooter>
                </>
              }
            </>

          )}
        </ModalContent>
      </Modal >

      <div className="flex flex-col justify-between">
        <h1 className='text-4xl font-bold'>Users</h1>
        <Table
          classNames={classNames}
          isCompact
          removeWrapper>
          <TableHeader>
            <TableColumn>
              User ID
            </TableColumn>
            <TableColumn>
              Email
            </TableColumn>
            <TableColumn>
              First Name
            </TableColumn>
            <TableColumn>
              Last Name
            </TableColumn>
            <TableColumn>
              Role
            </TableColumn>
          </TableHeader>

          <TableBody>
            {users.map(({ id, email, firstName, lastName, role }: {
              id: string,
              email: string,
              firstName: string,
              lastName: string,
              role: string
            }) => {
              return (
                <TableRow
                  className="cursor-pointer hover:border-2 hover:border-primary-500"
                  key={id}
                  onClick={() => {
                    setUserToChange({ id, role, email })
                    onOpen()
                  }}>
                  <TableCell>
                    <div>
                      {id}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>
                      {email}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>
                      {firstName}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>
                      {lastName}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>
                      {role}
                    </div>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody >
        </Table >

      </div>
    </>
  )
}

export default UsersSection