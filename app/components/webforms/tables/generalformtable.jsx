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
} from "@nextui-org/react";
import { VerticalDotsIcon } from "./VerticalDotsIcon";

export default function GeneralFormTable() {
  const [selectedColor, setSelectedColor] = React.useState("default");
  const [forms, setForms] = React.useState([]);

  const handleViewForm = () => {};
  const classNames = React.useMemo(
    () => ({
      wrapper: ["max-h-[382px]", "max-w-3xl"],
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
  React.useEffect(() => {
    async function fetchForms() {
      const response = await fetch("/api/webforms/generalform");
      const data = await response.json();
      console.log(data);
      setForms(data);
    }
    fetchForms();
  }, []);
  //allow the table to have sortable columns based on name
  //allow the table to have a search bar

  


  return (
    <div className="flex flex-col gap-3">
      <h1>General Forms</h1>
      <Table
        color={selectedColor}
        selectionMode="single"
        aria-label="General Form Table"
        isCompact
        removeWrapper
        classNames={classNames}
        className=""
      >
        <TableHeader>
          <TableColumn>Name</TableColumn>
          <TableColumn>Email</TableColumn>
          <TableColumn>Message</TableColumn>
          <TableColumn>Actions</TableColumn>
        </TableHeader>
        <TableBody emptyContent="No messages found">
          {forms.map((form) => (
            <TableRow key={form.id}>
              <TableCell>{form.name}</TableCell>
              <TableCell>{form.email}</TableCell>
              <TableCell>{form.message}</TableCell>
              <TableCell>
                <div className="relative flex justify-end items-center gap-2">
                  <Dropdown>
                    <DropdownTrigger>
                      <Button isIconOnly size="sm" variant="light">
                        <VerticalDotsIcon className="text-default-300" />
                      </Button>
                    </DropdownTrigger>
                    <DropdownMenu>
                      <DropdownItem onClick={handleViewForm}>View</DropdownItem>
                      <DropdownItem
                        onClick={() => {
                          fetch(`/api/webforms/generalform/${form.id}`, {
                            method: "DELETE",
                          });
                        }}
                      >
                        Delete
                      </DropdownItem>
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
