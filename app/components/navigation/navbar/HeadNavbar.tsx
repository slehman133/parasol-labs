// code by Samuel Lehman

"use client";
//Kaeden
import React from "react";
import { useCart } from "@/app/context/CartContext";
import { useSession, signOut } from "next-auth/react";
import { Divider, Link } from "@nextui-org/react";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Image,
} from "@nextui-org/react";

import { siteConfig } from "@/app/config/site";
import { useState } from "react";

const HeadNavbar = () => {
  const { cartItems } = useCart();
  const { status } = useSession();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Navbar
        maxWidth="full"
        position="sticky"
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        className="bg-inherit "
      >
        <NavbarContent className=" sm:basis-full " justify="start">
          <NavbarBrand as="li" className="gap-3 max-w-fit flex space-x-1">
            <NextLink
              className="flex justify-start items-center gap-1"
              href="/"
            >
              <Image
                src="/images/logo.png"
                height={"40px"}
                width={"40px"}
                alt="Parasol"
              />
            </NextLink>
            <Divider orientation="vertical" className="bg-white"/>
          </NavbarBrand>
          <NavbarBrand>
            <p className="font-bold text-inherit text-white text-lg">
              PARASOL LABORATORIES
              <br />
              INCORPORATED
            </p>
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent className="visible" justify="end">
          <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"}/>
        </NavbarContent>
        <NavbarMenu className="">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={"${item}-${index}"}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                    ? "danger"
                    : "foreground"
                }
                className="w-full "
                href={item.href}
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </>
  );
};

export default HeadNavbar;
