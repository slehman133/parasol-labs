import React from 'react';
import PostPreview from '../components/Blog/PostPreview';
import { client } from '@/sanity/lib/client';
import {Divider } from "@nextui-org/react";
import { PostMetadata } from '../components/Blog/PostMetadata';

//developed, using integrated components, see component files for integrations
//Written by Nicholas Whitehorn

export async function generateMetadata() {
    return {
        title: 'News About Parasol Labs',
    }
}

const NewsPage = async () => {
    const res = await client.fetch(`*[_type == "post"] | order(_createdAt asc)`, {}, { cache: "no-store" })
    const postPreviews = await res.map((post:PostMetadata) => (
        <PostPreview key = {post.slug?.current}{...post}/>
    ));

    return (
        <>
            <div className="flex flex-col md:p-24 container mx-auto">
                <div>
                    <h1 className="font-bold text-4xl text-center ">
                        Parasol News
                    </h1>
                    <Divider
                        orientation="horizontal"
                        className="w-1/2 bg-white mx-auto"
                    />
                    <p className='text-center font-light text-xl my-5'>The latest updates on our journey. For you.</p>
                </div>
                <div className="flex flex-row flex-wrap md:p-12 gap-4">
                    {postPreviews}    
                </div>
            </div>
        </>

    );


};

export default NewsPage