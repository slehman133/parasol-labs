"use client";
import React, { useState } from 'react';
import prisma from '@/utils/db';
import { SendEmail } from '@/app/api/email/contact';
import { Input, Textarea, Button, Checkbox, CheckboxGroup, Divider, Image } from '@nextui-org/react';
import "./partnershipformstyles.css";
export default function PartnershipFormPage() {
  const [selected, setSelected] = useState(['']);
  const [formData, setFormData] = useState({
    companyName: "",
    companyWebpage: "",
    streetAddress: "",
    streetAddress2: "",
    city: "",
    stateOrProvince: "",
    postalCode: "",
    services: [],
    additionalInfo: "",
    contactName: "",
    phoneNumber: "",
    emailAddress: "",
  })
  const [sending, setSending] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');


  const handleSendEmail = async () => {
    setSending(true);
    try {
      setMessage('Email sent successfully!');
      await prisma.partnershipForm.create({
        data: {
          companyName: formData.companyName,
          companyWebpage: formData.companyWebpage,
          streetAddress: formData.streetAddress,
          streetAddress2: formData.streetAddress2,
          city: formData.city,
          stateOrProvince: formData.stateOrProvince,
          postalCode: formData.postalCode,
          services: formData.services,
          additionalInfo: formData.additionalInfo,
          contactName: formData.contactName,
          phoneNumber: formData.phoneNumber,
          emailAddress: formData.emailAddress,
        },
      })
    } catch (error) {
      setMessage('Failed to send email. Please check the console for more details.');
      console.error(error);
    } finally {
      setSending(false);
    }
  };
  return (
    <div className='h-auto w-full p-10'>
      <div className='border-1 border-white p-10 h-2/3 w-3/4 mx-auto my-auto grid grid-cols-2 grid-row-[50vh] gap-5 rounded-md'>
        <div className='mx-auto text-left'>
          <h3 className='font-bold text-3xl'>Let&apos;s build a better tomorrow.</h3>
          <p className='font-thin w-2/3'>We want to grow with our community. Fill out the form and our partnership manager will reach out as soon as possible.</p>
          <Image src='/images/logo.png' alt='Parasol Laboratories Logo' className='h-auto w-1/3 mx-auto pt-12'/>
        </div>
        <div className='h-[50vh] scroll-container'>
          <h1 className='text-center font-bold text-2xl border-b-1 border-white'>Partnership Form</h1>
          <div className='py-5 grid grid-cols-2 gap-4'>
            <Input
              label="Company Name"
              labelPlacement='outside'
              variant='bordered'
              fullWidth
              radius='none'
              size="lg"
              isRequired
              value={formData.companyName}
              onChange={(e) => setFormData({...formData, companyName: e.target.value})}
            />
            <Input
              label='Company Webpage'
              labelPlacement='outside'
              variant='bordered'
              fullWidth
              radius='none'
              size="lg"
              value={formData.companyWebpage}
              onChange={(e) => setFormData({...formData, companyWebpage: e.target.value})}
            />
          </div>
          <h1 className='font-bold'>Company Address</h1>
          <Input
            variant='bordered'
            fullWidth
            radius='none'
            size="lg"
            placeholder="Street Address"
            isRequired
            className='py-2'
            value={formData.streetAddress}
            onChange={(e) => setFormData({...formData, streetAddress: e.target.value})}
          />
          <Input
            variant='bordered'
            fullWidth
            radius='none'
            size="lg"
            placeholder="Street Address Line 2"
            className='py-2'
            value={formData.streetAddress2}
            onChange={(e) => setFormData({...formData, streetAddress2: e.target.value})}
          />
          <div className='grid grid-cols-2 grid-gap-4 gap-4 py-5'>
            <Input
              variant='bordered'
              fullWidth
              radius='none'
              size="lg"
              placeholder="City"
              isRequired
              value={formData.city}
              onChange={(e) => setFormData({...formData, city: e.target.value})}
            />
            <Input
              variant='bordered'
              fullWidth
              radius='none'
              size="lg"
              placeholder="State / Province"
              isRequired
              value={formData.stateOrProvince}
              onChange={(e) => setFormData({...formData, stateOrProvince: e.target.value})}
            />
          </div>
          <Input
            variant='bordered'
            fullWidth
            radius='none'
            size="lg"
            placeholder="Postal / Zip Code"
            isRequired
            value={formData.postalCode}
            onChange={(e) => setFormData({...formData, postalCode: e.target.value})}
          />
          <h1 className='py-4 font-bold'>Services you&apos;re interested in (can select multiple)</h1>
          <CheckboxGroup
            value={selected}
            onValueChange={setSelected}
            color='warning'
            className='p-2'
          >
            <Checkbox value='Website Optimization'>
              Website Optimization
            </Checkbox>
            <Checkbox value='Social Media'>
              Social Media
            </Checkbox>
            <Checkbox value='Media Advertisement'>
              Media Advertisement
            </Checkbox>
            <Checkbox value='Marketing'>
              Email/Mobile Marketing
            </Checkbox>
            <Checkbox value='Workshop'>
              Trade show/Workshop
            </Checkbox>
            <Checkbox value='SEO'>
              Paid Search / SEO
            </Checkbox>
            <Checkbox value='Other'>
              Other
            </Checkbox>
          </CheckboxGroup>
          <h1 className='py-4 font-bold'>Additional information</h1>
          <Textarea
            variant='bordered'
            fullWidth
            color="primary"
            size="lg"
            radius='none'
            placeholder="Type here..."
            value={formData.additionalInfo}
            onChange={(e) => setFormData({...formData, additionalInfo: e.target.value})}
          />
          <h1 className='font-bold pt-4'>Point of Contact - Partnership</h1>
          <Input
            label='Contact Name'
            labelPlacement='outside'
            variant='bordered'
            size='lg'
            radius='none'
            value={formData.contactName}
            onChange={(e) => setFormData({...formData, contactName: e.target.value})}
          />
          <Input
            label='Phone Number'
            labelPlacement='outside'
            variant='bordered'
            size='lg'
            radius='none'
            value={formData.phoneNumber}
            onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})}
          />
          <Input
            label='Email Address'
            labelPlacement='outside'
            variant='bordered'
            size='lg'
            radius='none'
            value={formData.emailAddress}
            onChange={(e) => setFormData({...formData, emailAddress: e.target.value})}
          />
          <div className='pt-5 w-full mx-auto grid grid-cols-2 gap-4'>
            <Button
              disabled={sending}
              onClick={handleSendEmail}
            >
              Submit
            </Button>
            <p className='py-2 mx-auto'>{message}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
