"use client";

import React, { useEffect, useState, useMemo, useCallback } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Button,
} from "@nextui-org/react";
import { Spinner } from "@nextui-org/react";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  ChipProps,
  Input,
  Chip,
  Selection,
  SortDescriptor,
  Pagination,
} from "@nextui-org/react";

import { VerticalDotsIcon } from "@/public/VerticalDotsIcon";
import { SearchIcon } from "@/public/SearchIcon";
import { ChevronDownIcon } from "@/public/ChevronDownIcon";
import { User } from "@prisma/client";

const columns = [
  { name: "id", uid: "ID" },
  { name: "email", uid: "Email" },
  { name: "firstName", uid: "First Name" },
  { name: "lastName", uid: "Last Name" },
  { name: "role", uid: "Role" },
  { name: "actions", uid: "Actions" },
];

const UsersSection = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState<User[]>([]);
  const [userChanged, setUserChanged] = useState(false);
  const [lonelySuperAdmin, setLonelySuperAdmin] = useState<Number | undefined>();
  const [userToChange, setUserToChange] = useState({
    id: "",
    role: "",
    email: "",
  });

  const [filterValue, setFilterValue] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(1);
  const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
    column: "firstName",
    direction: "ascending",
  });
  const [selectedRow, setSelectedRow] = useState({});

  const hasSearchFilter = Boolean(filterValue);

  const checkLonelySuperAdmin = async () => {
    //of the users, check if there is only one superadmin
    const superAdmins = users.filter((user) => user.role === "superadmin");
    if (superAdmins.length === 1) {
      setLonelySuperAdmin(superAdmins[0].id);
    }
    else {
      setLonelySuperAdmin(undefined);
    }
  }

  const filteredItems = useMemo(() => {
    let filteredForms = [...users];
    if (hasSearchFilter) {
      filteredForms = filteredForms.filter((user) =>
        user.firstName.toLowerCase().includes(filterValue.toLowerCase())
      );
    }
    return filteredForms;
  }, [users, hasSearchFilter, filterValue]);

  const pages = Math.ceil(filteredItems.length / rowsPerPage);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const sortedItems = useMemo(() => {
    return [...items].sort((a: User, b: User) => {
      const first = a[sortDescriptor.column as keyof User] as number;
      const second = b[sortDescriptor.column as keyof User] as number;
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === "descending" ? cmp : -cmp;
    });
  }, [items, sortDescriptor]);

  const onNextPage = useCallback(() => {
    if (page < pages) {
      setPage(page + 1);
    }
  }, [page, pages]);

  const onPreviousPage = useCallback(() => {
    if (page > 1) {
      setPage(page - 1);
    }
  }, [page]);

  const onRowsPerPageChange = React.useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setRowsPerPage(Number(e.target.value));
      setPage(1);
    },
    []
  );

  const onSearchChange = useCallback((value?: string) => {
    if (value) {
      setFilterValue(value);
      setPage(1);
    } else {
      setFilterValue("");
    }
  }, []);

  const onClear = useCallback(() => {
    setFilterValue("");
    setPage(1);
  }, []);

  const topContent = useMemo(() => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex justify-between gap-3 items-end">
          <Input
            isClearable
            variant="underlined"
            className="w-full sm:max-w-[44%]"
            placeholder="Search by name..."
            startContent={<SearchIcon />}
            value={filterValue}
            onClear={() => onClear()}
            onValueChange={onSearchChange}
          />
        </div>
        <div className="flex justify-between items-center">
          <span className="text-default-400 text-small">
            Total users: {users.length}
          </span>
          <label className="flex items-center text-default-400 text-small">
            Rows per page:
            <select
              className="bg-transparent outline-none text-default-400 text-small"
              onChange={onRowsPerPageChange}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>
          </label>
        </div>
      </div>
    );
  }, [filterValue, onSearchChange, users.length, onRowsPerPageChange, onClear]);

  const bottomContent = useMemo(() => {
    return (
      <div className="py-2 px-2 flex justify-between items-center">
        <Pagination
          showControls
          variant="bordered"
          page={page}
          total={pages}
          onChange={setPage}
          color="warning"
        />
        <div className="hidden sm:flex w-[30%] justify-end gap-2">
          <Button
            isDisabled={pages === 1}
            size="sm"
            variant="flat"
            onPress={onPreviousPage}
          >
            Previous
          </Button>
          <Button
            isDisabled={pages === 1}
            size="sm"
            variant="flat"
            onPress={onNextPage}
          >
            Next
          </Button>
        </div>
      </div>
    );
  }, [items.length, page, pages]);

  useEffect(() => {
    const getUsers = async () => {
      const userRes = await fetch("/api/admin/users", {
        method: "GET",
      }).then((res) => res.json());
      setUsers(userRes);
    };
    getUsers();
    checkLonelySuperAdmin();
  }, [userChanged]);

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

  const renderCell = useCallback((user: User, columnKey: React.Key) => {
    const cellValue = user[columnKey as keyof User];
    switch (columnKey) {
      case "ID":
        return (
          <>
            <p>{user.id}</p>
          </>
        );
      case "Email":
        return <p>{user.email}</p>;
      case "First Name":
        return <p>{user.firstName}</p>;
      case "Last Name":
        return <p>{user.lastName}</p>;
      case "Role":
        return (
          <>
            <div className="flex items-center">
              <p>{user.role}</p>
            </div>
          </>
        );
      case "Actions":
        return (
          <>
            <div className="relative flex justify-end items-center gap-2">
              <Dropdown>
                <DropdownTrigger>
                  <Button
                    isIconOnly
                    disabled={user.id === lonelySuperAdmin}
                    size="sm"
                    variant="light"
                    onClick={() => {

                      setSelectedRow(user);
                      setUserToChange({
                        id: user.id.toString(),
                        role: user.role,
                        email: user.email,
                      });
                    }}
                  >
                    <VerticalDotsIcon />
                  </Button>
                </DropdownTrigger>
                <DropdownMenu>
                  <DropdownItem
                    key="edit"
                    onClick={() => {
                      if (user.id === lonelySuperAdmin) {
                        alert("You cannot change the role of the only superadmin");
                      }
                      else {
                        onOpen();
                        setUserChanged(!userChanged);
                      }
                    }}
                  >
                    Edit
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          </>
        );
      default:
        return <p>{cellValue}</p>;
    }
  }, []);

  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              {loading ? (
                <div className="h-[25vh] grid grid-cols-3 grid-rows-3 place-items-center">
                  <div className="col-start-2 row-start-2">
                    <Spinner className="mx-auto" />
                  </div>
                </div>
              ) : (
                <>
                  <ModalHeader className="flex flex-col gap-1 items-center">
                    Change Role
                  </ModalHeader>
                  <ModalBody className="gap-1 items-center">
                    <form className="flex flex-col gap-3">
                      <div className="flex flex-col">
                        <label htmlFor="role">
                          Choose new role for {userToChange.email}
                        </label>
                        <select
                          name="role"
                          id="role"
                          value={userToChange.role}
                          onChange={(e) => {
                            // console.log(e.target.value);
                            setUserToChange({
                              ...userToChange,
                              role: e.target.value,
                            })
                          }
                          }
                          disabled={userToChange.id === lonelySuperAdmin?.toString()}
                        >
                          <option value="superadmin">Super Admin</option>
                          <option value="admin">Admin</option>
                          <option value="admin_products">Product Admin</option>
                          <option value="admin_forms">Form Admin</option>
                          <option value="user">User</option>
                          <option value="DEREGISTERED">Unregister</option>
                        </select>
                      </div>
                    </form>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
                      Close
                    </Button>
                    <Button
                      color="primary"
                      onPress={async () => {
                        setLoading(true);
                        const res = await fetch(
                          `/api/admin/users/${userToChange.id}/role`,
                          {
                            method: "PATCH",
                            body: JSON.stringify({ role: userToChange.role }),
                          }
                        );
                        setUserChanged(!userChanged);
                        setLoading(false);
                        onClose();
                      }}
                      disabled={userToChange.id === lonelySuperAdmin?.toString()}
                    >
                      Change Role
                    </Button>
                  </ModalFooter>
                </>
              )}
            </>
          )}
        </ModalContent>
      </Modal >

      <div className="flex flex-col justify-between">
        <h1 className="text-4xl font-bold">Users</h1>
        <Table
          aria-label="Users Table"
          classNames={classNames}
          isCompact
          removeWrapper
          topContent={topContent}
          bottomContent={bottomContent}
          onSortChange={setSortDescriptor}
        >
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn key={column.uid}>{column.name}</TableColumn>
            )}
          </TableHeader>

          <TableBody emptyContent="No users..." items={sortedItems}>
            {(item) => (
              <TableRow key={item.id}>
                {(columnKey) => (
                  <TableCell>{renderCell(item, columnKey)}</TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default UsersSection;
