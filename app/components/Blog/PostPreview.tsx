import Link from "next/link";
import { PostMetadata } from "./PostMetadata";

//Written by Nicholas Whitehorn

//integrated as part of postpreview
//source: https://github.com/pixegami/nextjs-blog-tutorial
const PostPreview = (props:PostMetadata) => {
    return <div className="border border-solid border-slate-500 p-2">
        <Link href={`/posts/${props.slug}`}>
            <h2 className="text-xl">{props.title}</h2>
        </Link>
        <p>{props.subtitle}</p>
        <p>{props.date}</p>
    </div>
};

export default PostPreview;