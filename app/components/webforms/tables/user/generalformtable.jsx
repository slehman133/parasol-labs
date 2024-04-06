//create a component that will display all the general forms submitted by the user

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
  Modal,
} from "@nextui-org/react";

export default function GeneralFormTable() {
    //get the current user
    const user = JSON.parse(localStorage.getItem('user'));

    //get the current user's forms
    const [forms, setForms] = React.useState([]);
    React.useEffect(() => {
        async function fetchForms() {
            const response = await fetch("/api/webforms/generalform");
            const data = await response.json();
            console.log(data);
            setForms(data);
        }
        fetchForms();
    }, []);
}

