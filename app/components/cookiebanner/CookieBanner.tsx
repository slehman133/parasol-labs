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

export default function CookieBanner() {
  const [cookieConsent, setCookieConsent] = useState<true | false>();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
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
        <header className="mt-2 font-bold">
          We value your{" "}
          <Link href="/privacy" color="success" underline="hover">
            Privacy
          </Link>
          .
        </header>
        <p className="text-xs mt-4">
          We use cookies to enhance your browsing experience by serving
          personalized ads or content, and analyze our traffic. By clicking
          "Accept All", you consent to the use of cookies.
        </p>
        <Link
          href="/privacy"
          color="success"
          underline="always"
          className="text-xs mt-0 mb-5"
        >
          Privacy Policy
        </Link>
      </div>
      <div>
        <Divider className="bg-black" orientation="vertical" />
      </div>
      <div className="flex gap-4 mx-5 ">
        {/* Argument is not assignable, yet it assigns on click properly and adjusts gcs tag??? 
          Only fix is if const [cookieConsent, setCookieConsent] = useState(false);
          Buuut that assigns our user's cookie consent to false, and it automatically hides since it has a value. cool.*/}

        {/* <Button
          className="my-auto text-green-500 font-medium"
          variant="light"
          onPress={onOpen} //TODO - create a pop up that allows user to customize their cookie consent
        >
          Customize Cookies
        </Button> */}
        <Modal
          placement="top-center"
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          motionProps={{
            variants: {
              enter: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.2,
                  ease: "easeOut",
                },
              },
              exit: {
                y: -20,
                opacity: 0,
                transition: {
                  duration: 0.2,
                  ease: "easeIn",
                },
              },
            },
          }}
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1 text-left">
                  <img src="/images/logo.png" width={25} height={30} />
                  <h1 className="text-xl">We value your privacy.</h1>
                </ModalHeader>
                <ModalBody>
                  <p>
                    We utilize cookies to provide you with the best experience
                    possible. With cookies, we can serve personalized ads and
                    content while also analyzing our traffic for user behavior
                    so that we can constantly improve our website, for you.
                  </p>
                  <br />
                  <p>
                    Click "Accept All" to give us content to use cookies for
                    those services. You can also personalize your consent to
                    specific purposes by clicking "Personalize" and selecting
                    the checkboxes.
                  </p>
                  <br />
                  <p>
                    You can change your preferences at any time in the privacy
                    settings. Read more about how we use cookies and other
                    technologies to collect personal dadta.{" "}
                    <Link href="/privacy" color="success" underline="always">
                      Privacy Policy
                    </Link>
                    .
                  </p>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="bordered" onPress={onClose}>
                    Close
                  </Button>
                  <Button color="default" variant="bordered" onPress={onClose}>
                    Personalize
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
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
