// 'use client'

import React from 'react'
import getPostMetadata from '../components/Blog/getPostMetadata';
import PostPreview from '../components/Blog/PostPreview';
import Link from "next/link"
// import {useSession} from "next/auth"


//developed, using integrated components, see component files for integrations
//Written by Nicholas Whitehorn

export async function generateMetadata() {
    return {
        title: 'News About Parasol Labs',
    }
}



const NewsPage = async () => {
    const res = await fetch(`https://q7s7f1a1.api.sanity.io/v2021-06-07/data/query/local?query=*`).then(res => res.json())
    // const {data:session} = useSession();
    // console.log(session)
    // const postMetadata = getPostMetadata();
    // const postPreviews = postMetadata.map((post) => (
    //     <PostPreview key={post.slug} {...post} />
    // ));
    console.log(res.result)

    return (
        <>
            {/* <div className="flex flex-col p-24"> */}



            {/* <div className="flex border justify-between bg-slate-500 p-8">
                    <h2 className='text-3xl'>NEWS</h2>
                    {/* {session.isAdmin && */}
            {/* <Link href="admin/blogPost/">
                    <p className="btn btn-ghost bg-slate-100">
                        <span className="text-2xl">New Post</span>
                    </p>
                </Link> */}
            {/* } */}
            {/* </div>

            <div className="grid grid-cols-1 md:grid-cols-3 p-8 gap-8">{postPreviews}</div> */}
            {/* </div > */}
            <div className='m-20'>
                {res.result.map((e: any) => {
                    return (
                        <>
                            <Link key={e.slug.current} href={`/news/${e.slug.current}`}>
                                <div>
                                    <h1>{e.title}</h1>
                                </div>
                            </Link>
                        </>)
                })}
            </div>
        </>

    );


};

export default NewsPage