"use client";

import React from "react";
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
} from "@nextui-org/react";
import { VerticalDotsIcon } from "@/public/VerticalDotsIcon.jsx";

const statusColorMap: Record<string, ChipProps["color"]> = {
  Delivered: "warning",
  Active: "success",
  Completed: "default",
};
export default function GeneralFormTable() {
  const [selectedColor, setSelectedColor] = React.useState("default");
  const [forms, setForms] = React.useState([]);

  const handleViewForm = () => {};

  const handleDeleteForm = (form: any) => {
    fetch(`/api/webforms/generalform`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: form.id }),
    });
  };

  React.useEffect(() => {
    async function fetchForms() {
      const response = await fetch("/api/webforms/generalform");
      const data = await response.json();
      console.log(data);
      setForms(data);
    }
    fetchForms();
  }, []);
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
        <TableHeader>
          <TableColumn>Name</TableColumn>
          <TableColumn>Email</TableColumn>
          <TableColumn>Message</TableColumn>
          <TableColumn>Status</TableColumn>
          <TableColumn>Actions</TableColumn>
        </TableHeader>
        <TableBody emptyContent="No general inquiries found">
          {forms.map((form: any) => (
            <TableRow key={form.id}>
              <TableCell>{form.name}</TableCell>
              <TableCell>{form.email}</TableCell>
              <TableCell>{form.message}</TableCell>
              <TableCell>{form.status}</TableCell>
              <TableCell>
                <div className="relative flex justify-center items-center gap-2">
                  <Dropdown>
                    <DropdownTrigger>
                      <Button isIconOnly size="sm" variant="light">
                        <VerticalDotsIcon className="text-default-300" />
                      </Button>
                    </DropdownTrigger>
                    <DropdownMenu>
                      <DropdownItem onClick={handleViewForm}>View</DropdownItem>
                      {/* <DropdownItem onClick={}>
                        Delete
                      </DropdownItem> */}
                    </DropdownMenu>
                  </Dropdown>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
