import { Link, Image, Divider, Button } from '@nextui-org/react'

import React from 'react'

export default function page() {
    return (
        <div className='mx-auto px-4 sm:px-8 lg:px-14 py-8 grid grid-cols-1 lg:grid-cols-2 gap-5'>
            <div className='space-y-5'>
                <h1 className='text-2xl lg:text-4xl font-bold'>
      Contact us at,
      <br />
      <span className='text-[#61E0B0]'>
        Parasol Laboratories
      </span>.
    </h1>
    <Divider orientation="horizontal" className='bg-white' />
    <p className='font-medium'>
      Whether you're interested in working with us, or have a general inquiry. We're here to provide.
      <br />
      <br />
      Please select the form you feel appropriate for your needs and we will get back to you as soon as possible.
    </p>
    <div className='p-2 border border-white text-left'>
      <h1 className='font-bold text-xl lg:text-3xl'>Become a <span className='text-[#9B59B6]'>Partner</span></h1>
      <p>Let's work together. We'd love to collaborate with your company to build a better tomorrow.</p>
      <div className='mt-4'>
        <a href='/webforms/partnershipform' className='inline-block bg-[#9B59B6] w-full sm:w-auto px-4 py-2 text-white font-bold rounded'>
          Partnership Form
        </a>
      </div>
    </div>
    <div className='p-2 border border-white text-left'>
      <h1 className='font-bold text-xl lg:text-3xl'>Got an <span className='text-[#FBB17E]'>inquiry?</span></h1>
      <p>From a specific request, to a general inquiry, we're here to help. Fill out our general form and we will get in touch.</p>
      <div className='mt-4'>
        <a href='/webforms/generalform' className='inline-block bg-[#FBB17E] w-full sm:w-auto px-4 py-2 text-white font-bold rounded'>
          General Form
        </a>
      </div>
    </div>
  </div>
  <div className='hidden md:block px-10 w-2/3 mx-auto my-auto'>
    <img
        src="/images/logo.png"
        alt='Parasol Laboratories Logo'
        className=' w-2/3 h-auto m-auto '
    />
  </div>
</div>

    )
}
