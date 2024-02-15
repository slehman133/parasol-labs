"use client";
import React from "react";
import HeadNavbar from "./components/navigation/navbar/HeadNavbar";
import "./homestyles.css";
import { Button, Divider, Input, Link, Textarea } from "@nextui-org/react";
import Contact from "./components/Form/contact";
import { motion } from "framer-motion";
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
        <div className="pt-4">
          <HeadNavbar />
          <section className="content min-h-screen">
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
                  innovate and deliver life-changing biotechnology solutions for
                  marginalized communities and women`s health. Through our
                  relentless pursuit of rigorous research and the deployment of
                  cutting-edge technology, we develop products that are safe,
                  effective, and accessible.
                </p>
              </div>
              <div className="column p-10">
                {/* todo: make image look like a wax seal stamp (add some flair in that page) */}
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
          <section>
            <div className="grid-rows-1 grid-flow-col">
              <div className="text-left">
                <h1>
                  Our first step.
                </h1>
                <Divider orientation="horizontal" className="py-5"/>
              </div>

            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
