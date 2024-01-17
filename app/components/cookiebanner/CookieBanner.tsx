"use client";
//Kaeden
import "./Cookie.css";
import React from "react";
import { getLocalStorage, setLocalStorage } from "@/lib/storageHelper";
import { useState, useEffect } from "react";
import { Button } from "@nextui-org/react";

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
      className={`cookie-consent-banner justify-between ${
        cookieConsent != null ? "hidden" : "flex"
      }`}
    >
      <div className="flex w-96">

        <p className="mt-2.5 ml-10">
          we like cookies.
        </p>
      </div>
      <div className="flex gap-4 mx-5">
        {/* Argument is not assignable, yet it assigns on click properly and adjusts gcs tag??? 
          Only fix is if const [cookieConsent, setCookieConsent] = useState(false);
          Buuut that assigns our user's cookie consent to false, and it automatically hides since it has a value. cool.*/}
        <Button
          className="mt-1 mb-1 text-red-500 font-medium"
          color="danger"
          variant="ghost"
          onClick={() => setCookieConsent(false)}
        >
          Decline
        </Button>
        <Button
          className="mt-1 mb-1 text-orange-500 font-medium"
          color="warning"
          variant="ghost"
          onClick={() => setCookieConsent(false)} //TODO - create a pop up that allows user to customize their cookie consent
        >
          Customize Cookies
        </Button>
        <Button
          className="mt-1 mb-1 text-green-500 font-medium"
          color="success"
          variant="ghost"
          onClick={() => setCookieConsent(true)}
        >
          Allow Cookies
        </Button>
      </div>
    </div>
  );
}

/* PARASOL LABORATORIES */
