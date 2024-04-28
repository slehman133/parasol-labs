"use client";

import React, { useState, useMemo, useCallback, useEffect } from "react";
import {
  Button,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
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
  useDisclosure,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Spinner,
} from "@nextui-org/react";
import { VerticalDotsIcon } from "@/public/VerticalDotsIcon";
import { SearchIcon } from "@/public/SearchIcon";
import { ChevronDownIcon } from "@/public/ChevronDownIcon";

interface form {
  id: number;
  name: string;
  email: string;
  status: string;
}

const statusColorMap: Record<string, ChipProps["color"]> = {
  delivered: "warning",
  active: "success",
  completed: "danger",
};

const statusOptions = [
  { name: "delivered", uid: "delivered" },
  { name: "active", uid: "active" },
  { name: "completed", uid: "completed" },
];

const columns = [
  { name: "Name", uid: "name", sortable: true },
  { name: "Message", uid: "message" },
  { name: "Status", uid: "status", sortable: true },
  { name: "Actions", uid: "actions" },
];
export default function GeneralFormTable() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [loading, setLoading] = useState(false);
  const [selectedForm, setSelectedForm] = useState<form>();
  const [updatedForm, setUpdatedForm] = useState(false);

  const [forms, setForms] = useState<form[]>([]);
  const [filterValue, setFilterValue] = useState("");
  const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set([]));
  const [statusFilter, setStatusFilter] = useState<Selection>("all");
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
    column: "name",
    direction: "ascending",
  });

  type Form = (typeof forms)[0];

  const [page, setPage] = useState(1);

  const hasSearchFilter = Boolean(filterValue);

  const filteredItems = useMemo(() => {
    let filteredForms = [...forms];
    if (hasSearchFilter) {
      filteredForms = filteredForms.filter((form) =>
        form.name.toLowerCase().includes(filterValue.toLowerCase())
      );
    }
    if (
      statusFilter !== "all" &&
      Array.from(statusFilter).length !== statusOptions.length
    ) {
      console.log("statusFilter: ", statusFilter.toString());
      filteredForms = filteredForms.filter((form) =>
        Array.from(statusFilter).includes(form.status)
      );
    }

    return filteredForms;
  }, [forms, hasSearchFilter, statusFilter, filterValue]);

  const pages = Math.ceil(filteredItems.length / rowsPerPage);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return filteredItems.slice(start, end);
  }, [page, rowsPerPage, filteredItems]);

  const sortedItems = useMemo(() => {
    return [...items].sort((a: Form, b: Form) => {
      const first = a[sortDescriptor.column as keyof Form] as number;
      const second = b[sortDescriptor.column as keyof Form] as number;
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
  const onRowsPerPageChange = useCallback(
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
          <div className="flex gap-3">
            <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button
                  endContent={<ChevronDownIcon className="text-small" />}
                  variant="flat"
                >
                  Status
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={statusFilter}
                selectionMode="multiple"
                onSelectionChange={setStatusFilter}
              >
                {statusOptions.map((status) => (
                  <DropdownItem key={status.uid} className="capitalize">
                    {status.name.charAt(0).toUpperCase() + status.name.slice(1)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-default-400 text-small">
            Total forms: {forms.length}
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
  }, [
    filterValue,
    onSearchChange,
    statusFilter,
    forms.length,
    onRowsPerPageChange,
    onClear,
  ]);

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
  }, [onNextPage, onPreviousPage, page, pages]);

  const renderCell = useCallback((form: Form, columnKey: React.Key) => {
    const cellValue = form[columnKey as keyof Form];
    switch (columnKey) {
      case "name":
        return (
          <>
            <p>{form.name}</p>
            <p className="text-gray-400">{form.email}</p>
          </>
        );
      case "status":
        return (
          <Chip color={statusColorMap[form.status]}>
            {form.status.toUpperCase()}
          </Chip>
        );
      case "actions":
        return (
          <>
            <div className="relative flex justify-end items-center gap-2">
              <Dropdown>
                <DropdownTrigger>
                  <Button isIconOnly size="sm" variant="light">
                    <VerticalDotsIcon width={undefined} height={undefined} />
                  </Button>
                </DropdownTrigger>
                <DropdownMenu>
                  <DropdownItem
                    key="view"
                    href={`/admin/webforms/general/${form.id}`}
                  >
                    View
                  </DropdownItem>
                  <DropdownItem
                    key="edit"
                    onClick={() => {
                      setSelectedForm(form);
                      onOpen();
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
        return cellValue;
    }
  }, []);

  //allows the admin to view the form's contents, and provide an email.
  useEffect(() => {
    async function fetchForms() {
      const response = await fetch("/api/webforms/generalform");
      const data = await response.json();
      console.log(data);
      setForms(data);
      setUpdatedForm(false);
    }
    fetchForms();
  }, [updatedForm]);

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
              {loading ? (
                <div className="h-[25vh] grid grid-cols-3 grid-rows-3 place-items-center">
                  <div className="col-start-2 row-start-2">
                    <Spinner className="mx-auto" />
                  </div>
                </div>
              ) : (
                <>
                  <ModalHeader className="flex flex-col gap-1 items-center">
                    Change Status
                  </ModalHeader>
                  <ModalBody className="gap-1 items-center">
                    <form className="flex flex-col gap-3">
                      <div className="flex flex-col">
                        <label htmlFor="Status">
                          Choose new status for selected forms:{" "}
                          {selectedForm?.id}
                        </label>
                        <select
                          name="status"
                          id="status"
                          onChange={(e) => {
                            setSelectedForm({
                              ...selectedForm,
                              status: e.target.value,
                            } as form); // Update the type of selectedForm
                          }}
                        >
                          <option value=""></option>
                          <option value="active">Active</option>
                          <option value="completed">Completed</option>
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
                          `/api/webforms/generalform/${selectedForm?.id}/status`,
                          {
                            method: "PATCH",
                            body: JSON.stringify({
                              status: selectedForm?.status,
                            }),
                          }
                        );
                        console.log(res);
                        setUpdatedForm(true);
                        setLoading(false);
                        onClose();
                      }}
                    >
                      Save
                    </Button>
                  </ModalFooter>
                </>
              )}
            </>
          )}
        </ModalContent>
      </Modal>
      <div className="flex flex-col gap-3">
        <Table
          aria-label="General Form Table"
          classNames={classNames}
          isCompact
          removeWrapper
          topContent={topContent}
          topContentPlacement="outside"
          bottomContent={bottomContent}
          sortDescriptor={sortDescriptor}
          selectedKeys={selectedKeys}
          onSelectionChange={setSelectedKeys}
          onSortChange={setSortDescriptor}
        >
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn key={column.uid} allowsSorting={column.sortable}>
                {column.name}
              </TableColumn>
            )}
          </TableHeader>
          <TableBody
            emptyContent="No general inquiries found."
            items={sortedItems}
          >
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
}
