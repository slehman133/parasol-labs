//Kaeden Carver
"use client";
import React from "react";
import Link from "next/link";
import { Button, Divider } from "@nextui-org/react";
import { YoutubeIcon } from "@/public/YoutubeIcon";
import { LinkedinIcon } from "@/public/LinkedinIcon";
import { InstagramIcon } from "@/public/InstagramIcon";
import { TwitterIcon } from "@/public/TwitterIcon";
import { FacebookIcon } from "@/public/FacebookIcon";

export default function Footer() {
  return (
    <footer className="bg-inherit footer p-10 border-t-1 border-foreground mx-auto">
      <aside>
        <div className="sm:flex sm:items-center justify-center mx-auto">
          <img
            className="align-middle"
            src="/images/logo.png"
            height="75px"
            width="75px"
          />
        </div>
        <p className="smalltext ">Parasol Labs Incorporated © 2023</p>
      </aside>

      <nav>
        <header className="footer-title">Company</header>
        <Link href="/about#mission-statement" className="link link-hover">
          Mission Statement
        </Link>
        <Link href="/about#operational-statement" className="link link-hover">
          Operational Statement
        </Link>
        <Link href="/news" className="link link-hover">
          News
        </Link>
        <Link href="/privacy" className="link link-hover">
          Terms & Policies
        </Link>
      </nav>
      <Divider orientation="vertical" />

      <nav>
        <header className="footer-title">Research</header>
        <Link href="/products" className="link link-hover">
          Products
        </Link>
        <Link href="/projects#strlproject" className="link link-hover">
          Liquid Sterilization
        </Link>
        <Link href="/disclaimers" className="link link-hover">
          Disclaimers
        </Link>
      </nav>
      <Divider orientation="vertical" />
      <nav>
        <header className="footer-title">Social</header>
        <div className="grid grid-flow-col gap-4">
          <Link
            href="http://www.youtube.com/@ParasolLabs"
            target="_blank"
            className="dark:invert"
          >
            <YoutubeIcon />
          </Link>
          <Link
            href="https://www.linkedin.com/company/parasol-labs/"
            target="_blank"
            className="dark:invert"
          >
            <LinkedinIcon />
          </Link>
          <Link
            href="https://www.instagram.com/parasollabs/"
            target="_blank"
            className="dark:invert"
          >
            <InstagramIcon />
          </Link>
          <Link
            href="https://twitter.com/parasollabs"
            target="_blank"
            className="dark:invert"
          >
            <TwitterIcon />
          </Link>
          <Link
            href="https://www.facebook.com/parasollabs"
            target="_blank"
            className="dark:invert"
          >
            <FacebookIcon />
          </Link>
        </div>
      </nav>
    </footer>
  );
}
