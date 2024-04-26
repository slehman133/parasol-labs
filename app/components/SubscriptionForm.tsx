"use client";
import React, { useState } from "react";
import { Button, Input } from "@nextui-org/react";

interface formProps {
  label: string;
  product: string;
}

export default function SubscriptionForm({ label, product }: formProps) {
  const [email, setEmail] = useState("");
  const [form, setForm] = useState<formProps>();

  setForm({ label, product });
  const validateEmail = (email: string) =>
    email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z ]{2,4}$/i);

  const isInvalid = React.useMemo(() => {
    if (email === "") return false;

    return validateEmail(email) ? false : true;
  }, [email]);

  const handleNotifyMe = async () => {
    const res = await fetch("/api/email/broadcast", {
      method: "POST",
      body: JSON.stringify(form),
    });
    if (res.ok) {
      alert("You will be notified via email when the product is in stock!");
    } else {
      alert("There was an error adding you for product announcements.");
    }
  };
  return (
    <div className="flex flex-row items-center justify-center gap-6 border-foreground border-1 p-2">
      <label className="w-1/2">{label}</label>
      <div className="flex flex-row">
        <Input
          variant="bordered"
          fullWidth
          radius="none"
          size="sm"
          placeholder="From: name@example.com"
          value={email}
          isInvalid={isInvalid}
          color={isInvalid ? "danger" : "success"}
          errorMessage={isInvalid && "Please enter a valid email"}
          onChange={(e) => setEmail(e.target.value)}
          className="h-full p-2 my-auto"
        />
        <Button
          onClick={handleNotifyMe}
          disabled={email === "" ? true : false}
          variant="bordered"
          radius="none"
          size="lg"
          className="h-full my-auto p-1"
        >
          Notify Me
        </Button>
      </div>
    </div>
  );
}
