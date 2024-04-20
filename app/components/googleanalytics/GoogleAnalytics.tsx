"use client";
//Kaeden
import React from "react";
import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { pageview } from "@/lib/gtagHelper";

export default function GoogleAnalytics({
  GA_MEASUREMENT_ID,
  cookieConsent,
}: {
  GA_MEASUREMENT_ID: string;
  cookieConsent: boolean | undefined;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  //To keep track of what page the user is on upon pageview effect.
  useEffect(() => {
    if(cookieConsent){
      const url = pathname + searchParams.toString();
      pageview(GA_MEASUREMENT_ID, url);
    }
  }, [pathname, searchParams, GA_MEASUREMENT_ID, cookieConsent]);
  console.log(cookieConsent);
  // if(!cookieConsent) return null;
  // else if(cookieConsent === undefined || cookieConsent)
    //enable the script if the user has consented to cookies and if the user has not made a decision yet.
    if (cookieConsent === undefined || cookieConsent) {
      return (
        <>
          <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          />
          <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('consent', 'default', {
              'analytics_storage': 'denied'
          });
          
          gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
          });
          `,
          }}
          />
        </>
      );
    } else {
      return null;
    }
}
