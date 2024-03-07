import { Link, Image, Divider, Button } from '@nextui-org/react'

import React from 'react'

export default function page() {
    return (
        <div className='m-[0%_15%_2%_15%] px-14 grid grid-cols-2 gap-5'>
            <div className='grid grid-flow-row gap-5 content-start leading-loose'>
                <h1 className='text-4xl font-bold my-auto pb-2'>
                    Contact us at,
                    <br />
                    <span className='text-[#61E0B0]'>
                        Parasol Laboratories
                    </span>.
                </h1>
                <Divider orientation="horizontal" className='bg-white' />
                <p className='font-medium'>Whether you&apos;re interested in working with us, or have a general inquiry. We&apos;re here to provide.
                    <br />
                    <br />
                    Please select the form you feel appropriate for your needs and we will get back to you as soon as possible.</p>
                <div className='my-auto p-2 border-1 border-white text-left leading-loose'>
                    <h1 className='font-bold text-3xl'>Become a <span className='text-[#9B59B6]'>Partner</span></h1>
                    <p>Let&apos;s work together. We&apos;d love to collaborate with your company to build a better tomorrow.</p>
                    <div className='flex items-end'>
                        <Button className='ml-auto bg-[#9B59B6] w-[50%]' radius='none' as={Link} href='/webforms/partnershipform'>
                            <div className='flex items-start'>
                                <h5 className='text-lg font-bold'>Partnership Form</h5>
                                <svg id="right" className="arrow-right my-auto px-2 ">
                                    <path
                                        d="M0.5 9.35772H20.9956L14.2001 2.29941L16.4134 0L27 11L16.4134 22L14.2001 19.7006L20.9956 12.6423H0.5V9.35772Z"
                                        fill="#ffffff"
                                    ></path>
                                </svg>
                            </div>
                        </Button>
                    </div>
                </div>
                <div className='my-auto p-2 border-1 border-white text-left leading-loose '>
                    <h1 className='font-bold text-3xl'>Got an <span className='text-[#FBB17E]'>inquiry?</span></h1>
                    <p>From a specific request, to a general inquiry, we&apos;re here to help. Fill out our general form and we will get in touch.</p>
                    <div className='flex items-end'>
                        <Button className='ml-auto bg-[#FBB17E] w-[50%]' href='/webforms/generalform' as={Link} radius='none'>
                            <div className='flex items-start'>
                                <h5 className='text-lg font-bold'>General Form</h5>
                                <svg id="right" className="arrow-right my-auto px-2 ">
                                    <path
                                        d="M0.5 9.35772H20.9956L14.2001 2.29941L16.4134 0L27 11L16.4134 22L14.2001 19.7006L20.9956 12.6423H0.5V9.35772Z"
                                        fill="#ffffff"
                                    ></path>
                                </svg>
                            </div>
                        </Button>
                    </div>
                </div>
            </div >
            <div className='px-10 w-2/3 h-auto mx-auto my-auto'>
                <Image
                    src="/images/logo.png"
                    alt='Parasol Laboratories Logo'
                    className='w-auto h-auto top-0'
                />
            </div>
        </div >
    )
}
