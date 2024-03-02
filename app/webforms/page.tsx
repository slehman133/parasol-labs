import { Link } from '@nextui-org/react'
import React from 'react'

export default function page() {
    return (
        <div className='my-auto mx-auto p-14 grid grid-cols-2 gap-5'>
            <div>
                <h1 className='text-4xl font-bold'>Contact us at Parasol Laboratories.</h1>
                <p className='font-medium'>Whether you're interested in working with us, or have a general inquiry. We're here to provide.<br />Please select the form you feel appropriate for your needs and we will get back to you as soon as possible.</p>
                <Link
                    className="text-2xl font-bold w-fit"
                    href="/webforms/partnershipform"
                    underline="always"
                    color="foreground"
                >
                    Partnership Form
                    <svg id="right" className="arrow-right my-auto px-2 ">
                        <path
                            d="M0.5 9.35772H20.9956L14.2001 2.29941L16.4134 0L27 11L16.4134 22L14.2001 19.7006L20.9956 12.6423H0.5V9.35772Z"
                            fill="#ffffff"
                        ></path>
                    </svg>
                </Link>
                <Link
                    className="text-2xl font-bold w-fit"
                    href="/webforms/generalform"
                    underline="always"
                    color="foreground"
                >
                    Contact Us
                    <svg id="right" className="arrow-right my-auto px-2 ">
                        <path
                            d="M0.5 9.35772H20.9956L14.2001 2.29941L16.4134 0L27 11L16.4134 22L14.2001 19.7006L20.9956 12.6423H0.5V9.35772Z"
                            fill="#ffffff"
                        ></path>
                    </svg>
                </Link>
            </div>

        </div>
    )
}
