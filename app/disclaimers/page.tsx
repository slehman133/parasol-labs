//Create a basic page component with a legal disclaimer in the center
import React from 'react';


export async function generateMetadata() {
    return {
        title: "Disclaimers - Parasol Labs",
    };
}

const DisclaimersPage = async () => {
    return (
        <div className='m-24'>
            <h1 className='text-4xl font-bold'>Legal Disclaimers</h1>
            <h2>Testing the waters legal disclosure.</h2>
            <p className='my-5'>
                We are &apos;testing the waters&apos; to gauge investor interest in an offering under Regulation Crowdfunding. No money or other consideration is being solicited. If sent, it will not be accepted. No offer to buy securities will be accepted. No part of the purchase price will be received until a Form C is filed and only through Wefunder’s platform. Any indication of interest involves no obligation or commitment of any kind.</p>
        </div>
    )
}
export default DisclaimersPage;