"use client";
import React, { useState } from "react";
import { Button, Input, Textarea } from "@nextui-org/react";
import * as ga from "@/lib/gtagHelper";

const SendEmailForm: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [html, setHtml] = useState<string>("");
  const [sending, setSending] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const validateEmail = (email: string) =>
    email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z ]{2,4}$/i);

  const isInvalid = React.useMemo(() => {
    if (email === "") return false;

    return validateEmail(email) ? false : true;
  }, [email]);

  const clearForm = async () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setHtml("");
  }

  const handleSendEmail = async () => {
    //combine first and last name
    const name = `${firstName} ${lastName}`;
    //check if fields are empty
    if (!email || !html || !name) {
      setMessage("Please fill in all required fields.");
      return;
    }

    if (isInvalid) {
      setMessage("Please enter a valid email.");
      return;
    }

    setSending(true);
    try {
      setSubject("test");
      createGAEvent();
      //trim email
      email.trim();
      createDBRecord(name);
      // console.log(error);
      setMessage("Form sent successfully!");
      clearForm();
    } catch (error) {
      setMessage(
        "Failed to send form. Please check the console for more details."
      );
      console.error(error);
    } finally {
      setSending(false);
    }
  };

  const createGAEvent = async () => {
    ga.event({
      action: "general_form_submission",
      category: "general_form",
      label: "general_form",
      value: `${email} - sent email successfully`,
      username: `${email}`,
    })
  };
  const createDBRecord = async (name: string) => {
    try {
      await fetch("/api/webforms/generalform", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, html }),
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold text-center underline py-4">
        Contact Form
      </h1>
      <div className="grid grid-cols-2 gap-5">
        <Input
          variant="bordered"
          fullWidth
          radius="none"
          size="lg"
          label="First Name"
          labelPlacement="outside"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <Input
          variant="bordered"
          fullWidth
          radius="none"
          size="lg"
          label="Last Name"
          labelPlacement="outside"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <Input
        variant="bordered"
        fullWidth
        radius="none"
        size="lg"
        placeholder="From: name@example.com"
        value={email}
        isInvalid={isInvalid}
        color={isInvalid ? "danger" : "success"}
        errorMessage={isInvalid && "Please enter a valid email"}
        onChange={(e) => setEmail(e.target.value)}
        className="py-4"
      />
      <Textarea
        variant="bordered"
        fullWidth
        radius="none"
        size="lg"
        placeholder="Your message."
        value={html}
        onChange={(e) => setHtml(e.target.value)}
        className="py-4"
      />
      <div className="grid grid-cols-2 gap-5 py-4">
        <Button
          radius="none"
          disabled={sending}
          className=""
          onClick={handleSendEmail}
        >
          Send Email
        </Button>
        <p className="my-auto ">{message}</p>
      </div>
    </div>
  );
};

export default SendEmailForm;
