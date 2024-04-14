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
  useDisclosure,
} from "@nextui-org/react";
import { VerticalDotsIcon } from "@/public/VerticalDotsIcon";
import PartnershipFormModal from "../modals/partnershipformmodal";
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
  const generalformModal = useDisclosure();

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
      status: "",
    },
  ]);

  const columns = [
    { name: "Company", uid: "company", sortable: true },
    { name: "Services", uid: "services"},
    { name: "Person of Contact", uid: "personOfContact"},
    { name: "Additonal Information", uid: "additionalInfo"},
    { name: "Status", uid: "status"},
    { name: "Actions", uid: "actions" },
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
    <>
      <Table 
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
                    <Chip key={service} color="warning" variant="dot">{service}</Chip>
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
              <TableCell>
                {form.status}
              </TableCell>
              <TableCell>
                <div className="relative flex justify-end items-center gap-2">
                  <Dropdown>
                    <DropdownTrigger>
                      <Button isIconOnly size="sm" variant="light">
                        <VerticalDotsIcon />
                      </Button>
                    </DropdownTrigger>
                    <DropdownMenu 
                      // onAction={(key) => {
                      //   if (key === 'view'){
                      //     generalformModal.onOpen();
                      //   }
                      // }}
                    >
                      <DropdownItem key='view' href={`/admin/webforms/partnership/${form.id}`}>View</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </div>
                <PartnershipFormModal disclosure={generalformModal} form={form} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
