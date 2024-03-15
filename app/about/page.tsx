import React from "react";
import { Divider, Button, Link, Image } from "@nextui-org/react";
import "./aboutpagestyles.css";
export default function About() {
  return (
    <>
      <div>
        <div>
          <h1 className="font-bold text-2xl md:text-4xl text-center">
            About <span className="text-amber-600">Parasol</span> Laboratories
          </h1>
          <Divider
            orientation="horizontal"
            className="w-1/2 bg-white mx-auto"
          />
        </div>
        <div>
        <section id="mission-statement" className="content grid grid-cols-1 md:grid-cols-2 gap-10 mt-12 bg-background">
      <div className="text-wrap text-left">
        <h1 className="font-bold text-3xl md:text-7xl">Our Mission Statement.</h1>
        <Divider className="my-5" />
        <p className="font-light text-xl md:text-3xl">
          Parasol Laboratories Incorporated is dedicated to pioneering transformative solutions that solve global health needs...
        </p>
        <div className="mt-5 flex justify-center md:justify-end">
          <Button className="bg-[#faa064]" as={Link} href="/projects">
            See our work
          </Button>
        </div>
      </div>
      <div className="mx-auto my-10 md:my-auto">
        <Image src="/images/logo.png" alt="Parasol Laboratories Logo" className="mx-auto" />
      </div>
    </section>
          <section
            id="operational-statement"
            className="content grid grid-cols-[30%_70%] gap-10 bg-slate-300 text-black box-shadow"
          >
            <div>
              <Image
                src="/images/leica.webp"
                alt="Image of a leica microscope."
                className="w-auto h-[100%] mx-auto top-0"
              />
            </div>
            <div>
              <h1 className="font-bold text-7xl text-left">
                Operational Statement.
              </h1>
              <Divider orientation="horizontal" className="my-5" />
              <div className="grid grid-rows-[80%_20%] gap-10 content-start">
                <div className="text-left">
                  <p className="font-light text-3xl ">
                    Every day at Parasol Laboratories Incorporated, we
                    operationalize our mission by engineering products with the
                    end user’s best interest in mind. Our pricing models allow
                    us to produce even more while giving back, ensuring that our
                    innovations reach those who need them most. We champion
                    environmental responsibility, sustainability, and neutrality
                    in all our processes.
                    <br />
                    <br />
                    Our team, our greatest asset, is nurtured in an environment
                    that values their well-being, rewards their expertise, and
                    encourages continuous growth. Together, we work towards
                    building a lasting legacy of positive change and
                    unparalleled impact, internally and externally.
                  </p>
                </div>
                <div className="justify-start inline-flex items-start w-4/5">
                  <Button
                    color="success"
                    radius="none"
                    size="lg"
                    className="my-auto w-1/3"
                    as={Link}
                    href="/team"
                  >
                      <div className="grid grid-columns-2 grid-flow-col gap-1 h-auto w-auto items-end">
                        <h1 className="font-bold text-2xl py-5 text-black">
                          Meet our team
                        </h1>
                        <svg id="right" className="arrow-right my-auto ">
                          <path
                            d="M0.5 9.35772H20.9956L14.2001 2.29941L16.4134 0L27 11L16.4134 22L14.2001 19.7006L20.9956 12.6423H0.5V9.35772Z"
                            fill="#000000"
                          ></path>
                        </svg>
                      </div>
                  </Button>
                </div>
              </div>
            </div>
          </section>
          <section className="content ">
            <h1 className="font-bold text-7xl leading-loose">
              The Future of healthcare, begins now.
            </h1>
            <div className="flex flex-row gap-5 justify-between">
              <div className="basis-1/2">
                <p className="font-light text-3xl text-left">
                  At Parasol Labs, we believe that our values are the
                  cornerstone of our identity. Driven by a commitment to
                  excellence, integrity, and innovation, we strive to transcend
                  the ordinary in everything we do. We&apos;re not just about
                  making promises; we&apos;re about embodying them in every
                  project, every breakthrough, and every interaction. Here, our
                  actions speak louder than words, reflecting our unwavering
                  dedication to impacting the world positively and paving the
                  way for a brighter, healthier future.
                </p>
                <div className="flex py-10">
                  <Button
                    radius="none"
                    size="lg"
                    className="my-auto  w-auto bg-[#656565]"
                    as={Link}
                    href="/webforms"
                  >
                      <div className="grid grid-columns-2 grid-flow-col gap-1 h-auto w-auto items-end">
                        <h1 className="font-bold text-2xl py-5">
                          Connect with us
                        </h1>
                        <svg id="right" className="arrow-right my-auto ">
                          <path
                            d="M0.5 9.35772H20.9956L14.2001 2.29941L16.4134 0L27 11L16.4134 22L14.2001 19.7006L20.9956 12.6423H0.5V9.35772Z"
                            fill="#ffffff"
                          ></path>
                        </svg>
                      </div>
                  </Button>
                </div>
              </div>
              <div className="basis-1/2">
                <Image
                  src="/images/msa_test 5log10 reduction.webp"
                  className="basis-1/2"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
