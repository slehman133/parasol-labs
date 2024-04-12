"use server";

import { Resend } from "resend";

const resend = new Resend("re_J41TAqXJ_UhGEifEb5SW4XyvhZ446UDau");

interface EmailOptions {
  from: string;
  subject: string;
  html: string;
}
export async function SendEmail(options: EmailOptions) {
  try {
    const { data, error } = await resend.emails.send({
      from: "info@parasollaboratories.org",
      to: options.from,
      subject: options.subject,
      html: options.html,
    });
    return true;
  } catch (error) {
    // console.error("An error occurred:", error);
    return false;
  }
}

// Export the sendEmail function for use in other parts of the application
