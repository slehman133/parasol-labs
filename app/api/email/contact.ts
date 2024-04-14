"use server";

import { Resend } from "resend";
import EmailTemplate from "@/app/components/webforms/templates/emailtemplate";


const resend = new Resend("re_J41TAqXJ_UhGEifEb5SW4XyvhZ446UDau");

interface EmailOptions {
  to: string;
  subject: string;
  html: string;
  name: string;
}
export async function SendEmail(options: EmailOptions) {
  try {
    const { data, error } = await resend.emails.send({
      from: "info@parasollaboratories.org",
      to: options.to,
      subject: options.subject,
      react: EmailTemplate({ message: options.html, name: options.name}),
    });
    return true;
  } catch (error) {
    // console.error("An error occurred:", error);
    return false;
  }
}

// Export the sendEmail function for use in other parts of the application
