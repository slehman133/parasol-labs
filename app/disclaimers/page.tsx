//Create a basic page component with a legal disclaimer in the center
import { Divider } from '@nextui-org/react';
import React from 'react';


export async function generateMetadata() {
    return {
        title: "Disclaimers - Parasol Labs",
    };
}

const DisclaimersPage = async () => {
    return (
        <div className='m-24 container text-center'>
            <h1 className='text-4xl font-bold mt-24'>Legal Disclaimers</h1>
            <h2 className='mt-12'>Testing the waters legal disclosure.</h2>
            <Divider className='mt-10'/>
            <p className=' w-1/2 mx-auto mt-24'>
                We are &apos;testing the waters&apos; to gauge investor interest in an offering under Regulation Crowdfunding. No money or other consideration is being solicited. If sent, it will not be accepted. No offer to buy securities will be accepted. No part of the purchase price will be received until a Form C is filed and only through Wefunder’s platform. Any indication of interest involves no obligation or commitment of any kind.</p>
        </div>
    )
}
export default DisclaimersPage;