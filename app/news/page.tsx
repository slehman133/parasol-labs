import React from 'react'
import getPostMetadata from '../components/Blog/getPostMetadata';
import PostPreview from '../components/Blog/PostPreview';
import Link from "next/link"
import { createClient } from '@sanity/client'


//developed, using integrated components, see component files for integrations
//Written by Nicholas Whitehorn

export async function generateMetadata() {
    return {
        title: 'News About Parasol Labs',
    }
}

const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: '2021-06-07',
    useCdn: false
})


const NewsPage = async () => {
    const res = await client.fetch(`*[_type == "post"]`, {}, { cache: "no-store" })

    return (
        <>
            <div className="my-24 grid grid-cols-[20%_60%_20%]">
                <div className='col-start-2 mx-auto'>
                    {res.map((e: any) => {
                        return (
                            <>
                                <Link key={e.slug?.current} href={`/news/${e.slug?.current}`}>
                                    <div className='border-2 border-black'>
                                        <h1>{e.title}</h1>
                                    </div>
                                </Link>
                            </>)
                    })}
                </div>
            </div>
        </>

    );


};

export default NewsPage