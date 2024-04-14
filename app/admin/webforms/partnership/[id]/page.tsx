'use client';

import { Divider, Textarea, Button, Input, Select, SelectItem } from '@nextui-org/react';
import react, { useEffect, useState } from 'react'
import { SendEmail } from '@/app/api/email/contact';
import EmailTemplate from '@/app/components/webforms/templates/emailtemplate';

const statuses = [
    { name: 'Active', value: 'Active' },
    { name: 'Completed', value: 'Completed' },
]

const PartnershipWebformsPage = (props: { params: { id: string } }) => {
    const variables = { formId: props.params.id }
    // const [form, setForm] = useState([])
    const [form, setForm] = useState<any>([])
    //obtain the generalwebform that has the formId
    const [htmlMessage, setHtmlMessage] = useState<string>('');
    const [successMessage, setMessage] = useState<string>('');
    // const [status, setStatus] = useState<Selection>(new Set([]));
    const [status, setStatus] = useState<any>(new Set([]));

    const handleSendEmail = async () => {
        if (htmlMessage === '' || form.status === 'Delivered') {
            setMessage('Please enter a message before sending.');
            return;
        }

        const error = await SendEmail({ to: form.emailAddress, subject: 'Parasol Laboratories: Engaging with Your Inquiry ', html: htmlMessage, name: form.companyName });
        if (!error) {
            console.error('Failed to send email');
        }
        else {
            console.log('Email sent');
            setMessage('Email sent successfully!');
            //update the form to show that it has been responded to.
            console.log(status)
            form.status = status;
            fetch(`/api/webforms/partnershipform`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...form,
                    event: 'edit',
                })
            });
        }
    }


    const fetchForm = async () => {
        try {
            const response = await fetch('/api/webforms/partnershipform', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: Number(variables.formId),
                    event: 'single'
                })
            })
            const data = await response.json();
            console.log(data);
            setForm(data);
        }
        catch (e) {
            console.error('Error:', e)
        }
    }
    useEffect(() => {
        fetchForm();
    }, [])
    return (
        <>
            <div className='flex flex-row gap-12 p-8'>
                <div className='mx-auto'>
                    <h1 className='text-4xl font-semibold my-4'>Form: {form.id}</h1>
                    <Divider />
                    <div>
                        <h1 className='my-2 font-medium text-xl'>Company Information:</h1>
                        <p>{form.companyName}</p>
                        <p>{form.companyWebpage}</p>
                        <p>{form.streetAddress}</p>
                        <p>{form.city} {form.stateOrProvince}, {form.postalCode}</p>
                    </div>
                    <div>
                        <h1 className='my-2 font-medium text-xl'>Person of Contact:</h1>
                        <p>{form.contactName}</p>
                        <p>{form.emailAddress}</p>
                        <p>{form.phoneNumber}</p>
                    </div>
                    <div>
                        <h1 className='my-2 font-medium text-xl'>Info:</h1>
                        <p>{form.additionalInfo}</p>
                    </div>
                    <div>
                    </div>
                </div>
                <div className='w-1/2'>
                    <div>
                        <div>
                            <h1 className='mx-auto text-center text-3xl font-bold my-4'>Please Respond.</h1>
                            <Divider />
                            <div className='my-12'>
                                <Select
                                    label="Status"
                                    variant='bordered'
                                    selectedKeys={status}
                                    onSelectionChange={setStatus}
                                >
                                    {statuses.map((status) => (
                                        <SelectItem key={status.value} value={status.value}>
                                            {status.name}
                                        </SelectItem>
                                    ))}
                                </Select>
                            </div>
                            <div className='flex flex-row justify-end'>
                                <div className='flex flex-row gap-2'>
                                    <h2 className='my-auto text-xl font-semibold'>Parasol Laboratories</h2>
                                    <img src='/images/logo.png' alt='Parasol Labs Logo' width={30} height={30} />
                                </div>
                            </div>
                            <Textarea
                                variant="bordered"
                                fullWidth
                                radius="none"
                                size="lg"
                                placeholder="Your message."
                                value={htmlMessage}
                                onChange={(e) => setHtmlMessage(e.target.value)}
                                className="py-4"
                            />
                            <div className='flex flex-start'>
                                <Button
                                    variant="bordered"
                                    className="mt-4 mx-auto"
                                    color='success'
                                    onClick={handleSendEmail}
                                >
                                    Send
                                </Button>
                            </div>
                            <p className='mx-auto text-center my-4'>{successMessage}</p>
                        </div>
                    </div>
                    <div className='flex justify-end'>
                        <Button variant='bordered' color='warning' onPress={() => window.history.back()}>Return</Button>
                    </div>
                </div>
            </div>


        </>
    )
}
export default PartnershipWebformsPage
