"use client";
import React, { useState } from 'react';
import Head from 'next/head';
import { Input, Textarea, Button } from '@nextui-org/react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage('Email sent successfully');
      } else {
        setMessage('An error occurred while sending the email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setMessage('An error occurred while sending the email');
    }

    setSubmitting(false);
  };

  return (
    <div className="container mx-auto py-8 min-h-screen">
      <Head>
        <title>Contact Us</title>
      </Head>
      <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Your Name
          </label>
          <Input id="name" name="name" type="text" placeholder="John Doe" required />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Your Email
          </label>
          <Input id="email" name="email" type="email" placeholder="john@example.com" required />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <Textarea id="message" name="message" placeholder="Your message here..." required />
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default ContactPage;