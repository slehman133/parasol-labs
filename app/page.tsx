"use client";
import React, { useState } from "react";
import HeadNavbar from "./components/navigation/navbar/HeadNavbar";
import "./homestyles.css";
import {
  Button,
  Card,
  CardHeader,
  Divider,
  Image,
  Input,
  Link,
  Textarea,
} from "@nextui-org/react";
import {
  motion,
  useAnimation,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import SwiperButton from "./components/navigation/swiperbutton/SwiperButton";
import { useInView } from "react-intersection-observer";
import ProfilePicture from "./components/profile/circularprofile";

//Kaeden
//TODO: figure out how the hell to hide the header and have it fade in at a certain point
//ALSO: figure out how to make the video scroll into the div below and not have it be its own section.
export default function Home() {
  //Used for the section wipe for the video section
  const { scrollY } = useViewportScroll();
  const y = useTransform(scrollY, [0, 1], [0, -1]);

  //controls used for animating text to be in view
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const [strlRef, inStrlView] = useInView();
  const [isVisible, setIsVisible] = useState(false);
  const [isStrlVisible, setIsStrlVisible] = useState(false);


  if (inView && !isVisible) {
    controls.start("visible");
    setIsVisible(true);
  }
  if (inStrlView && !isStrlVisible) {
    controls.start("visible");
    setIsStrlVisible(true);
  }
  return (
    <div>
      <section className="z-10">
        <video loop muted autoPlay>
          <source src="/videos/parasolHome.mp4" type="video/mp4" />
        </video>
        <SwiperButton targetId="landing-section" />
      </section>
      <section className="content min-h-screen" id="landing-section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className=" px-10 py-5 mx-auto my-auto">
            <h1 className="text-3xl lg:text-6xl font-bold text-center lg:text-left">
              Fueled by innovation,
              <br />
              <span className="lg:text-right" data-end="YOU">
                Inspired by&nbsp;
              </span>
            </h1>
            <Divider orientation="horizontal" className="mt-10 lg:w-1/2 mx-auto lg:float-right" />
            <p className="text-center lg:text-left text-md lg:text-xl pt-10 font-thin">
              <br />
              At Parasol Labs, we are fueled by an unwavering commitment to innovate and deliver
              life-changing biotechnology solutions for marginalized communities and women's health. Through
              our relentless pursuit of rigorous research and the deployment of cutting-edge technology, we
              develop products that are safe, effective, and accessible.
            </p>
            <div className="py-10 text-center lg:text-left">
              <Link href="/about" color="foreground">
                <div className="grid grid-cols-2 gap-4">
                  <h1 className="font-bold text-lg lg:text-2xl py-5">About us</h1>
                  <svg id="right" className="arrow-right my-auto ">
                    <path
                      d="M0.5 9.35772H20.9956L14.2001 2.29941L16.4134 0L27 11L16.4134 22L14.2001 19.7006L20.9956 12.6423H0.5V9.35772Z"
                      fill="#ffffff"
                    ></path>
                  </svg>
                </div>
              </Link>
            </div>
          </div>
          <div className=" mx-auto">
            {/* todo: make image look like a wax seal stamp (add some flair in that page) */}
            <img
              className="resizeableImage mx-auto my-auto p-5"
              src="/images/logo.png"
              alt=""
            />
          </div>
        </div>
      </section>
      <div className="py-1">
        {/* TODO: Add sliding animation on entry of section */}
        {/* Potential: create a hook and utilize div refs to keep things */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-[50%_50%] px-5 md:px-10 gap-5">
            <div className="text-center md:text-left">
              <motion.h1
                className="mx-auto md:text-6xl py-10 leading-loose"
                initial="hidden"
                animate={controls}
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 50 },
                }}
                transition={{ duration: 1 }}
                ref={ref}
              >
                Our first step in{" "}
                <span className="text-green-300 font-semibold">Biotechnology.</span>
                <br />
                Is with{" "}
                <span className="text-red-400 font-bold">Women's Health</span>.
              </motion.h1>
              <svg
                height={200}
                width={200}
                className="mx-auto"
                id="eDiGStl2V6I1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 300 300"
                shape-rendering="geometricPrecision"
                text-rendering="geometricPrecision"
              >
                <path
                  d="M216.201146,141.167723c-26.689497-4.919209-44.913991-2.686837-66.897827-26.258456-23.221065-23.254447-65.673291-13.6587-69.062625,22.173807s63.467703,84.919324,135.960452,4.084649Z"
                  transform="translate(1.817804 23.442574)"
                  fill="#ecc9c7"
                  stroke="#ecc9c7"
                  strokeWidth="0.6"
                />
                <ellipse
                  rx="25"
                  ry="25"
                  transform="translate(130.982868 93.32929)"
                  fill="#ecc9c7"
                  strokeWidth="0"
                />
                <ellipse
                  rx="15"
                  ry="15"
                  transform="translate(189.838379 140.696999)"
                  fill="#ecc9c7"
                  strokeWidth="0"
                />
              </svg>
            </div>
            <div className="text-center md:text-right">
              <img
                src="/images/homepagelady.png"
                alt="Teagan Paddleton and her baby, Oakley."
                className="h-3/4 mx-auto my-auto boxshadow"
              />
            </div>
          </div>
        </section>
        <Divider orientation="horizontal" />
        <section className="content ">
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-12">
            {/* Image column */}
            <div className="relative">
              <Image
                src="/images/strl.jpg"
                className="h-auto w-full z-0 opacity-80 rounded-lg strl-shadow"
                alt="STRL background"
              />
            </div>

            {/* Motion div column */}
            <motion.div
              className="flex flex-col justify-center p-5 text-left"
              initial="hidden"
              animate={controls}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 50 },
              }}
              transition={{ duration: 1 }}
              ref={strlRef}
            >
              <h1 className="font-bold text-2xl md:text-4xl py-5">Liquid Sterilization</h1>
              <h1 className="font-bold text-9xl md:text-8xl py-5">STRL</h1>
              <p>
                Our inaugural project, STRL paves the way for future innovations
                at Parasol Laboratories, all aimed at enriching lives and
                transforming global health.
              </p>
              <Link href="/projects" color="foreground">
                <div className="grid grid-cols-2 gap-4 items-center">
                  <h1 className="font-bold text-2xl md:text-4xl py-5">Find out more</h1>
                  <svg id="right" className="arrow-right my-auto ">
                    <path
                      d="M0.5 9.35772H20.9956L14.2001 2.29941L16.4134 0L27 11L16.4134 22L14.2001 19.7006L20.9956 12.6423H0.5V9.35772Z"
                      fill="#ffffff"
                    ></path>
                  </svg>
                </div>
              </Link>
            </motion.div>
          </div>
        </section>

        <section className="content">
          <div className="text-center">
            {/* TODO: add animation to the following header text */}
            <motion.h1 className="mx-auto text-4xl md:text-6xl py-10 md:py-20 leading-loose">
              Our Advisors.
              <Divider orientation="horizontal" className="my-5 md:my-10" />
            </motion.h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-x-unit-3xl mx-auto">
            <div className="mx-auto">
              <ProfilePicture imageUrl="/images/ashraf_affan.webp" linkedinUrl="" />
              <h1 className="font-semibold text-lg md:text-xl lg:text-2xl">Dr. Ashraf Affan</h1>
              <p className="font-semibold text-slate-400 text-sm md:text-base">
                Angel Kids Pediatrics
                <br />I Nurse My Baby
                <br />
                Center for Medicare & Medicaid Services
              </p>
            </div>
            <div className="mx-auto">
              <ProfilePicture imageUrl="/images/christine_davies.jpg" linkedinUrl="" />
              <h1 className="font-semibold">Christine Davies</h1>
              <p className="font-semibold text-slate-400">
                Angel Kids Pediatrics
                <br />
                Board Certified Lactation Consultant
              </p>
            </div>
            <div className="mx-auto">
              <ProfilePicture imageUrl="/images/megan_gregg.jpg" linkedinUrl="" />
              <h1 className="font-semibold">Megan Gregg</h1>
              <p className="font-semibold text-slate-400">
                15+ years of experience building startups in SaaS, MarTech, F&B,
                and E-commerce <br />
                Founding Member of Women in Tech
              </p>
            </div>
            <div className="mx-auto">
              <ProfilePicture imageUrl="/images/scott_kelly.jpeg" linkedinUrl="" />
              <h1 className="font-semibold">Scott Kelly</h1>
              <p className="font-semibold text-slate-400">
                Black Dog Venture Partners
              </p>
            </div>
          </div>
        </section>
        <Divider orientation="horizontal" className="my-10" />
        <section className="content" id="contact">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 md:gap-x-8">
            <div className="text-center md:text-left py-2">
              <h1 className="font-thin text-4xl md:text-7xl">
                Let us innovate tomorrow,{" "}
                <span className="font-bold" data-end="you">
                  with&nbsp;
                </span>
                .
              </h1>
              <p className="py-5 font-thin text-lg">
                We&apos;re here to help. Whether you have general questions or inquiries - we&apos;re here to provide information and answer questions.
              </p>
              <div className="py-5">
                <div className="contact-box py-2">
                  <svg
                    fill="#FFFFFF"
                    height="100px"
                    width="100px"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 24 24"
                    enable-background="new 0 0 24 24"
                    xmlSpace="preserve"
                  >
                    <g id="stakeholder">
                      <path d="M18,1.9l-6,3V12l6,3l6-3V4.8L18,1.9z M20.7,5.5L18,6.8l-2.7-1.3L18,4.1L20.7,5.5z M14,7.1l3,1.5v3.7l-3-1.5V7.1z M19,12.2V8.5l3-1.5v3.7L19,12.2z" />
                      <path d="M8.9,13.8C9.6,13.1,10,12.1,10,11c0-2.2-1.8-4-4-4s-4,1.8-4,4c0,1.1,0.4,2.1,1.1,2.8C1.3,14.9,0,16.9,0,19.2V22h2.7h0.8H12v-2.8C12,16.8,10.7,14.8,8.9,13.8z M4,11c0-1.1,0.9-2,2-2s2,0.9,2,2c0,1.1-0.9,2-2,2S4,12.1,4,11z M10,20H3.5H2.7H2v-0.8C2,16.9,3.8,15,6,15c2.2,0,4,1.9,4,4.2V20z" />
                    </g>
                  </svg>
                  <div className="ml-4">
                    <h2 className="text-xl md:text-4xl font-bold">Partnership Inquiries</h2>
                    <p className="py-2 text-sm md:text-base">
                      Let&apos;s work and grow together. Click the link below to fill out the forms and our partnership manager will reach out to you.
                    </p>
                    <Button as={Link} href="/webforms/partnershipform" color="success" className="text-white font-semibold" size="lg">
                      Partnership Form
                    </Button>
                  </div>
                </div>
              </div>
              <div className="py-5">
                <div className="contact-box py-2">
                  <svg
                    width="100px"
                    height="100px"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="none">
                      <g transform="translate(6 5)" fill="#FFF">
                        <path d="M10.02.53c-1.295 0-2.345 4.697-2.345 10.49s1.05 10.49 2.345 10.49c1.294 0 2.344-4.697 2.344-10.49S11.314.53 10.02.53zm.162 20.387c-.148.198-.297.05-.297.05-.596-.692-.894-1.975-.894-1.975-1.043-3.357-.795-10.564-.795-10.564.49-5.721 1.382-7.073 1.685-7.373a.185.185 0 01.238-.019c.44.313.81 1.617.81 1.617 1.09 4.048.991 7.848.991 7.848.099 3.308-.546 7.01-.546 7.01-.497 2.814-1.192 3.406-1.192 3.406z" />
                        <path d="M19.118 5.8c-.645-1.124-5.24.303-10.267 3.186-5.027 2.883-8.573 6.13-7.93 7.254.645 1.124 5.241-.303 10.268-3.186 5.027-2.883 8.574-6.131 7.93-7.254zM1.515 16.085c-.246-.03-.19-.234-.19-.234.302-.86 1.266-1.758 1.266-1.758 2.393-2.575 8.769-5.946 8.769-5.946 5.206-2.422 6.823-2.32 7.233-2.208a.185.185 0 01.135.198c-.05.537-1 1.507-1 1.507-2.966 2.961-6.312 4.768-6.312 4.768-2.82 1.732-6.353 3.013-6.353 3.013-2.688.968-3.548.66-3.548.66z" />
                        <path d="M19.095 16.277c.65-1.12-2.887-4.383-7.898-7.288C6.187 6.085 1.593 4.641.944 5.763c-.65 1.123 2.888 4.383 7.9 7.288 5.013 2.904 9.602 4.348 10.251 3.226zM1.375 6.196c-.097-.228.106-.283.106-.283.897-.17 2.157.217 2.157.217 3.427.78 9.538 4.608 9.538 4.608 4.705 3.292 5.427 4.743 5.535 5.154a.185.185 0 01-.103.215c-.49.225-1.805-.11-1.805-.11-4.05-1.086-7.289-3.075-7.289-3.075-2.91-1.57-5.788-3.985-5.788-3.985-2.187-1.842-2.35-2.74-2.35-2.74l-.002-.001z" />
                        <circle cx="9.995" cy="10.995" r="1.234" />
                        <circle cx="15.055" cy="6.256" r="1" />
                        <circle cx="3.306" cy="8.774" r="1" />
                        <circle cx="8.539" cy="17.856" r="1" />
                      </g>
                    </g>
                  </svg>
                  <div className="ml-4">
                    <h2 className="text-xl md:text-4xl font-bold">General Inquiries</h2>
                    <p className="py-2 text-sm md:text-base">
                      Need more information? Have an inquiry for an issue? We&apos;re here to help. Fill out our form and we will get in touch.
                    </p>
                    <Button as={Link} href="/webforms/generalform" color="success" className="text-white font-semibold" size="lg">
                      Contact Us
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-5 text-center md:text-left">
              <h1 className="font-bold text-2xl md:text-4xl border-b-2 border-white">
                Recent News
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 py-5">
                {/* ACTUALLY PULL FROM NEWS PAGE */}
              <Card className="h-[300px] " isPressable={true}
                  onClick={() => {
                    window.open("news/moms-wanted-be-the-face-of-strl");
                  }}
                >
                  <CardHeader className="z-10 absolute flex-col !items-start top-1">
                    <div className="grid grid-cols-2 gap-3">
                      <p className="text-tiny text-white/60 uppercase font-bold">
                        Teagan Paddleton
                      </p>
                      <svg
                        width="15px"
                        height="15px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="opacity-60"
                      >
                        <path
                          d="M4 19H20M11.2929 5.70711L8.70711 8.2929C8.31658 8.68342 7.68342 8.68342 7.29289 8.2929L5.70711 6.70711C5.07714 6.07714 4 6.52331 4 7.41422V15C4 15.5523 4.44772 16 5 16H19C19.5523 16 20 15.5523 20 15V7.41421C20 6.52331 18.9229 6.07714 18.2929 6.70711L16.7071 8.2929C16.3166 8.68342 15.6834 8.68342 15.2929 8.2929L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711Z"
                          stroke="#FFFFFF"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <h4 className="text-white font-medium text-large">
                      Moms Wanted! Be the face of STRL.
                    </h4>
                  </CardHeader>
                  <Image
                    removeWrapper
                    alt="Moms Wanted! Be the face of STRL"
                    className="z-0 w-auto h-full object-cover brightness-50"
                    src="/images/strlnews.webp"
                  />
                </Card>
              </div>
            </div>
          </div>
        </section> 
      </div>
    </div>
  );
}
