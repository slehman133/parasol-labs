"use client";
import React from "react";
import HeadNavbar from "./components/navigation/navbar/HeadNavbar";
import "./homestyles.css";
import { Button, Divider, Input, Link, Textarea } from "@nextui-org/react";
import Contact from "./components/Form/contact";
import { motion } from "framer-motion";
import SwiperButton from "./components/navigation/swiperbutton/SwiperButton";
//Kaeden
//TODO: figure out how the hell to hide the header and have it fade in at a certain point
//ALSO: figure out how to make the video scroll into the div below and not have it be its own section.
export default function Home() {
  return (
    <div>
      <section className="z-10">
        <video loop muted autoPlay>
          <source src="/videos/parasolHome.mp4" type="video/mp4" />
        </video>
        <SwiperButton targetId="landing-section" />
      </section>
      <div className="pt-4">
        <section className="content min-h-screen" id="landing-section">
          <div className="row">
            <div className="column p-10 mx-auto my-auto">
              <h1 className="text-8xl font-bold text-left">
                Fueled by innovation,
              </h1>
              <h1 className="text-8xl font-bold text-right" data-end="YOU">
                Inspired by&nbsp;
              </h1>
              <Divider orientation="horizontal" className="mt-10  w-1/2 float-right" />
              <p className="text-left text-2xl pt-10 font-thin">
                <br />
                At Parasol Labs, we are fueled by an unwavering commitment to
                innovate and deliver life-changing biotechnology solutions for
                marginalized communities and women`s health. Through our
                relentless pursuit of rigorous research and the deployment of
                cutting-edge technology, we develop products that are safe,
                effective, and accessible.
              </p>
            </div>
            <div className="column p-10 mx-auto h-min-screen ">
              {/* todo: make image look like a wax seal stamp (add some flair in that page) */}
              <img
                className="resizeableImage mx-auto my-auto p-5"
                src="/images/logo.png"
                alt=""
              />
            </div>
          </div>
        </section>
        {/* TODO: Add sliding animation on entry of section */}
        {/* Potential: create a hook and utilize div refs to keep things */}
        <div className="text-center">
          <h1 className="mx-auto text-6xl py-20 leading-loose">
            Our first step in <span className="text-green-300 font-semibold">Bio</span>technology.
            <br />
            Is with <span className="text-red-400 font-bold">Women's Health</span>.
          </h1>
          <svg height={200} width={200} className="mx-auto" id="eDiGStl2V6I1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 300 300" shape-rendering="geometricPrecision" text-rendering="geometricPrecision"><path d="M216.201146,141.167723c-26.689497-4.919209-44.913991-2.686837-66.897827-26.258456-23.221065-23.254447-65.673291-13.6587-69.062625,22.173807s63.467703,84.919324,135.960452,4.084649Z" transform="translate(1.817804 23.442574)" fill="#ecc9c7" stroke="#ecc9c7" stroke-width="0.6" /><ellipse rx="25" ry="25" transform="translate(130.982868 93.32929)" fill="#ecc9c7" stroke-width="0" /><ellipse rx="15" ry="15" transform="translate(189.838379 140.696999)" fill="#ecc9c7" stroke-width="0" /></svg>

          <Divider orientation="horizontal" className="my-10" />
        </div>
        <section className="content h-screen">
          <div className="relative">
            <img
              src="/images/strl.jpg"
              className="absolute opacity-80 left-0"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
