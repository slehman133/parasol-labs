"use client";
import React, { useState } from 'react';
import { SendEmail } from '@/app/api/email/contact';
import { Input, Textarea, Button, Checkbox, CheckboxGroup, Divider } from '@nextui-org/react';
import "./partnershipformstyles.css";
export default function PartnershipFormPage() {
  const [selected, setSelected] = useState(['']);
  const [sending, setSending] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');

  const handleSendEmail = async () => {
    setSending(true);
    try {
      //TODO: Database logic to check that it was succesfully created in database
      setMessage('Email sent successfully!');
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
          <h3 className='font-bold text-3xl'>Let's build a better tomorrow.</h3>
          <p className='font-thin w-2/3'>We want to grow with our community. Fill out the form and our partnership manager will reach out as soon as possible.</p>
          <img src='/images/logo.png' alt='Parasol Laboratories Logo' className='h-auto w-1/3 mx-auto pt-12'/>
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
            />
            <Input
              label='Company Webpage'
              labelPlacement='outside'
              variant='bordered'
              fullWidth
              radius='none'
              size="lg"
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
          />
          <Input
            variant='bordered'
            fullWidth
            radius='none'
            size="lg"
            placeholder="Street Address Line 2"
            className='py-2'
          />
          <div className='grid grid-cols-2 grid-gap-4 gap-4 py-5'>
            <Input
              variant='bordered'
              fullWidth
              radius='none'
              size="lg"
              placeholder="City"
              isRequired
            />
            <Input
              variant='bordered'
              fullWidth
              radius='none'
              size="lg"
              placeholder="State / Province"
              isRequired
            />
          </div>
          <Input
            variant='bordered'
            fullWidth
            radius='none'
            size="lg"
            placeholder="Postal / Zip Code"
            isRequired
          />
          <h1 className='py-4 font-bold'>Services you're interested in (can select multiple)</h1>
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
          />
          <h1 className='font-bold pt-4'>Point of Contact - Partnership</h1>
          <Input
            label='Contact Name'
            labelPlacement='outside'
            variant='bordered'
            size='lg'
            radius='none'

          />
          <Input
            label='Phone Number'
            labelPlacement='outside'
            variant='bordered'
            size='lg'
            radius='none'

          />
          <Input
            label='Email Address'
            labelPlacement='outside'
            variant='bordered'
            size='lg'
            radius='none'

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
