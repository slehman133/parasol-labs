import React from 'react'
import getPostMetadata from '../components/Blog/getPostMetadata';
import PostPreview from '../components/Blog/PostPreview';
import Link from "next/link"
import { client } from '@/sanity/lib/client'

//developed, using integrated components, see component files for integrations
//Written by Nicholas Whitehorn

export async function generateMetadata() {
    return {
        title: 'News About Parasol Labs',
    }
}

const NewsPage = async () => {
    const res = await client.fetch(`*[_type == "post"]`, {}, { cache: "no-store" })
    const postPreviews = res.map((post:any) => (
        <PostPreview key = {post.slug?.current} {...post} />
    ));

    return (
        <>
            <div className="flex flex-col md:p-24">
                <div className="flex border justify-between bg-slate-500 p-8">
                    <h2 className='text-3xl'>NEWS</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 p-4 md:p-12 gap-8">
                    {postPreviews}    
                </div>
            </div>
        </>

    );


};

export default NewsPage