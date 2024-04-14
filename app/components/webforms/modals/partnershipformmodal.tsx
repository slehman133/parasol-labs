import React from 'react'
import type { UseDisclosureReturn } from '@nextui-org/use-disclosure';
import { Divider, Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Tab, Textarea } from '@nextui-org/react';
import { SendEmail } from '@/app/api/email/contact';

export default function PartnershipFormModal({disclosure, form}: {disclosure: UseDisclosureReturn, form: any}) {
    const {isOpen, onOpenChange} = disclosure;
    const [htmlMessage, setHtmlMessage] = React.useState<string>('');
    const [successMessage, setMessage] = React.useState<string>('');

    const handleSendEmail = async () => {
        const error = await SendEmail({ to: form.email, subject: 'Parasol Laboratories:  Responding to Your Partnership Interest', html:  htmlMessage });
        if(!error) {
            console.error('Failed to send email');
            setMessage('Failed to send email.')
        }
        else {
            console.log('Email sent');
            setMessage('Email sent successfully!');
            //update the form to show that it has been responded to.
            form.status = 'Completed';
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
  return (
    <Modal 
        backdrop="opaque"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        classNames={{
            backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20"
        }}
        >
        <ModalContent>
            {(onClose) => (
            <>
                <ModalHeader className='flex flex-col'>
                    <h1 className='text-thin text-center text-gray-400'>Form ID: {form.id}</h1>
                    <Divider orientation='horizontal'/>
                </ModalHeader>
                <ModalBody>
                {/* Display all of hte forms data */}
                    <div className='flex flex-col'>
                        <div>
                            <h3 className='font-bold text-2xl pb-2'>Company Information:</h3>
                            <p className='text-gray-400'>{form.companyName}</p>
                            <p className='text-gray-400'>{form.services}</p>
                        </div>
                        <div className='py-2'>
                            <h3 className='font-bold text-2xl pb-2'>Person of Contact:</h3>
                            <p className='text-gray-400'>{form.contactName}</p>
                            <p className='text-gray-400'>{form.emailAddress}</p>
                        </div>
                        <div className='py-2'>
                            <h3 className='font-bold text-2xl pb-2'>Message</h3>
                            <p>{form.additionalInfo}</p>
                        </div>
                    </div>
                    <Divider orientation="horizontal"/>
                    {/* Display a input box that will allow the  */}
                    <div className='py-2'>
                        <h1>Please Respond.</h1>
                        <Textarea
                            variant="bordered"
                            fullWidth
                            radius="none"
                            size="lg"
                            placeholder="Your message."
                            value={htmlMessage}
                            onChange={(e) => setHtmlMessage(e.target.value)}
                            className="pb-4"
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
                    </div>
                    <p className='mx-auto'>{successMessage}</p>
                </ModalBody>
                <ModalFooter>
                    <Button
                        variant="bordered"
                        onClick={onClose}
                    >
                        Close
                    </Button>
                </ModalFooter>
            </> 
            )}
        </ModalContent>
    </Modal>
  )
}
