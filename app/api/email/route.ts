import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';


//POST request for mailing. --Kaeden
export async function POST(request: NextRequest) {
    const { email, subject, message } = await request.json();

    const transport = nodemailer.createTransport({
        service: 'gmail',
        /*
            setting service as gmail is same as providing these settings:

            host: "smtp.gmail.com",
            port: 465,
            secure: true

            TODO: Provide support for other email providers 
                -- do with the nodemailer github link to find the settings at:
                /nodemailer/blob/master/lib/well-known/services.json ezpz

            Reach out to Kaeden for help.
        */
        auth: {
            user: process.env.MY_EMAIL,
            pass: process.env.MY_PASSWORD,
        },
    });

    const mailOptions: Mail.Options = {
        from: process.env.MY_EMAIL,
        to: process.env.MY_EMAIL,
        // cc: email, (uncomment if you want to send to sender)
        subject: subject,
        text: message,
    };

    const sendMailPromise = () =>
        new Promise<string>((resolve, reject) => {
            transport.sendMail(mailOptions, function (err) {
                if (!err) {
                    resolve('Email sent');
                } else {
                    reject(err.message);
                }
            });
        });
    try {
        await sendMailPromise();
        return NextResponse.json({ message: 'Email sent' });
    } catch (err) {
        return NextResponse.json({ error: err }, { status: 500 })
    }
}