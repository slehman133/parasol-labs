'use client'

import react, {useState} from "react"
import MarkdownEditor from '/workspaces/parasol-labs/app/components/Blog/MarkdownEditor.tsx';
import Markdown from 'markdown-to-jsx'




// export async function generateMetadata() {
//     return {
//         title: 'Post generator for Parasol Labs',
//     }
// }
const mdStr = `# This is a H1  \n## This is a H2  \n###### This is a H6 \nInformational only, please delete this line and above`;
const blogPost = () => {
    const [markdown, setMarkdown] = useState(mdStr);
    const [formData, setFormData] = useState({
        title: "Title",
        subtitle: "",
        date: "01/01/1970",
        slug: "",
        content: mdStr,
    })
    
    
    

    return(
        <>
            <div className = "flex flex-row p-24">
                <div className="basis-1/2 flex flex-col gap-4">
                    <div className = "flex gap-2 py-8 text-3xl">
                        <h2>New Post</h2>
                    </div>

                        <h2>Upload a formatted Markdown file (.md)</h2>
                    <input type="file" className="file-input file-input-bordered w-full max-w-xs" />

                    <div className = "flex  flex-col py-8 ap-4">
                        <h2>Create a basic news post</h2>
                    
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Title</span>
                            <span className="label-text-alt">Top Right label</span>
                        </div>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" onChange={(e,viewUpdate) => setFormData({ ...formData, title: e.target.value})}/>
                    </label>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Subtitle</span>
                            <span className="label-text-alt">Top Right label</span>
                        </div>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" onChange={(e,viewUpdate) => setFormData({ ...formData, subtitle: e.target.value})} />
                    </label>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Date</span>
                            <span className="label-text-alt">Top Right label</span>
                        </div>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" onChange={(e,viewUpdate) => setFormData({ ...formData, date: e.target.value})}/>
                    </label>
                    <div className="flex py-8 w-full">
                        <MarkdownEditor
                            e = {markdown}
                            height="200px"
                            onChange={(e, viewUpdate) => setFormData({...formData, content: e.target.value})}
                            value = {formData.content}
                        />
                    </div>

                    <input className = 'btn btn-active' type="submit" value="Submit"/>
                    </div>     
                </div>
                <div className="flex flex-col gap-4">
                    <div className="py-8 text-3xl">
                        <h2>Result Text</h2>
                    </div>
                    <div className="flex flex-col gap-2 text-lg">
                        <h2 className="text-2xl">{formData.title}</h2>
                        <h3>{formData.subtitle}</h3>
                        <p className="text-sm">{formData.date}</p>
                        <p>
                        <Markdown> 
                            {formData.content}
                        </Markdown>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default blogPost