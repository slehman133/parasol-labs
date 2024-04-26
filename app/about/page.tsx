import React from "react";
import { Divider, Button, Link, Image } from "@nextui-org/react";
import "./aboutpagestyles.css";
export default function About() {
  return (
    <>
      <div className="container mx-auto">
        <div>
          <h1 className="mt-24 font-thin text-4xl md:text-7xl text-center text-transition-down">
            About <span className="text-amber-600 font-medium">Parasol</span>
          </h1>
        </div>
        <div className="mt-24">
          <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical slide-in-blurred-top w-1/2 mx-auto">
            <li >
              <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#74dfa2" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
              </div>
              <div className="timeline-start md:text-end mb-10 ">
                <time className="font-mono italic text-green-300">2023</time>
                <div className="text-lg font-black">JANUARY 16</div>
                Ahmed & Teagan started developing the concepts driving Parasol & refining the preliminary technology.
              </div>
              <hr/>
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#74dfa2" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
              </div>
              <div className="timeline-end mb-10">
                <time className="font-mono italic text-green-300">2023</time>
                <div className="text-lg font-black">APRIL 4</div>
                Parasol Labs&apos; Official Incorporation Date.
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#74dfa2" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
              </div>
              <div className="timeline-start md:text-end mb-10">
                <time className="font-mono italic text-green-300">2023</time>
                <div className="text-lg font-black">MAY 15</div>
                Ahmed & Teagan filed the provisional patent for our groundbreaking liquid sterilization technology.
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#74dfa2" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
              </div>
              <div className="timeline-end mb-10">
                <time className="font-mono italic text-green-300">2023</time>
                <div className="text-lg font-black">AUGUST 1</div>
                Finalized our bench testing prototype - the internals for our device - and built one for our initial laboratory phase.
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#74dfa2" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
              </div>
              <div className="timeline-start md:text-end mb-10">
                <time className="font-mono italic text-green-300">2023</time>
                <div className="text-lg font-black">AUGUST 7</div>
                Teagan began our initial laboratory testing phase, performing our in-house validation experiments.
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#74dfa2" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
              </div>
              <div className="timeline-end mb-10">
                <time className="font-mono italic text-green-300">2023</time>
                <div className="text-lg font-black">AUGUST 20</div>
                We received confirmation that our technology works - achieving a 5log10 reduction in bacteria, meeting the FDA&apos;s standard for significant pathogen reduction in certain food products - specifically, milk.
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#74dfa2" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
              </div>
              <div className="timeline-start md:text-end mb-10">
                <time className="font-mono italic text-green-300">2023</time>
                <div className="text-lg font-black">SEPTEMBER 7</div>
                Lab testing continues successfully - in Teagan&apos;s lab testing, we successfully inactivated an endospore, demonstrating STRL&apos;s viability for maintaining liquid sterility under aseptic conditions in medical-grade storage for up to 6-9 months.
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#74dfa2" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
              </div>
              <div className="timeline-end mb-10">
                <time className="font-mono italic text-green-300">2023</time>
                <div className="text-lg font-black">NOVEMBER 14</div>
                Launched a fundraising campaign on WeFunder in order to raise capital to finalize our commercial MVP and begin presales to consumers and medical institutions.
              </div>
            </li>
          </ul>
        </div>
        <div>
          <section id="mission-statement" className="content grid grid-cols-1 md:grid-cols-2 grid-rows-1 gap-4 md:gap-10 mt-12 relative bg-background ">
            <div className="w-full px-4 md:px-0 text-wrap text-left">
              <h1 className="font-thin text-4xl md:text-7xl">Our Mission.</h1>
              <Divider orientation="horizontal" className="my-5" />
              <div className="flex flex-col justify-between">
                <div>
                  <p className="font-light text-xl md:text-xl">
                    Parasol Laboratories Incorporated is dedicated to pioneering transformative solutions that solve global health needs, empower marginalized communities, and target underserved markets.
                    <br /><br />
                    Every product we design, every decision we make, is anchored in creating a tangible, positive impact, with no compromise. Our responsibility extends beyond profit, as we reinvest in our community, ensuring equitable care and quality of life are forever at the forefront of our endeavors.
                  </p>
                </div>
                <Button radius="none" size="lg" className="my-auto w-full bg-[#faa064] font-bold text-xl md:text-2xl py-5" as={Link} href="/projects">
                  See our work
                </Button>
              </div>
            </div>
            <div className="p-4 md:p-10 w-full md:w-2/3 h-auto mx-auto">
              <Image src="/images/logo.png" alt="Parasol Laboratories Logo" className="w-auto h-auto mx-auto top-0 md:block hidden" />
            </div>
          </section>
          <section id="operational-statement" className="content gap-4 md:gap-10 mt-12 relative bg-background ">
            <div className="px-4 md:px-0 text-wrap text-left md:w-1/2  mx-auto">
              <h1 className="font-thin text-4xl md:text-7xl">Operational Statement.</h1>
              <Divider orientation="horizontal" className="my-5" />
              <div className="flex flex-col justify-between">
                <div>
                  <p className="font-light text-xl md:text-xl">
                    Every day at Parasol Laboratories Incorporated, we operationalize our mission by engineering products with the end user’s best interest in mind. Our pricing models allow us to produce even more while giving back, ensuring that our innovations reach those who need them most. We champion environmental responsibility, sustainability, and neutrality in all our processes.
                    <br /><br />
                    Our team, our greatest asset, is nurtured in an environment that values their well-being, rewards their expertise, and encourages continuous growth. Together, we work towards building a lasting legacy of positive change and unparalleled impact, internally and externally.
                  </p>
                </div>
                <Button radius="none" size="lg" className="my-auto w-full bg-[#faa064] font-bold text-xl md:text-2xl py-5" as={Link} href="/team">
                  Meet our team
                </Button>
              </div>
            </div>
          </section>
          <section id="mission-statement" className="content grid grid-cols-1 md:grid-cols-2 grid-rows-1 gap-4 md:gap-10 mt-12 relative bg-background ">
            <div className="p-4 md:p-10 w-full h-auto mx-auto">
              <Image src="/images/msa_test 5log10 reduction.webp" alt="MSA Test Result" className="hidden lg:block w-auto h-full"/>
            </div>
            <div className="w-full px-4 md:px-0 text-wrap text-left">
              <h1 className="font-thin text-4xl md:text-7xl">The Future of healthcare, begins now.</h1>
              <Divider orientation="horizontal" className="my-5" />
              <div className="flex flex-col justify-between">
                <div>
                  <p className="font-light text-xl md:text-xl">
                  At Parasol Labs, we believe that our values are the cornerstone of our identity. Driven by a commitment to excellence, integrity, and innovation, we strive to transcend the ordinary in everything we do. We&apos;re not just about making promises; we&apos;re about embodying them in every project, every breakthrough, and every interaction. Here, our actions speak louder than words, reflecting our unwavering dedication to impacting the world positively and paving the way for a brighter, healthier future.
                  </p>
                </div>
                <Button radius="none" size="lg" className="my-auto w-full bg-[#faa064] font-bold text-xl md:text-2xl py-5" as={Link} href="/webforms">
                  Connect with us.
                </Button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
