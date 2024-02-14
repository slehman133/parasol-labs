"use client";
import React from "react";
import HeadNavbar from "./components/navigation/navbar/HeadNavbar";
import "./homestyles.css";
import { Button, Divider, Input, Link, Textarea } from "@nextui-org/react";
import Contact from "./components/Form/contact";
import { motion } from "framer-motion";
//Kaeden
//TODO: add in some cool scrolly wolly shiet
//ALSO: figure out how to make the video scroll into the div below and not have it be its own section.
export default function Home() {
  return (
    <main className="hidescroll">
      <div>
        <section className="z-10">
          <video loop muted autoPlay>
            <source src="/videos/parasolHome.mp4" type="video/mp4" />
          </video>
        </section>
        <div className="pt-4">
          <section className="content">
            <div className="row ">
              <div className="column mx-auto 6/12 ">
                <h1 className="text-6xl font-bold text-left">
                  Fueled by innovation,
                </h1>
                <h1 className="text-6xl font-bold text-left" data-end="You.">
                  Inspired by&nbsp;
                </h1>
                <Divider orientation="horizontal" className="mt-10 w-2/12" />
                <p className="text-left text-xl w-8/12">
                  <br />
                  At Parasol Labs, we are fueled by an unwavering commitment to
                  innovate and deliver life-changing biotechnology solutions for
                  marginalized communities and women`s health. Through our
                  relentless pursuit of rigorous research and the deployment of
                  cutting-edge technology, we develop products that are safe,
                  effective, and accessible.
                </p>
                <div className="pt-10 w-1/12">
                  <Link href="/about">
                    <Button
                      className="text-2xl py-5 px-10"
                      variant="bordered"
                      radius="none"
                    >
                      Our Company
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="column px-20 flex flex-wrap">
                <div>
                  <svg
                    id="eDiGStl2V6I1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 300 300"
                    shape-rendering="geometricPrecision"
                    text-rendering="geometricPrecision"
                    height={200}
                    width={200}
                  >
                    <path
                      d="M216.201146,141.167723c-26.689497-4.919209-44.913991-2.686837-66.897827-26.258456-23.221065-23.254447-65.673291-13.6587-69.062625,22.173807s63.467703,84.919324,135.960452,4.084649Z"
                      transform="translate(1.817804 23.442574)"
                      fill="#ecc9c7"
                      stroke="#ecc9c7"
                      stroke-width="0.6"
                    />
                    <ellipse
                      rx="25"
                      ry="25"
                      transform="translate(130.982868 93.32929)"
                      fill="#ecc9c7"
                      stroke-width="0"
                    />
                    <ellipse
                      rx="15"
                      ry="15"
                      transform="translate(189.838379 140.696999)"
                      fill="#ecc9c7"
                      stroke-width="0"
                    />
                  </svg>
                  <h3 className="-mt-9">
                    Women&apos;s Health
                    <br />
                    Advocate
                  </h3>
                </div>

                {/* <img
                  className="resizeableImage"
                  src="/images/logo.png"
                  height="200px"
                  width="100px"
                /> */}
              </div>
            </div>
          </section>
          <section className="content">
            <div className="row">
              <div className="column">
                <h1 className="text-7xl font-bold text-left">
                  Our first step,
                  <br />
                  <br />
                  Towards women&apos;s health.
                </h1>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
