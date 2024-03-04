import './generalformstyles.css'
import SendEmailForm from '@/app/components/webforms/emailform'
import React from 'react'

export default function page() {
  return (
    <div className='h-auto w-full p-10'>
      <div className='border-white border-1 p-10 h-2/3 w-3/4 mx-auto my-auto grid grid-cols-2 grid-row-[50vh] gap-5 rounded-md'>
        <div className='mx-auto text-left'>
          <h3 className='font-bold text-3xl'>Let&apos;s get in touch!</h3>
          <p className='font-thin w-2/3'>We&apos;re here to help. Get the conversation started by filling out the form and we will get back to you as soon as possible</p>
          <img src='/images/logo.png' alt='Parasol Laboratories Logo' className='h-auto w-1/3 mx-auto pt-12' />
        </div>
        <div className='h-[50vh] scroll-container'>
          <SendEmailForm />
        </div>
      </div>
    </div>
  )
}
