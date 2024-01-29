import fs from 'fs'
import Markdown from "markdown-to-jsx"
import matter from 'gray-matter'
import getPostMetadata from '@/app/components/Blog/getPostMetadata';

//Written by Nicholas Whitehorn

//integrated as part of postpreview
//source: https://github.com/pixegami/nextjs-blog-tutorial
const getPostContent = (slug: string) => {
    const folder = "posts/";
    const file = `${folder}${slug}.md`;
    const content = fs.readFileSync(file, "utf8");
    const matterResult = matter(content);
    return matterResult;
};


// Static Params Definition
//integrated as part of postpreview
//source: https://github.com/pixegami/nextjs-blog-tutorial
export const generateStaticParams = async () => {
    const posts = getPostMetadata();
    return posts.map((post) => [{
        slug: post.slug
    }]);
};

//integrated as part of postpreview
//source: https://github.com/pixegami/nextjs-blog-tutorial
const PostPage = (props:any) => {
    const slug = props.params.slug;
    const post = getPostContent(slug);

    return(
        <div className='flex flex-col p-24 bg-white gap-4'>
            <div className='flex flex-col gap-2'>
                {/* <Image 
                    src = ""
                /> */}
                <h2 className='border text-3xl'>{post.data.title}</h2>
                <h3 className='text-xl'>{post.data.subtitle}</h3>
                <p className='text-xs'>{post.data.date}</p>
                <div className='flex p-8'>
                    <article className='prose gap-4'>
                        <Markdown>{post.content}</Markdown>
                    </article>
                </div>
            </div>
        </div>
    )

}
export default PostPage;