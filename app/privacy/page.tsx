"use client";
import React from "react";
import "./style.css";
import { Divider } from "@nextui-org/react";

//TODO: Whenever a section is in focus. i.e. user is on 1., create a focus event where it bolds/makes the section it correlates to on the privacysection appear
const PrivacyPage = () => {
  return (
    <>
    <div className="container">
      <div className="leftSection">
        <header className="text-3xl font-bold pb-4">
          Your Privacy matters.
        </header>
        <Divider orientation="horizontal" />
        <header className="text-xl font-semibold pt-4">SECTIONS</header>
        <div className="privacySection">
          <header className="spacing ">
            1. INFORMATION YOU CHOOSE TO SUBMIT
          </header>
          <header className="spacing ">2. INFORMATION WE COLLECT</header>
          <header className="spacing ">3. HOW WE USE INFORMATION</header>
          <header className="spacing ">4. HOW WE SHARE YOUR INFORMATION</header>
          <header className="spacing ">5. GOOGLE ANALYTICS</header>
          <header className="spacing ">6. AUTHORIZED DISCLOSURES</header>
          <header className="spacing ">
            7. DATA PROCESSING IN THE UNITED STATES
          </header>
          <header className="spacing sectionHeader">
            8. QUESTIONS AND OPT IN/OUT
          </header>
        </div>
      </div>

      <div className="rightSection">
        <p>
          This Privacy Policy governs this website, operated by Parasol
          Laboratories Incorporated. By using the Site, you consent to the
          collection and use of your personal information as outlined in this
          Privacy Policy. If you have any questions, feel free to contact us
          at:&#160;
          <a href="mailto: info@parasollabs.org" className="textlink">
            info@parasollabs.org
          </a>
        </p>
        <div>
          <div>
            <header className="spacing">
              1. INFORMATION YOU CHOOSE TO SUBMIT
            </header>
            <p className="sectionText">
              When you interact with our application, you actively provide certain information. This includes details such as:
              <header className="spacing ">I. Pages you view</header>
              <p className="sectionText">
                We track the pages you visit within our application to understand your preferences and improve our content and services accordingly.
              </p>
              <header className="spacing ">II. Account creation and login details</header>
              <p className="sectionText">
                When you create an account or log in, we collect information such as your name, email address, username, password, and any additional details you provide to facilitate account management and personalize your experience.
              </p>
              <header className="spacing ">III. Device information</header>
              <p className="sectionText">
                We gather data about the device you use to access our application, including device type, operating system, browser type, IP address, and unique device identifiers. This information helps us optimize our application for various devices and provide a seamless user experience.
              </p>
              <header className="spacing ">IV. Sessions</header>
              <p className="sectionText">
                We monitor the sessions you initiate within our application to analyze user engagement patterns and enhance usability. Session data enables us to identify areas for improvement and implement changes to better serve our users.
              </p>
            </p>
          </div>
          <div>
            <header className="spacing ">2. INFORMATION WE COLLECT</header>
            <p className="sectionText">
              We collect the same information detailed in Section 1, which includes the data you actively provide while interacting with our application. This information forms the basis of our analytics and helps us understand user behavior and preferences.
            </p>
          </div>
          <div>
            <header className="spacing ">3. HOW WE USE INFORMATION</header>
            <p className="sectionText">
              The information we collect is used solely for analytic purposes and to enhance your experience with our application. This includes:
              <header className="spacing">I. Improving user experience</header>
              <p className="sectionText">
                By analyzing the pages you view, account creation and login details, device information, and sessions created, we gain insights into user preferences and behavior. This enables us to optimize our application&apos;s layout, features, and functionality to better meet your needs.
              </p>
              <header className="spacing">II. Optimizing performance</header>
              <p className="sectionText">
                Understanding how users interact with our application helps us identify performance bottlenecks and technical issues. By addressing these issues promptly, we ensure a smooth and responsive user experience.
              </p>
              <header className="spacing">III. Personalizing content</header>
              <p className="sectionText">
                We use the data collected to deliver personalized content, recommendations, and advertisements based on your preferences and interests. This enhances your overall experience with our application and increases the relevance of the content you encounter.
              </p>
            </p>
          </div>
          <div>
            <header className="spacing">
              4. HOW WE SHARE YOUR INFORMATION
            </header>
            <p className="sectionText">
              We prioritize the protection of your privacy and do not share your private information with third parties. However, we may share aggregated and anonymized data, such as total traffic and sessions, for analytical and reporting purposes. This information does not contain any personally identifiable details and is used strictly for statistical analysis and business insights.
            </p>
          </div>
          <div>
            <header className="spacing">5. GOOGLE ANALYTICS</header>
            <p className="sectionText">
              We utilize Google Analytics (GA) to gather detailed insights into user interactions with our application. GA uses first-party cookies to collect information such as page views, session duration, and traffic sources. Google Analytics helps us analyze user behavior, track performance metrics, and identify areas for improvement. We adhere to Google&apos;s privacy policies and terms of service when using GA, ensuring that user data is handled securely and responsibly.
            </p>
          </div>
          <div>
            <header className="spacing">6. AUTHORIZED DISCLOSURES</header>
            <p className="sectionText">
              In certain situations, we may be required to disclose your information for legal compliance, protection of rights, or investigation of violations.
            </p>
          </div>
          <div>
            <header className="spacing">
              7. DATA PROCESSING IN THE UNITED STATES
            </header>
            <p className="sectionText">
              Your information may be processed and stored in the United States or other countries where our servers or service providers are located. By using our application, you consent to the transfer of your information to these locations.
            </p>
          </div>
          <div>
            <header className="spacing">8. QUESTIONS AND OPT IN/OUT</header>
            <p className="sectionText">
              If you have any questions, concerns, or wish to opt in/out of certain data collection practices, please contact us at info@parasollabs.org. Additionally, guests and users have the option to manage their cookie preferences by clearing cookies through their browser&apos;s history tab.

              This detailed information aims to provide clarity on how we collect, use, and protect your information while using our application. If you have any further inquiries or require additional assistance, please do not hesitate to contact us.
            </p>
          </div>
        </div>
      </div>
    </div>

    </>
  );
};
export default PrivacyPage;
