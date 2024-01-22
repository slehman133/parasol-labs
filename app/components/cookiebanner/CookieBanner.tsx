"use client";
//Kaeden
import "./Cookie.css";
import React from "react";
import { getLocalStorage, setLocalStorage } from "@/lib/storageHelper";
import { useState, useEffect } from "react";
import { Button, Divider, Link } from "@nextui-org/react";

export default function CookieBanner() {
  const [cookieConsent, setCookieConsent] = useState();

  useEffect(() => {
    const storedCookieConsent = getLocalStorage("cookie_consent", null);

    setCookieConsent(storedCookieConsent);
  }, [setCookieConsent]);

  useEffect(() => {
    const newValue = cookieConsent ? "granted" : "denied";

    window.gtag("consent", "update", {
      analytics_storage: newValue,
    });

    setLocalStorage("cookie_consent", cookieConsent);

    //For Testing
    console.log("Cookie Consent: ", cookieConsent);
  }, [cookieConsent]);

  return (
    <div
      className={`cookie-consent-banner ${
        cookieConsent != null ? "hidden" : "flex"
      }`}
    >
      <div className="flex justify-between gap-5 p-1">
        <header className="mt-2 font-bold">We value your <Link href="/privacy" color="success" underline="hover">Privacy</Link>.</header>
        <p className="text-xs mt-4">We use cookies to enhance your browsing experience by serving personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to the use of cookies.</p>
        <Link href="/privacy" color="success" underline="always" className="text-xs mt-0 mb-5">Privacy Policy</Link>
      </div>
      <div>
        <Divider className="bg-black" orientation="vertical"/>
      </div>
      <div className="flex gap-4 mx-5 ">
        {/* Argument is not assignable, yet it assigns on click properly and adjusts gcs tag??? 
          Only fix is if const [cookieConsent, setCookieConsent] = useState(false);
          Buuut that assigns our user's cookie consent to false, and it automatically hides since it has a value. cool.*/}

        <Button
          className="my-auto text-green-500 font-medium"
          variant="light"
          onClick={() => setCookieConsent(false)} //TODO - create a pop up that allows user to customize their cookie consent
        >
          Customize Cookies
        </Button>
        <Button
          className="my-auto text-green-500 font-medium"
          color="success"
          variant="ghost"
          onClick={() => setCookieConsent(false)}
        >
          Decline
        </Button>

        <Button
          className="my-auto text-green-500 font-medium"
          color="success"
          variant="ghost"
          onClick={() => setCookieConsent(true)}
        >
          Accept All
        </Button>
      </div>
    </div>
  );
}

/* PARASOL LABORATORIES */
