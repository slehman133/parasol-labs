import React from "react";
import { Divider, Button, Link, Image } from "@nextui-org/react";
import "./aboutpagestyles.css";

//TODO: fix the buttons
export default function About() {
  return (
    <>
      <div>
        <div>
          <h1 className=" font-bold text-4xl text-center ">
            About <span className="text-amber-600">Parasol</span> Laboratories
          </h1>
          <Divider
            orientation="horizontal"
            className="w-1/2 bg-white mx-auto"
          />
        </div>
        <div>
          <section id="mission-statement" className="content grid grid-cols-1 md:grid-cols-2 grid-rows-1 gap-4 md:gap-10 mt-12 relative bg-background ">
            <div className="w-full px-4 md:px-0 text-wrap text-left">
              <h1 className="font-bold text-4xl md:text-7xl">Our Mission Statement.</h1>
              <Divider orientation="horizontal" className="my-5" />
              <div className="grid grid-rows-[80%_20%] gap-5">
                <div>
                  <p className="font-light text-xl md:text-3xl">
                    Parasol Laboratories Incorporated is dedicated to pioneering transformative solutions that solve global health needs, empower marginalized communities, and target underserved markets.
                    <br /><br />
                    Every product we design, every decision we make, is anchored in creating a tangible, positive impact, with no compromise. Our responsibility extends beyond profit, as we reinvest in our community, ensuring equitable care and quality of life are forever at the forefront of our endeavors.
                  </p>
                </div>
                <div className="justify-end inline-flex items-end">
                  <Button radius="none" size="lg" className="my-auto w-full bg-[#faa064] font-bold text-xl md:text-2xl py-5" as={Link} href="/projects">
                    See our work
                  </Button>
                </div>
              </div>
            </div>
            <div className="p-4 md:p-10 w-full md:w-2/3 h-auto mx-auto">
              <Image src="/images/logo.png" alt="Parasol Laboratories Logo" className="w-auto h-auto mx-auto top-0 md:block hidden" />
            </div>
          </section>
          <section
            id="operational-statement"
            className="content grid grid-cols-1 md:grid-cols-[30%_70%] gap-4 md:gap-10 bg-slate-300 text-black box-shadow p-4 md:p-10"
          >
            <div>
              <Image
                src="/images/leica.webp"
                alt="Image of a leica microscope."
                className="w-auto h-full mx-auto"
              />
            </div>
            <div>
              <h1 className="font-bold text-4xl md:text-7xl text-left">
                Operational Statement.
              </h1>
              <Divider orientation="horizontal" className="my-5" />
              <div className="grid grid-rows-[auto_auto] md:grid-rows-[80%_20%] gap-5 md:gap-10 content-start">
                <div className="text-left">
                  <p className="font-light text-xl md:text-3xl">
                    Every day at Parasol Laboratories Incorporated, we operationalize our mission by engineering products with the end user’s best interest in mind. Our pricing models allow us to produce even more while giving back, ensuring that our innovations reach those who need them most. We champion environmental responsibility, sustainability, and neutrality in all our processes.
                    <br /><br />
                    Our team, our greatest asset, is nurtured in an environment that values their well-being, rewards their expertise, and encourages continuous growth. Together, we work towards building a lasting legacy of positive change and unparalleled impact, internally and externally.
                  </p>
                </div>
                <div className="justify-start inline-flex items-start w-full md:w-4/5">
                  <Button
                    color="success"
                    radius="none"
                    size="lg"
                    className="my-auto w-full md:w-1/3 mx-auto text-xl md:text-2xl py-5"
                    as={Link}
                    href="/team"
                  >
                    Meet our team
                  </Button>
                </div>
              </div>
            </div>
          </section>
          <section className="content">
            <div className="flex flex-col-reverse md:flex-row gap-5 justify-between">
              <div className="md:basis-1/2 order-2 md:order-1">
                <h1 className="font-bold text-4xl md:text-7xl leading-loose mt-5 md:mt-0">
                  The Future of healthcare, begins now.
                </h1>
                <p className="font-light text-xl md:text-3xl text-left">
                  At Parasol Labs, we believe that our values are the cornerstone of our identity. Driven by a commitment to excellence, integrity, and innovation, we strive to transcend the ordinary in everything we do. We're not just about making promises; we're about embodying them in every project, every breakthrough, and every interaction. Here, our actions speak louder than words, reflecting our unwavering dedication to impacting the world positively and paving the way for a brighter, healthier future.
                </p>
                <div className="justify-start inline-flex items-start w-full md:w-4/5">
                  <Button
                    color="success"
                    radius="none"
                    size="lg"
                    className="my-auto w-full md:w-1/3 mx-auto text-xl md:text-2xl py-5 mt-10"
                    as={Link}
                    href="/webforms"
                  >
                    Connect with us.
                  </Button>
                </div>
              </div>
              <div className="md:basis-1/2 order-1 md:order-2">
                <Image src="/images/msa_test 5log10 reduction.webp" width={500} height={500} alt="MSA Test Result" className="hidden md:block" />
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
