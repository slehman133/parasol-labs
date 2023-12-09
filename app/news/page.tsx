// 'use client'

import React from 'react'
import getPostMetadata from '../components/Blog/getPostMetadata';
import PostPreview from '../components/Blog/PostPreview';
import Link from "next/link"
// import {useSession} from "next/auth"


// export async function generateMetadata() {
//     return {
//         title: 'News About Parasol Labs',
//     }
// }

const NewsPage = () => {
    // const {data:session} = useSession();
    // console.log(session)
    const postMetadata = getPostMetadata();
    const postPreviews = postMetadata.map((post) => (
        <PostPreview key = {post.slug} {...post}/>
    ));

    return(
        <>
            <div className = "flex flex-col p-24">
                {/* {session.isAdmin && */}
                    <div className=''>
                        <Link href = "news/blogPost/">
                            <p className = "btn btn-ghost">
                                <span className = "changeletter">New Post</span>
                            </p>
                        </Link>
                    </div>
                {/* } */}
                <div className = "flex border bg-slate-500 p-8">
                    <h2>NEWS</h2>
                </div>
                    
                <div className="grid grid-cols-1 md:grid-cols-2 p-8">{postPreviews}</div>
            </div>
        </>

        );
     
    
};

export default NewsPage