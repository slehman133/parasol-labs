import React from "react";
import { Button, Divider, Image, Link } from "@nextui-org/react";
import "./strlstyles.css";

export default function page() {
  return (
    <>
      <div className="leftSection">
        <div className="boxed p-4">
          <h1 className="text-9xl">Our Projects</h1>
        </div>
          <p className="my-10 pl-4 w-2/3 font-medium text-lg text-left">
            At Parasol Laboratories, our projects embody our commitment to pioneering healthcare innovation. Each endeavor is a reflection of our dedication to transforming biotechnology with a focus on practical, impactful solutions.
          </p>
      </div>
      <div className="rightSection "> 
        <div className="relative" id='strlproject'>
          <div className="strlboxed w-fit p-5 h-inherit absolute z-10">
            <h1 className='font-bold text-7xl'>
              STRL
            </h1>
          </div>
          <Image 
            src='/images/strl.jpg'
            alt="STRL image"
            className="z-0 mt-10 pt-5 ml-5 w-5/6"
            radius="none"
          />
          <p className="leading-normal ml-5 text-light mt-5 w-5/6">
            Introducing STRL, Parasol Laboratories&apos;   inaugural product, specifically engineered for breastmilk preservation. As our first major venture into healthcare innovation, STRL symbolizes our commitment to enhancing maternal and infant health. This compact, countertop device, designed to fit seamlessly into any home, brings a revolutionary approach to extending the shelf life of breastmilk, while preserving its essential nutrients and immunological benefits.
            <br/>
            <br/>
            STRL is not just a product; it&apos;s a manifestation of our vision to provide practical, impactful solutions in healthcare. The concept render below offers a glimpse into the sophisticated design and functionality of STRL, reflecting our dedication to improving the breastfeeding journey for mothers globally.
            <br/>
            <br/>
            As our flagship project, STRL paves the way for future innovations and transforming global health.
          </p>
          <div className="flex items-end w-5/6">
            <Button radius='none'as={Link} href="/products" className="strlboxed ml-auto">Shop STRL</Button>
          </div>

        </div>
        <Divider orientation="horizontal" className="my-2"/>
      </div>
    </>
  );
}
