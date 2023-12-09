'use client';

import React from "react";
import { useForm } from 'react-hook-form';
import { sendEmail } from "@/utils/email";


export type FormData = {
  subject: string;
  email: string;
  message: string;
}

export default function Contact() {
  const { register, handleSubmit } = useForm<FormData>();
  
  function onSubmit(data: FormData) {
    sendEmail(data);
  }

  return (
    <section
      id="contact"
      className="content mb-20 sm:mb-28 w-[min(100%,38rem)] "
    >
      <div className="border-2 border-gray rounded-3xl">
        <form className="mt-10 flex flex-col p-5">
          <div className="label">
            <span className="label-text">Subject</span>
          </div>
          <input
            className="input input-bordered text-black bg-transparent border-black border"
            type="subject"
          ></input>
          <div className="label">
            <span className="label-text">Email</span>
          </div>
          <input
            className="input input-bordered p-5 bg-transparent border-black border text-black"
            type="email"
          />
          <div className="label">
            <span className="label-text">Message</span>
          </div>
          <textarea className="textarea textarea-bordered text-black border-black border bg-transparent p-5" />
          <div className="h-4"></div>
          <button
            type="submit"
            className="btn btn-ghost btn-outline border-black border "
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
