import { Resend } from "resend";

const resend = new Resend("re_9HFzCxfW_93jYyAGW5tseFVxfr3AEVq7V");

interface EmailOptions {
  from: string;
  subject: string;
  html: string;
}
export async function SendEmail(options: EmailOptions) {
  try {
    const { data, error } = await resend.emails.send({
      from: options.from,
      to: "carver.kaeden@gmail.com",
      subject: options.subject,
      html: options.html,
    });
    return true;
  } catch (error) {
    console.error("An error occurred:", error);
    return false;
  }
}

// Export the sendEmail function for use in other parts of the application
