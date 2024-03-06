import { Link, Image } from '@nextui-org/react'
import React from 'react'
import "./webformpagestyles.css"

export default function page() {
    return (
        <div className='m-[1%_5%_1%_5%] p-14 grid grid-cols-2 gap-5'>
            <div className='grid grid-flow-row gap-5 content-start'>
                <h1 className='text-4xl font-bold my-auto pb-2'>Contact us at Parasol Laboratories.</h1>
                <p className='font-medium'>Whether you're interested in working with us, or have a general inquiry. We're here to provide.
                    <br />
                    <br />
                    Please select the form you feel appropriate for your needs and we will get back to you as soon as possible.</p>
                <div className='my-auto py-2 border-1 border-white text-left '>
                    <h1 className='font-bold text-4xl'>Become a Partner</h1>
                    <p>Let's work together. We'd love to collaborate with your company to build a better tomorrow.</p>
                    <Link
                        className="text-2xl font-bold w-fit"
                        href="/webforms/partnershipform"
                        underline="always"
                        color="foreground"
                    >
                        Partnership Form
                        <svg id="right" className="arrow-right my-auto px-2 ">
                            <path
                                d="M0.5 9.35772H20.9956L14.2001 2.29941L16.4134 0L27 11L16.4134 22L14.2001 19.7006L20.9956 12.6423H0.5V9.35772Z"
                                fill="#ffffff"
                            ></path>
                        </svg>
                    </Link>
                </div>
                <div className='my-auto  py-10 border-1 border-white text-left '>
                    <h1 className='font-bold text-4xl'>Got an inquiry?</h1>
                    <p></p>
                    <Link
                        className="text-2xl font-bold w-fit"
                        href="/webforms/generalform"
                        underline="always"
                        color="foreground"
                    >
                        General Form
                        <svg id="right" className="arrow-right my-auto px-2 ">
                            <path
                                d="M0.5 9.35772H20.9956L14.2001 2.29941L16.4134 0L27 11L16.4134 22L14.2001 19.7006L20.9956 12.6423H0.5V9.35772Z"
                                fill="#ffffff"
                            ></path>
                        </svg>
                    </Link>
                </div>
            </div>
            <div className='px-10 w-2/3 h-auto mx-auto'>
                <Image
                    src="/images/logo.png"
                    alt='Parasol Laboratories Logo'
                    className='w-auto h-auto mx-auto top-0'
                />
            </div>
        </div>
    )
}
