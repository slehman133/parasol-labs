"use client";
import { useState } from "react";
import Navbar from "./navbar/HeadNavbar";
import Sidebar from "./sidebar/Sidebar";

const Navigation = () => {
  // toggle sidebar
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar />
    </>
  );
};

export default Navigation;