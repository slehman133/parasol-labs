"use client";
import React, { useState } from 'react';
import { sendEmail } from '@/app/api/email/contact';
import { Input, Textarea, Button, Checkbox } from '@nextui-org/react';
export default function PartnershipFormPage() {

  //Change the subject state to reflect elements within
  const [from, setFrom] = useState<string>('');
  const [to, setTo] = useState<string>('');
  const [subject, setSubject] = useState<string>('');
  const [html, setHtml] = useState<string>('');
  const [sending, setSending] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');

  //Set selected for multiple diff checkboxes
  const [isSelected, setIsSelected] = useState(false)

  const handleSendEmail = async () => {
    setSending(true);
    try {
      await sendEmail({ from, to: to.split(','), subject, html });
      setMessage('Email sent successfully!');
    } catch (error) {
      setMessage('Failed to send email. Please check the console for more details.');
      console.error(error);
    } finally {
      setSending(false);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: 'auto' }}>
      <h3>Let&apos;s build a better tomorrow.</h3>
      <Input
        label="Company Name"
        labelPlacement='outside'
        variant='bordered'
        fullWidth
        color="primary"
        size="lg"
        placeholder="From: name@example.com"
        value={from}
        onChange={(e) => setFrom(e.target.value)}
      />
      <Input
        label='Company Webpage'
        labelPlacement='outside'
        variant='bordered'
        fullWidth
        color="primary"
        size="lg"
        value={to}
        onChange={(e) => setTo(e.target.value)}
      />
      <h1>Company Address</h1>
      <Input
        variant='bordered'
        fullWidth
        color="primary"
        size="lg"
        placeholder="Street Address"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <Input
        variant='bordered'
        fullWidth
        color="primary"
        size="lg"
        placeholder="Street Address Line 2"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <Input
        variant='bordered'
        fullWidth
        color="primary"
        size="lg"
        placeholder="City"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <Input
        variant='bordered'
        fullWidth
        color="primary"
        size="lg"
        placeholder="State / Province"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <Input
        variant='bordered'
        fullWidth
        color="primary"
        size="lg"
        placeholder="Postal / Zip Code"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <h1>Current Demand Generation Activities (can select multiple)</h1>
      <Checkbox isSelected={isSelected} onValueChange={setIsSelected}>
        Website Optimization
      </Checkbox>
      <Checkbox isSelected={isSelected} onValueChange={setIsSelected}>
        Social Media
      </Checkbox>
      <Checkbox isSelected={isSelected} onValueChange={setIsSelected}>
        Media Advertisement
      </Checkbox>
      <Checkbox isSelected={isSelected} onValueChange={setIsSelected}>
        Email/Mobile Marketing
      </Checkbox>
      <Checkbox isSelected={isSelected} onValueChange={setIsSelected}>
        Trade show/Workshop
      </Checkbox>
      <Checkbox isSelected={isSelected} onValueChange={setIsSelected}>
        Paid Search / SEO
      </Checkbox>
      <Checkbox isSelected={isSelected} onValueChange={setIsSelected}>
        Other
      </Checkbox>
      <h1>Additional information</h1>
      <Textarea
        variant='bordered'
        fullWidth
        color="primary"
        size="lg"
        placeholder="Type here..."
        value={html}
        onChange={(e) => setHtml(e.target.value)}
      />
      <h1>Point of Contact - Partnership</h1>
      <Input
        label='Contact Name'
        labelPlacement='outside'
        variant='bordered'
        color='primary'
        size='lg'
      />
      <Input
        label='Phone Number'
        labelPlacement='outside'
        variant='bordered'
        color='primary'
        size='lg'
      />
      <Input
        label='Email Address'
        labelPlacement='outside'
        variant='bordered'
        color='primary'
        size='lg'
      />
      <Button
        color="primary"
        disabled={sending}
        onClick={handleSendEmail}
      >
        Submit
      </Button>
      <p>{message}</p>
    </div>
  );
};
