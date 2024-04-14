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
  Chip,
  Selection,
  SortDescriptor,
  Pagination,
} from "@nextui-org/react";
import { VerticalDotsIcon } from "@/public/VerticalDotsIcon.jsx";
import { SendEmail } from "@/app/api/email/contact";
import GeneralFormModal from "../modals/generalformmodal";

const statusColorMap: Record<string, ChipProps["color"]> = {
  Delivered: "warning",
  Active: "success",
  Completed: "danger",
};

const statusOptions = ["Delivered", "Active", "Completed"];

const columns = [
  {name: "Name", uid: "name", sortable: true},
  {name: "Message", uid: "message"},
  {name: "Status", uid: "status", sortable: true},
  {name: "Actions", uid: "actions"},
];
const init_columns = [
  "name", "role", "status", "actions" 
]

export default function GeneralFormTable() {
  const [selectedColor, setSelectedColor] = React.useState("default");
  const [forms, setForms] = React.useState([]);
  const [filterValue, setFilterValue] = React.useState("");
  const [selectedKeys, setSelectedKeys] = React.useState<Selection>(new Set([]));
  const [visibleColumns, setVisibleColumns] = React.useState<Selection>(new Set(init_columns));
  const [statusFilter, setStatusFilter] = React.useState<Selection>("all");
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [sortDescriptor, setSortDescriptor] = React.useState<SortDescriptor>({
    column: "age",
    direction: "ascending",
  });

  type Form = typeof forms[0];

  const [page, setPage] = React.useState(1);

  const pages = Math.ceil(forms.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return forms.slice(start,end);
  }, [page, forms]);

  const sortedItems = React.useMemo(() => {
    return [...items].sort((a: Form, b: Form) => {
      const first = a[sortDescriptor.column as keyof Form] as number;
      const second = b[sortDescriptor.column as keyof Form] as number;
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === "descending" ? cmp : -cmp;
    });
  }, [items, sortDescriptor]);

  const hasSearchFilter = Boolean(filterValue);

  const filteredItems = React.useMemo(() => {
    let filteredForms = [...forms];
    if(hasSearchFilter){
      filteredForms = filteredForms.filter((form) => 
        form.name.toLowerCase().includes(filterValue.toLowerCase())
      );
    }
    if(statusFilter !== "all" && Array.from(statusFilter).length !== statusOptions.length){
      filteredForms = filteredForms.filter((form) => form.status === statusFilter);
    }

    return filteredForms;
  }, [forms, filterValue, statusFilter]);
  const onNextPage = React.useCallback(() => {
      if (page < pages) {
        setPage(page + 1);
      }
    }, [page, pages]);

    const onPreviousPage = React.useCallback(() => {
      if (page > 1) {
        setPage(page - 1);
      }
    }, [page]);

    const onRowsPerPageChange = React.useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
      setRowsPerPage(Number(e.target.value));
      setPage(1);
    }, []);

    const onSearchChange = React.useCallback((value?: string) => {
      if (value) {
        setFilterValue(value);
        setPage(1);
      } else {
        setFilterValue("");
      }
    }, []);

    const onClear = React.useCallback(()=>{
      setFilterValue("")
      setPage(1)
    },[])

    const bottomContent = React.useMemo(() => {
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
            <Button isDisabled={pages === 1} size="sm" variant="flat" onPress={onPreviousPage}>
              Previous
            </Button>
            <Button isDisabled={pages === 1} size="sm" variant="flat" onPress={onNextPage}>
              Next
            </Button>
          </div>

        </div>
      )
    }, [items.length, page, pages]);

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
              <DropdownMenu >
                <DropdownItem key='view' href={`/admin/webforms/general/${form.id}`}>View</DropdownItem>
              </DropdownMenu>
            </Dropdown>

          </div>
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
        bottomContent={bottomContent}
        sortDescriptor={sortDescriptor}
        onSortChange={setSortDescriptor}
      >
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.uid} allowsSorting={column.sortable}>{column.name}</TableColumn>
          )}
        </TableHeader>
        <TableBody emptyContent="No general inquiries found" items={sortedItems}>
          {(item) => (
            <TableRow key={item.id}>
              {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
