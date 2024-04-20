"use client";
import React, { useState, useEffect, useCallback, useMemo } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
  Button,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Chip,
  ChipProps,
  Pagination,
  Selection,
  SortDescriptor,
} from "@nextui-org/react";
import { VerticalDotsIcon } from "@/public/VerticalDotsIcon";
import { SearchIcon } from "@/public/SearchIcon";
import { ChevronDownIcon } from "@/public/ChevronDownIcon";
//TODO: add pub/sub functionality to update the table when new forms are submitted with ABLY

const statusColorMap: Record<string, ChipProps["color"]> = {
  Delivered: "warning",
  Active: "success",
  Completed: "danger",
};

const statusOptions = [
  { name: "Delivered", uid: "Delivered" },
  { name: "Active", uid: "Active" },
  { name: "Completed", uid: "Completed" },
];

const columns = [
  { name: "Company", uid: "company" },
  { name: "Person of Contact", uid: "personofcontact" },
  { name: "Services", uid: "services" },
  { name: "Status", uid: "status", sortable: true },
  { name: "Actions", uid: "actions" },
];

interface form {
  id: number;
  companyName: string;
  companyWebpage: string;
  streetAddress: string;
  streetAddress2: string;
  city: string;
  stateOrProvince: string;
  postalCode: string;
  services: string[];
  additionalInfo: string;
  contactName: string;
  phoneNumber: string;
  emailAddress: string;
  status: string;
}

export default function PartnershipFormTable() {
  const [forms, setForms] = useState<form[]>([]);
  const [filterValue, setFilterValue] = useState("");
  const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set([]));
  const [statusFilter, setStatusFilter] = useState<Selection>("all");
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
    column: "company",
    direction: "ascending",
  });

  type Form = (typeof forms)[0];

  const [page, setPage] = useState(1);

  const hasSearchFilter = Boolean(filterValue);

  const filteredItems = useMemo(() => {
    let filteredForms = [...forms];
    if (hasSearchFilter) {
      filteredForms = filteredForms.filter((form) =>
        form.companyName.toLowerCase().includes(filterValue.toLowerCase())
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
  }, [page, filteredItems, rowsPerPage]);

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
  }, [items.length, page, pages]);

  const renderCell = useCallback((form: Form, columnKey: React.Key) => {
    const cellValue = form[columnKey as keyof Form];
    switch (columnKey) {
      case "company":
        return (
          <>
            <p>
              {form.companyName}
              <br />
              {form.companyName && (
                <a
                  href={`https://${form.companyWebpage}`}
                  target="_blank"
                  className="underline text-blue-100"
                >
                  {form.companyWebpage}
                </a>
              )}
              <br />
              <p className="text-gray-400">
                {form.streetAddress}
                <br />
                {form.streetAddress2}
                <br />
                {form.city}, {form.stateOrProvince} {form.postalCode}
              </p>
            </p>
          </>
        );
      case "personofcontact":
        return (
          <>
            <p>{form.contactName}</p>
            <p className="text-gray-400">
              {form.phoneNumber}
              <br />
              {form.emailAddress}
            </p>
          </>
        );
      case "services":
        return (
          <>
            <div className="flex flex-col">
              {form.services.map((service) => (
                <Chip key={service} color="warning" variant="dot">
                  {service}
                </Chip>
              ))}
            </div>
          </>
        );
      case "status":
        return <Chip color={statusColorMap[form.status]}>{form.status}</Chip>;
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
                    href={`/admin/webforms/partnership/${form.id}`}
                  >
                    View
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

  useEffect(() => {
    async function fetchForms() {
      const response = await fetch("/api/webforms/partnershipform");
      const data = await response.json();
      console.log(data);
      setForms(data);
      console.log(data);
    }
    fetchForms();
  }, []);
  //return the table of partnership forms
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
      <Table
        aria-label="Partnership Form Table"
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
          emptyContent="No Partnership inquiries found."
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
      {/* <Table
        aria-label="Partnership Form Table"
        classNames={classNames}
        isCompact
        removeWrapper
      >
        <TableHeader>
          {columns.map((column) => (
            <TableColumn key={column.uid}>{column.name}</TableColumn>
          ))}
        </TableHeader>
        <TableBody emptyContent="No Partnership inquiries found.">
          {forms.map((form) => (
            <TableRow key={form.id}>
              <TableCell>{form.companyName}</TableCell>
              <TableCell>
                <div className="flex flex-col">
                  {form.services.map((service) => (
                    <Chip key={service} color="warning" variant="dot">
                      {service}
                    </Chip>
                  ))}
                </div>
              </TableCell>
              <TableCell>
                <>
                  <p className="py-1">{form.contactName}</p>
                  <p className="py-1 text-gray-400">{form.phoneNumber}</p>
                  <p className="py-1 text-gray-400">{form.emailAddress}</p>
                </>
              </TableCell>
              <TableCell>{form.additionalInfo}</TableCell>
              <TableCell>{form.status}</TableCell>
              <TableCell>
                <div className="relative flex justify-end items-center gap-2">
                  <Dropdown>
                    <DropdownTrigger>
                      <Button isIconOnly size="sm" variant="light">
                        <VerticalDotsIcon
                          width={undefined}
                          height={undefined}
                        />
                      </Button>
                    </DropdownTrigger>
                    <DropdownMenu>
                      <DropdownItem
                        key="view"
                        href={`/admin/webforms/partnership/${form.id}`}
                      >
                        View
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table> */}
    </>
  );
}
