"use client";
//Kaeden
import "./Cookie.css";
import React from "react";
import { getLocalStorage, setLocalStorage } from "@/lib/storageHelper";
import { useState, useEffect } from "react";
import {
  Button,
  Divider,
  Link,
  useDisclosure,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/react";
import GoogleAnalytics from "../googleanalytics/GoogleAnalytics";

export default function CookieBanner() {
  const [cookieConsent, setCookieConsent] = useState<true | false>();
  
  useEffect(() => {
    const storedCookieConsent = getLocalStorage("cookie_consent", null);

    setCookieConsent(storedCookieConsent);
  }, [setCookieConsent]);

  useEffect(() => {
    const newValue = cookieConsent ? 'granted' : 'denied';

    window.gtag("consent", 'update', {
      'analytics_storage': newValue,
    });

    setLocalStorage("cookie_consent", cookieConsent);
  }, [cookieConsent]);

  return (
    <>
    <div
      className={`cookie-consent-banner ${
        cookieConsent != null ? "hidden" : "flex flex-col sm:flex-row"
      } p-4 sm:p-6 gap-4`}
    >
      <div className="flex flex-col gap-2 sm:flex-row justify-between gap-5 p-1">
        <header className="text-sm sm:text-base font-bold my-auto">
          We value your{" "}
          <Link href="/privacy" color="success" underline="hover">
            Privacy
          </Link>
          .
        </header>
        <p className="text-xs sm:text-sm my-auto">
          We use cookies to analyze our traffic. By analyzing our web traffic, we aim to enhance your browsing experience and make the website more enjoyable for you. By clicking
          &quot;Accept All&quot;, you consent to the use of cookies.
        </p>
        <Link
          href="/privacy"
          color="success"
          underline="always"
          className="text-xs sm:text-sm"
        >
          Privacy Policy
        </Link>
      </div>
      <Divider className="bg-black hidden sm:block" orientation="vertical" />
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center ">
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
    <GoogleAnalytics GA_MEASUREMENT_ID="G-2QHVKTJB8F" cookieConsent={cookieConsent}/> 
    </>
  );
}

/* PARASOL LABORATORIES */
