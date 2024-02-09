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
          {/* <section className="content min-h-screen">
            <div className="row">
              <div className="column">
                <div className="h-50 w-20 bg-blue-300">

                </div>
              </div>
              <div className="relative text-center justify-center">
                <div className="">
                  <h1 className="text-5xl ">SOLVING HUMANITY'S BIGGEST PROBLEMS, BY ANY MEANS NECESSARY.</h1>
                  <Divider orientation="horizontal" className="mt-5" />
                </div>

                <div className="p-4 justify-evenly">
                  <p className="text-2xl mt-5">
                    Parasol Labs is committed to transparency through and through.
                    From our laboratory tests to the historical research that drives
                    our passions, we're dedicated to sharing our knowledge and
                    supporting a healthier, more informed, future.

                    Click below to learn more about the data behind our tech and our mission.
                  </p>
                  <div className="flex flex-center justify-between p-5 w-1/2">
                    <Button
                      href="/research"
                      as={Link}
                      color="default"
                      size="md"
                      variant="light"
                      className="borderedBottom "
                    >Our Company</Button>
                    <Button
                      href="/about"
                      as={Link}
                      color="default"
                      size="md"
                      variant="light"
                      className="borderedBottom"
                    >Our Research</Button>
                    <Button
                      href="/products"
                      as={Link}
                      color="default"
                      size="md"
                      variant="light"
                      className="borderedBottom"
                    >STRL</Button>
                  </div>
                  <section className="border-t-white">
                    <img className="fullImage" src="/images/strl.jpg" />
                  </section>
                  <div className="backgroundMainReversal h-48 border-t-gray ">
                    <section className="content border-b-2 "></section>
                  </div>
                  <div className="border-t-gray border-2 bg-white">
                    <section className="border-t-gray-500">
                      <div className="">
                        <div className="">
                          <h1 className="ml-5 text-4xl font-bold text-black">
                            Contact &{" "}
                            <span className="first-letter:text-orange">Support</span>
                          </h1>
                          <p className="ml-5 text-xl text-black text-left">
                            <br />
                            Whether you have general questions or inquiries - we`re here
                            to provide information and answer questions.
                          </p>
                          <div className="content grid grid-cols-3 gap-12 content-center">
                            <div className="border-2 border-gray-500 rounded-md text-left">
                              <div className="grid lg:grid-cols-2 gap-12 place-content-between">
                                <p className="font-bold text-black text-3xl truncate ...">
                                  Get <br />Support
                                </p>
                                <div className="bg-orange-400 resizeableDiv mx-auto relative"></div>
                              </div>
                              <p className="text-gray-500 break-words">
                                <br />
                                Need a hand? Fill out the form or use the self-serve in
                                our Help Center.
                              </p>
                            </div>
                            <div className="border-2 border-gray-500 rounded-md text-left ">
                              <div className="grid lg:grid-cols-2 gap-12 place-content-between ">
                                <p className="font-bold text-black text-3xl truncate ...">
                                  Partnership
                                  <br />Inquiries
                                </p>
                                <div className="bg-purple-400 resizeableDiv mx-auto relative"></div>
                              </div>
                              <p className="text-gray-500 break-words">
                                <br />
                                Lets work and grow together. Fill out the forms and our
                                partnership manager will reach out to you.
                              </p>
                            </div>
                            <div className="border-2 border-gray-500 rounded-md text-left">
                              <div className="grid lg:grid-cols-2 gap-12 place-content-between">
                                <p className="font-bold text-black text-3xl truncate ... ">
                                  General
                                  <br />
                                  Inquiries
                                </p>
                                <div className="bg-green-200 resizeableDiv mx-auto"></div>
                              </div>
                              <p className="text-gray-500 break-words ">
                                <br />
                                Need more information? Have an inquiry for an issue? We`re
                                here to help. Fill out our form and we will get in touch.
                              </p>
                            </div>

                          </div>
                        </div>
                      </div>
                    </section>
                    <section className="backgroundGradient min-h-screen">
                      <div className="row">
                        <div className="column">

                        </div>
                      </div>
                    </section> */}
          {/* <section className="relative text-white text-center">
                      <img src="/images/strl.jpg" className="fullImage" alt="" />
                      <div className="absolute left-16 top-10">
                        <h1 className="text-9xl font-bold">STRL</h1>
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
                          </Button>
                        </Link>
                      </div>
                    </section>
                    <section className="m-2 ml-48 mt-24 mr-48 min-h-screen">
                      <div className="row">
                        <div className="column">
                          <div className="p-5">
                            <h1 className="text-9xl text-left">Contact Us</h1>
                            <Divider orientation="horizontal" />
                          </div>
                          <p className="text-2xl text-left ml-5">
                            Whether you have general questions or inquiries - we&apos;re
                            here to provide information and answer questions.
                          </p>
                          <div className="flex w-max flex-wrap gap-4 p-10">
                            <Input type="email" label="Email" variant="underlined" />
                            <Input type="subject" label="Subject" variant="underlined" />
                            <Textarea
                              variant="underlined"
                              label="Message"
                              labelPlacement="outside"
                              placeholder="Enter your message"
                              size="lg"
                            />
                          </div>
                        </div>
                        <div className="column mt-56">
                          <p>
                            Tell us about your vision.
                            <br />
                            What challenges are you facing? What are your expectations?
                            What do you want to know?
                            <br />
                            <br />
                            We are here to help. Fill out the form, submit, and we will
                            reach out.
                          </p>

                        </div>
                      </div>
                    </section> */}
        </div>
      </div>
    </main>
  );
}
