import { Resend } from 'resend';

const resend = new Resend('re_9HFzCxfW_93jYyAGW5tseFVxfr3AEVq7V');

interface EmailOptions {
    from: string;
    to: string[];
    subject: string;
    html: string;
  }
  
  /**
   * Sends an email using the Resend service.
   * 
   * @param {EmailOptions} options An object containing email options.
   * @returns {Promise<void>} A promise that resolves when the email is sent or logs an error.
   */
  async function sendEmail(options: EmailOptions): Promise<void> {
    try {
      const { data, error } = await resend.emails.send({
        from: options.from,
        to: options.to,
        subject: options.subject,
        html: options.html,
      });
  
      if (error) {
        console.error({ error });
        throw new Error('Failed to send email');
      }
  
      console.log({ data });
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }
  
  // Export the sendEmail function for use in other parts of the application
  export { sendEmail };