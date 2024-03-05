import React from 'react';
import { Divider, Button, Link, Image } from '@nextui-org/react';
import "./aboutpagestyles.css";

export default function About() {
  return (
    <>
      <div>
        <section className='content grid grid-cols-2 grid-rows-1 gap-10 '>
          <div className='w-full text-wrap text-left'>
            <h1 className='font-bold text-6xl'>Our Mission Statement.</h1>
            <Divider orientation='horizontal' className='my-5' />
            <div className='grid grid-rows-2 gap-5'>
              <div>
                <p className='font-thin text-2xl'>Parasol Laboratories Incorporated is dedicated to pioneering transformative solutions that solve global health needs, empower marginalized communities, and target underserved markets.
                  <br />
                  <br />
                  Every product we design, every decision we make, is anchored in creating a tangible, positive impact, with no compromise. Our responsibility extends beyond profit, as we reinvest in our community, ensuring equitable care and quality of life are forever at the forefront of our endeavors.
                </p>
              </div>
              <div className=' justify-end inline-flex items-end h-1/6'>
                <Link href="/about" color="foreground">
                  <div className="grid grid-columns-2 grid-flow-col gap-4">
                    <h1 className="font-bold text-2xl py-5">About us</h1>
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
          </div>
          <div className='p-10 w-2/3 h-auto mx-auto'>
            <div className='styled-box'>
              <Image
                src="/images/logo.png"
                alt='Parasol Laboratories Logo'
                className='w-2/3 h-auto mx-auto top-0'
              />
            </div>
          </div>
        </section>
        <section className='content grid grid-cols-[20%_80%] grid-rows-1 gap-10 bg-slate-300 text-black'>
          <div className='p-10 w-2/3 h-auto mx-auto'>
            <div className='styled-box'>
              <Image
                src="/images/logo.png"
                alt='Parasol Laboratories Logo'
                className='w-2/3 h-auto mx-auto top-0'
              />
            </div>
          </div>
          <div>
            <h1 className='font-bold text-6xl'>
              Operational Statement.
            </h1>
            <p>
              Every day at Parasol Laboratories Incorporated, we operationalize our mission by engineering products with the end user’s best interest in mind. Our pricing models allow us to produce even more while giving back, ensuring that our innovations reach those who need them most. We champion environmental responsibility, sustainability, and neutrality in all our processes.

              Our team, our greatest asset, is nurtured in an environment that values their well-being, rewards their expertise, and encourages continuous growth. Together, we work towards building a lasting legacy of positive change and unparalleled impact, internally and externally.
            </p>

          </div>

        </section>
      </div>
    </>
  );
}