import Link from "next/link";
import { PostMetadata } from "./PostMetadata";

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