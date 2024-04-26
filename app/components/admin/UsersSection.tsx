"use client"

import React, { useEffect, useState, useMemo, useCallback } from 'react'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Button } from "@nextui-org/react";
import { Spinner } from "@nextui-org/react";
import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell, Dropdown,     DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  ChipProps,
  Input,
  Chip,
  Selection,
  SortDescriptor,
  Pagination, } from "@nextui-org/react";

import { VerticalDotsIcon } from "@/public/VerticalDotsIcon";
import { SearchIcon } from "@/public/SearchIcon";
import { ChevronDownIcon } from "@/public/ChevronDownIcon";

const columns = [
    { key: "id", name: "ID" },
    { key: "email", name: "Email" },
    { key: "firstName", name: "First Name" },
    { key: "lastName", name: "Last Name" },
    { key: "role", name: "Role" },
];

const UsersSection = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [loading, setLoading] = useState(false)
    const [users, setUsers] = useState([])
    const [userChanged, setUserChanged] = useState(false);

    const [userToChange, setUserToChange] = useState({
        id: '',
        role: '',
        email: ''
    })

    const [filterValue, setFilterValue] = useState("");
//   const topContent = useMemo(() => {
//     return (
//       <div className="flex flex-col gap-4">
//         <div className="flex justify-between gap-3 items-end">
//           <Input
//             isClearable
//             variant="underlined"
//             className="w-full sm:max-w-[44%]"
//             placeholder="Search by name..."
//             startContent={<SearchIcon />}
//             value={filterValue}
//             onClear={() => onClear()}
//             onValueChange={onSearchChange}
//           />
//           <div className="flex gap-3">
//             <Dropdown>
//               <DropdownTrigger className="hidden sm:flex">
//                 <Button
//                   endContent={<ChevronDownIcon className="text-small" />}
//                   variant="flat"
//                 >
//                   Status
//                 </Button>
//               </DropdownTrigger>
//               <DropdownMenu
//                 disallowEmptySelection
//                 aria-label="Table Columns"
//                 closeOnSelect={false}
//                 selectedKeys={statusFilter}
//                 selectionMode="multiple"
//                 onSelectionChange={setStatusFilter}
//               >
//                 {statusOptions.map((status) => (
//                   <DropdownItem key={status.uid} className="capitalize">
//                     {status.name.charAt(0).toUpperCase() + status.name.slice(1)}
//                   </DropdownItem>
//                 ))}
//               </DropdownMenu>
//             </Dropdown>
//           </div>
//         </div>
//         <div className="flex justify-between items-center">
//           <span className="text-default-400 text-small">
//             Total forms: {forms.length} 
//           </span>
//           <label className="flex items-center text-default-400 text-small">
//             Rows per page:
//             <select
//               className="bg-transparent outline-none text-default-400 text-small"
//               onChange={onRowsPerPageChange}
//             >
//               <option value="5">5</option>
//               <option value="10">10</option>
//               <option value="15">15</option>
//             </select>
//           </label>
//         </div>
//       </div>
//     );
//   }, [filterValue, onSearchChange, statusFilter, forms.length, onRowsPerPageChange, onClear]);

    useEffect(() => {
        const getUsers = async () => {
            const userRes = await fetch('/api/admin/users', {
                method: 'GET'
            }).then(res => res.json())
            setUsers(userRes)
        }
        getUsers()
    }, [userChanged])




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
                                            setUserChanged(!userChanged);
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