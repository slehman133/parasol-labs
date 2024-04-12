"use client";
import React from "react";
import prisma from "@/utils/db";
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
  User,
  Pagination,
} from "@nextui-org/react";
//TODO: add pub/sub functionality to update the table when new forms are submitted with ABLY

const INITIAL_VISIBLE_COLUMNS = [
  "Company",
  "Person of Contact",
  "Services",
  "Status",
  "Actions",
];
const columns = [
  { name: "ID", uid: "id", sortable: true },
  { name: "COMPANY", uid: "company", sortable: true },
  { name: "NAME", uid: "name", sortable: true },
  { name: "PHONE", uid: "phone" },
  { name: "EMAIL", uid: "email" },
  { name: "ACTIONS", uid: "actions" },
];

export default function PartnershipFormTable() {
  //get all the partnership forms from the database table
  //We also need to recurringly update the table when new forms are submitted
  //have the partnership forms stored in a react usestate
  const [forms, setForms] = React.useState([
    {
      id: "",
      companyName: "",
      companyWebpage: "",
      streetAddress: "",
      streetAddress2: "",
      city: "",
      stateOrProvince: "",
      postalCode: "",
      services: [""],
      additionalInfo: "",
      contactName: "",
      phoneNumber: "",
      emailAddress: "",
    },
  ]);

  const columns = [
    { name: "ID", uid: "id", sortable: true },
    { name: "COMPANY", uid: "company", sortable: true },
    { name: "SERVICES", uid: "services"},
    { name: "Contact Name", uid: "contactName"},
    { name: "PHONE", uid: "phoneNumber" },
    { name: "EMAIL", uid: "emailAddress" },
    { name: "ACTIONS", uid: "actions" },
  ]

  React.useEffect(() => {
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

  return (
    <>
      <div>gfl</div>
      <Table 
        selectionMode="single"
        aria-label="Partnership Form Table"
      >
        <TableHeader>
          {columns.map((column) => (
            <TableColumn key={column.uid}>{column.name}</TableColumn>
          ))}
        </TableHeader>
        <TableBody emptyContent="No Partnership inquiries found.">
          {forms.map((form) => (
            <TableRow key={form.id}>
              <TableCell>{form.id}</TableCell>
              <TableCell>{form.companyName}</TableCell>
              <TableCell>
                {form.services.map((service) => (
                  <Chip key={service} color="primary">{service}</Chip>
                ))}
              </TableCell>
              <TableCell>{form.contactName}</TableCell>
              <TableCell>{form.phoneNumber}</TableCell>
              <TableCell>{form.emailAddress}</TableCell>
              <TableCell>
                <div className="relative flex justify-end items-center gap-2">
                  <Dropdown>
                    <DropdownTrigger>
                      <Button isIconOnly size="sm" variant="light">
                        <User />
                      </Button>
                    </DropdownTrigger>
                    <DropdownMenu>
                      <DropdownItem>View</DropdownItem>
                      <DropdownItem>Edit</DropdownItem>
                      <DropdownItem>Delete</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
