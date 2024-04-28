import './generalformstyles.css'
import SendEmailForm from '@/app/components/webforms/emailform'
import { Image } from '@nextui-org/react'
import React from 'react'

export default function GeneralFormPage() {
  return (
    <div className='w-full p-4 md:p-10 container mx-auto'>
      <div className='border shadow-lg p-4 md:p-10 mx-auto my-4 md:my-auto rounded-md lg:grid lg:grid-cols-2 gap-5'>
        <div className='text-center md:text-left'>
          <h3 className='font-bold text-2xl md:text-3xl'>Let&apos;s get in touch!</h3>
          <p className='font-light mt-2 md:w-2/3 '>We&apos;re here to help. Get the conversation started by filling out the form and we will get back to you as soon as possible.</p>
          <Image src='/images/logo.png' alt='Parasol Laboratories Logo' className='h-auto w-2/3 md:w-1/3 mx-auto pt-4 md:pt-12' />
        </div>
        <div className='mt-6 md:mt-0'>
          <SendEmailForm />
        </div>
      </div>
    </div>
  )
}
