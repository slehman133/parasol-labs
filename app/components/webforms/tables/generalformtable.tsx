"use client";

import React from "react";
import { useRouter } from "next/router";
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
  useDisclosure,
  Chip
} from "@nextui-org/react";
import { VerticalDotsIcon } from "@/public/VerticalDotsIcon.jsx";
import { SendEmail } from "@/app/api/email/contact";
import GeneralFormModal from "../modals/generalformmodal";

const statusColorMap: Record<string, ChipProps["color"]> = {
  Delivered: "warning",
  Active: "success",
  Completed: "default",
};

const columns = [
  {name: "Name", uid: "name"},
  {name: "Message", uid: "message"},
  {name: "Status", uid: "status"},
  {name: "Actions", uid: "actions"},
];

export default function GeneralFormTable() {
  const [selectedColor, setSelectedColor] = React.useState("default");
  const [forms, setForms] = React.useState([]);

  type Form = typeof forms[0];

  const generalformModal = useDisclosure();

  const renderCell = React.useCallback((form: Form, columnKey: React.Key) => {
    const cellValue = form[columnKey as keyof Form];
    switch (columnKey) {
      case "name":
        return (
          <>
            <p>{form.name}</p>
            <p className="text-gray-400">{form.email}</p>
          </>
        )
      case "status":
        return <Chip color={statusColorMap[form.status]}>{form.status}</Chip>;
      case "actions":
        return (
          <>
          <div className="relative flex justify-end items-center gap-2">
            <Dropdown>
              <DropdownTrigger>
                <Button isIconOnly size="sm" variant="light">
                  <VerticalDotsIcon />
                </Button>
              </DropdownTrigger>
              <DropdownMenu 
                onAction={(key) => {
                  if (key === 'view'){
                    generalformModal.onOpen();
                  }
                }}
              >
                <DropdownItem key='view'>View</DropdownItem>
              </DropdownMenu>
            </Dropdown>

          </div>
          <GeneralFormModal disclosure={generalformModal} form={form} />
          </>
        );
      default:
        return cellValue;
    }
  }, [])

  //allows the admin to view the form's contents, and provide an email.
  React.useEffect(() => {
    async function fetchForms() {
      const response = await fetch("/api/webforms/generalform");
      const data = await response.json();
      console.log(data);
      setForms(data);
    }
    fetchForms();
  }, [generalformModal.onClose]);
  const classNames = React.useMemo(
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
    <div className="flex flex-col gap-3">
      <Table
        aria-label="General Form Table"
        classNames={classNames}
        isCompact
        removeWrapper
      >
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.uid}>{column.name}</TableColumn>
          )}
        </TableHeader>
        <TableBody emptyContent="No general inquiries found" items={forms}>
          {/* {(item) => (
            <TableRow key={item.id}>
              {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
            </TableRow>
          )} */}
          {forms.map((form: any) => (
            <TableRow key={form.id}>
              <TableCell>
                <>
                  <p>{form.name}</p>
                  <p className="text-gray-400">{form.email}</p>
                </>
              </TableCell>
              <TableCell>
                <p className="text-ellipsis overflow-hidden">
                  {form.message}
                </p>
                </TableCell>
              <TableCell >{form.status}</TableCell>
              <TableCell>
                <div className="relative flex justify-end items-center gap-2">
                  <Dropdown>
                    <DropdownTrigger>
                      <Button isIconOnly size="sm" variant="light">
                        <VerticalDotsIcon />
                      </Button>
                    </DropdownTrigger>
                    <DropdownMenu 
                      onAction={(key) => {
                        // if (key === 'view'){
                        //   generalformModal.onOpen();
                        //   console.log(form.id);
                        // }
                      }}
                    >
                      <DropdownItem key='view' href={`/admin/webforms/general/${form.id}`}>View</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                  <GeneralFormModal disclosure={generalformModal} form={form} />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
