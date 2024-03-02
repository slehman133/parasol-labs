"use client";
import React, { useState } from 'react';
import { Button, Input, Textarea } from '@nextui-org/react';
import { sendEmail } from '../../api/email/contact'; // Adjust the path as necessary

//Try to remove useState in the functional component.
//Find an alternative, dont really need to access states of this for anything.
const SendEmailForm: React.FC = () => {
  const [from, setFrom] = useState<string>('');
  const [to, setTo] = useState<string>('');
  const [subject, setSubject] = useState<string>('');
  const [html, setHtml] = useState<string>('');
  const [sending, setSending] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');

  const handleSendEmail = async () => {
    setSending(true);
    try {
      await sendEmail({ from, subject, html });
      setMessage('Email sent successfully!');
    } catch (error) {
      setMessage('Failed to send email. Please check the console for more details.');
      console.error(error);
    } finally {
      setSending(false);
    }
  };

  return (
    <div className='p-10'>
      <div className='grid grid-cols-2 gap-5'>
        <Input
          variant='bordered'
          fullWidth
          radius='none'
          size='lg'
          label='First Name'
          labelPlacement='outside'
        />
        <Input
          variant='bordered'
          fullWidth
          radius='none'
          size='lg'
          label='Last Name'
          labelPlacement='outside'
        />
      </div>
      <Input
        variant='bordered'
        fullWidth
        radius='none'
        size="lg"
        placeholder="From: name@example.com"
        value={from}
        onChange={(e) => setFrom(e.target.value)}
        className='py-4'
      />
      <Textarea
        variant='bordered'
        fullWidth
        radius='none'
        size="lg"
        placeholder="Your message."
        value={html}
        onChange={(e) => setHtml(e.target.value)}
        className='py-4'
      />
      <div className='grid grid-cols-2 gap-5 py-4'>
        <Button
          radius='none'
          disabled={sending}
          className=''
          onClick={handleSendEmail}
        >
          Send Email
        </Button>
        <p className='my-auto '>{message}</p>
      </div>
    </div>
  );
};

export default SendEmailForm;