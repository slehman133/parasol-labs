import fs from 'fs'
import Markdown from "markdown-to-jsx"
import matter from 'gray-matter'
import getPostMetadata from '@/app/components/Blog/getPostMetadata';

const getPostContent = (slug: string) => {
    const folder = "posts/";
    const file = `${folder}${slug}.md`;
    const content = fs.readFileSync(file, "utf8");
    const matterResult = matter(content);
    return matterResult;
};


// Static Params Definition
export const generateStaticParams = async () => {
    const posts = getPostMetadata();
    return posts.map((post) => [{
        slug: post.slug
    }]);
};

const PostPage = (props:any) => {
    const slug = props.params.slug;
    const post = getPostContent(slug);
    return(
        <div>
            <h2>This is a post: {slug}</h2>
            <Markdown>{post.content}</Markdown>
        </div>
    )

}
export default PostPage;