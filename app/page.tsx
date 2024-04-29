"use client";
import React, { useEffect, useState } from "react";
import "./homestyles.css";
import { Button, Divider, Image, Link } from "@nextui-org/react";
import {
  motion,
  useAnimation,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import SwiperButton from "./components/navigation/swiperbutton/SwiperButton";
import { useInView } from "react-intersection-observer";
import ProfilePicture from "./components/profile/circularprofile";
import { client } from "@/sanity/lib/client";
import dynamic from "next/dynamic";
import Particles from "./components/Particles";
import { ArrowIcon } from "@/public/ArrowIcon";

const PostPreview = dynamic(() => import("./components/Blog/PostPreview"), {
  loading: () => <p>Loading...</p>,
});

// import PostPreview from "./components/Blog/PostPreview";

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
  const [postPreviews, setPostPreviews] = useState<any>([]);

  if (inView && !isVisible) {
    controls.start("visible");
    setIsVisible(true);
  }
  if (inStrlView && !isStrlVisible) {
    controls.start("visible");
    setIsStrlVisible(true);
  }

  useEffect(() => {
    //fetch news articles from sanity
    const fetchNews = async () => {
      const res = await client.fetch(
        `*[_type == "post"]`,
        {},
        { cache: "no-store" }
      );
      const articleNum = res.length;
      // //limit the ref to the last four articles
      setPostPreviews(
        res
          .slice(articleNum - 2, articleNum)
          .map((post: any) => (
            <PostPreview key={post.slug?.current} {...post} />
          ))
      );
    };
    fetchNews();
  }, []);

  return (
    <div className="overflow-x-hidden">
      <section className="z-10 md:block relative ">
        <div className="h-screen w-screen flex items-center justify-center ">
          <Particles
            className="absolute inset-0 animate-fade-in animate-pulse"
            quantity={400}
          />
          <div className="leading-tight text-xl md:text-6xl mb-24 tracking-in-contract ">
            <h1>Parasol Laboratories</h1>
            <Divider />
            <h2 className="text-foreground-500">Incorporated</h2>
          </div>
        </div>
      </section>
      <div className="container mx-auto px-6 md:px-24">
        <section className="" id="landing-section">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div className=" px-10 py-5 mx-auto my-auto">
              <h1 className="text-3xl lg:text-6xl font-bold text-center lg:text-left">
                Fueled by innovation,
                <br />
                <span className="lg:text-right" data-end="YOU">
                  Inspired by&nbsp;
                </span>
              </h1>
              <Divider
                orientation="horizontal"
                className="mt-10 lg:w-1/2 mx-auto lg:float-right"
              />
              <p className="text-center lg:text-left text-md lg:text-xl pt-10 font-light">
                <br />
                At Parasol Labs, we are fueled by an unwavering commitment to
                innovate and deliver life-changing biotechnology solutions for
                marginalized communities and women&apos;s health. Through our
                relentless pursuit of rigorous research and the deployment of
                cutting-edge technology, we develop products that are safe,
                effective, and accessible.
              </p>
              <div className="py-10 text-center lg:text-left">
                <Link href="/about" color="foreground">
                  <div className="grid grid-cols-2 gap-4">
                    <h1 className="font-bold text-lg lg:text-2xl py-5">
                      About us
                    </h1>
                    <ArrowIcon/>
                  </div>
                </Link>
              </div>
            </div>
            <div className=" mx-auto">
              {/* todo: make image look like a wax seal stamp (add some flair in that page) */}
              <Image
                className="w-2/3 lg:w-full mx-auto my-auto p-5"
                src="/images/logo.png"
                alt=""
              />
            </div>
          </div>
        </section>
        <div className="py-1 " id="strl">
          <section>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-12">
              <div className="relative my-auto">
                  <Image
                    src="/images/strlPanel.jpg"
                    className="h-auto w-full z-0 opacity-80 rounded-lg block lg:hidden "
                    alt="STRL background"
                  />
                  <Image
                    src="/images/strl.jpg"
                    className="h-auto w-full z-0 opacity-80 rounded-lg strl-shadow hidden lg:block"
                    alt="STRL background"
                  />
              </div>
              <motion.div
                className="flex flex-col justify-center p-5 text-left"
                initial="hidden"
                animate={controls}
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 50 },
                }}
                transition={{ duration: 1 }}
                ref={ref}
                
              >
                <h1 className="font-bold text-2xl md:text-4xl py-5">
                  Liquid Sterilization
                </h1>
                <h1 className="font-bold text-9xl md:text-8xl py-5">STRL</h1>
                <p>
                  Our inaugural project, STRL paves the way for future
                  innovations at Parasol Laboratories, all aimed at enriching
                  lives and transforming global health.
                </p>
                <Link href="/projects" color="foreground">
                  <div className="grid grid-cols-2 gap-4 items-center">
                    <h1 className="font-bold text-2xl md:text-4xl py-5">
                      Find out more
                    </h1>
                    <ArrowIcon/>
                  </div>
                </Link>
              </motion.div>
            </div>
          </section>
          <section className="mt-[20%]">
            <div className="text-center">
              {/* TODO: add animation to the following header text */}
              <motion.h1 className="mx-auto text-4xl md:text-6xl py-10 md:py-20 leading-loose">
                Our Advisors.
                <Divider orientation="horizontal" className="my-5 md:my-10" />
              </motion.h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-x-unit-3xl mx-auto">
              <div className="mx-auto">
                <ProfilePicture
                  imageUrl="/images/ashraf_affan.webp"
                  linkedinUrl="https://www.linkedin.com/in/draffan/"
                />
                <h1 className="font-semibold text-lg md:text-xl lg:text-2xl text-center">
                  Dr. Ashraf Affan
                </h1>
                <p className="font-semibold text-slate-400 text-sm md:text-base text-center">
                  Angel Kids Pediatrics
                  <br />I Nurse My Baby
                  <br />
                  Center for Medicare & Medicaid Services
                </p>
              </div>
              <div className="mx-auto">
                <ProfilePicture
                  imageUrl="/images/christine_davies.jpg"
                  linkedinUrl="https://www.linkedin.com/in/christine-davies20n/"
                />
                <h1 className="font-semibold text-center">Christine Davies</h1>
                <p className="font-semibold text-slate-400 text-center">
                  Angel Kids Pediatrics
                  <br />
                  Board Certified Lactation Consultant
                </p>
              </div>
              <div className="mx-auto">
                <ProfilePicture
                  imageUrl="/images/megan_gregg.jpg"
                  linkedinUrl="https://www.linkedin.com/in/businesswithmeg/"
                />
                <h1 className="font-semibold text-center">Megan Gregg</h1>
                <p className="font-semibold text-slate-400 text-center">
                  15+ years of experience building startups in SaaS, MarTech,
                  F&B, and E-commerce <br />
                  Founding Member of Women in Tech
                </p>
              </div>
              <div className="mx-auto">
                <ProfilePicture
                  imageUrl="/images/scott_kelly.jpeg"
                  linkedinUrl="https://www.linkedin.com/in/blackdogceo/"
                />
                <h1 className="font-semibold text-center">Scott Kelly</h1>
                <p className="font-semibold text-slate-400 text-center">
                  Black Dog Venture Partners
                </p>
              </div>
            </div>
          </section>
          <Divider orientation="horizontal" className="my-10" />
          <section className="mt-[20%]" id="contact">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 md:gap-x-8">
              <div className="text-center md:text-left py-2">
                <h1 className="font-thin text-4xl md:text-7xl">
                  Let us innovate tomorrow,{" "}
                  <span className="font-bold" data-end="you">
                    with&nbsp;
                  </span>
                  .
                </h1>
                <p className="py-5 font-light text-lg">
                  We&apos;re here to help. Whether you have general questions or
                  inquiries - we&apos;re here to provide information and answer
                  questions.
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
                      enableBackground="new 0 0 24 24"
                      xmlSpace="preserve"
                      className="fill-foreground"
                    >
                      <g id="stakeholder">
                        <path d="M18,1.9l-6,3V12l6,3l6-3V4.8L18,1.9z M20.7,5.5L18,6.8l-2.7-1.3L18,4.1L20.7,5.5z M14,7.1l3,1.5v3.7l-3-1.5V7.1z M19,12.2V8.5l3-1.5v3.7L19,12.2z" />
                        <path d="M8.9,13.8C9.6,13.1,10,12.1,10,11c0-2.2-1.8-4-4-4s-4,1.8-4,4c0,1.1,0.4,2.1,1.1,2.8C1.3,14.9,0,16.9,0,19.2V22h2.7h0.8H12v-2.8C12,16.8,10.7,14.8,8.9,13.8z M4,11c0-1.1,0.9-2,2-2s2,0.9,2,2c0,1.1-0.9,2-2,2S4,12.1,4,11z M10,20H3.5H2.7H2v-0.8C2,16.9,3.8,15,6,15c2.2,0,4,1.9,4,4.2V20z" />
                      </g>
                    </svg>
                    <div className="ml-4">
                      <h2 className="text-xl md:text-4xl font-bold">
                        Partnership Inquiries
                      </h2>
                      <p className="py-2 text-sm md:text-base">
                        Let&apos;s work and grow together. Click the link below
                        to fill out the forms and our partnership manager will
                        reach out to you.
                      </p>
                      <Button
                        as={Link}
                        href="/webforms/partnershipform"
                        color="success"
                        className="text-white font-semibold"
                        size="lg"
                      >
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
                      className="fill-foreground"
                    >
                      <g fill="none">
                        <g transform="translate(6 5)" className="fill-foreground">
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
                      <h2 className="text-xl md:text-4xl font-bold">
                        General Inquiries
                      </h2>
                      <p className="py-2 text-sm md:text-base">
                        Need more information? Have an inquiry for an issue?
                        We&apos;re here to help. Fill out our form and we will
                        get in touch.
                      </p>
                      <Button
                        as={Link}
                        href="/webforms/generalform"
                        color="success"
                        className="text-white font-semibold"
                        size="lg"
                      >
                        Contact Us
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-5 text-center md:text-left">
                <h1 className="font-bold text-2xl md:text-4xl border-b-2 border-foreground">
                  Recent News
                </h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 py-5">
                  {postPreviews}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
