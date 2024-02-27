
"use client";
import React, { useState } from 'react';
import { Button, Input, Textarea } from '@nextui-org/react';
import { sendEmail } from '../../api/email/contact'; // Adjust the path as necessary

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
      <h3>Send an Email</h3>
      <Input
        variant = 'bordered'
        fullWidth
        color="primary"
        size="lg"
        placeholder="From: name@example.com"
        value={from}
        onChange={(e) => setFrom(e.target.value)}
      />
      <Input
        variant='bordered'
        fullWidth
        color="primary"
        size="lg"
        placeholder="To: recipient@example.com"
        value={to}
        onChange={(e) => setTo(e.target.value)}
      />
      <Input
        variant='bordered'
        fullWidth
        color="primary"
        size="lg"
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <Textarea
        variant='bordered'
        fullWidth
        color="primary"
        size="lg"
        placeholder="HTML Content"
        value={html}
        onChange={(e) => setHtml(e.target.value)}
      />
      <Button
        color="primary"
        disabled={sending}
        onClick={handleSendEmail}
      >
        Send Email
      </Button>
      <p>{message}</p>
    </div>
  );
};

export default SendEmailForm;
