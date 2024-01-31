"use client";
import React from "react";
import HeadNavbar from "./components/navigation/navbar/HeadNavbar";
import "./homestyles.css";
import { Button, Input, Link, Textarea } from "@nextui-org/react";
import Contact from "./components/Form/contact";
//Kaeden
//TODO: figure out how the hell to hide the header and have it fade in at a certain point
//ALSO: figure out how to make the video scroll into the div below and not have it be its own section.
export default function Home() {
  return (
    <main className="dark">
      <div>
        <section className="z-10">
          <video loop muted autoPlay>
            <source src="/videos/parasolHome.mp4" type="video/mp4" />
          </video>
        </section>
        <div>
          <HeadNavbar />
          <section className="content">
            <div className="row">
              <div className="column p-10 mx-auto">
                <h1 className="text-5xl font-bold text-center">
                  Fueled by innovation
                </h1>
                <h1 className="text-6xl font-bold text-right" data-end="U">
                  Inspired by YO
                </h1>
                <p className="text-left text-3xl">
                  <br />
                  At Parasol Labs, we are fueled by an unwavering commitment to
                  innovate and deliver life-changing biotechnology for
                  marginalized communities and women&apos;s health. Through our
                  relentless pursuit of rigorous research and the deployment of
                  cutting-edge technology, we develop products that are safe,
                  effective, and accessible.
                </p>
              </div>
              <div className="column p-10">
                <img
                  className="resizeableImage"
                  src="/images/logo.png"
                  height="400px"
                  width="500px"
                  alt=""
                />
              </div>
            </div>
          </section>
          <section className="relative text-white text-center">
            <img src="/images/strl.jpg" className="fullImage" alt="" />
            <div className="absolute left-16 top-10">
              <h1 className="text-9xl">STRL</h1>
            </div>
            <div className="absolute left-16 top-64 w-3/12 text-left text-3xl">
              <p>
                We’ve invented liquid sterilization technology that will change
                the face of infant nutrition and healthcare. Forever.
              </p>
            </div>
            <div className="absolute left-16 bottom-96">
              <Link href="/products" className="text-white">
                <Button
                  color="white"
                  variant="bordered"
                  href="/products"
                  className="p-10 text-left"
                  size="lg"
                >
                  <p className="text-6xl p-5 text-left">Learn More.</p>
                  {String.fromCharCode(8592)}
                </Button>
              </Link>
            </div>
          </section>
          <section className="m-2 ml-48 mt-24 mr-48 min-h-screen">
            <h1 className="text-9xl text-left">Contact Us</h1>
            <p>Whether you have general questions or inquiries - we&apos;re here to provide information and answer questions.</p>
            <div className="flex w-96 flex-wrap gap-4 p-10">
              <Input type="email" label="Email" variant="underlined"/>
              <Input type="subject" label="Subject" variant="underlined"/>
              <Textarea variant="underlined" label="Message" labelPlacement="outside" placeholder="Enter your message"/>

            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
