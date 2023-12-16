'use client'

import react, {useState} from "react"
import MarkdownEditor from '@uiw/react-markdown-editor';
import Markdown from 'markdown-to-jsx'
import { UploadForm } from "@/app/components/Upload/UploadForm";




//Developed, integrated elements are included and notated in component files
//Written by Nicholas Whitehorn

// export async function generateMetadata() {
//     return {
//         title: 'Post generator for Parasol Labs',
//     }
// }


const mdStr = `Content here`;
const blogPost = () => {
    const [formData, setFormData] = useState({
        title: "Title",
        subtitle: "",
        date: "01/01/1970",
        slug: "",
        content: mdStr,
    })
    // const SaveAsMarkdownHandler = async (text:string) => {
    //     if(formData.slug != ""){
    //         SaveAsMarkdown(formData.slug, text);
    //     }
        
    // }
    const Concatenate = async (v1:string, v2:string, v3:string, v4:string) => {
        const titleFormat = `[---${v1}]`
        const subtitleFormat = `[${v3}]`
        const dateFormat = `[${v2}---]`
        const content = `[\n${v4}]`
    
        return `${v1}, ${v2}, ${v3}, ${v4}`
    }
    const submitForm = () => {
        const concatenated = Concatenate(formData.title, formData.subtitle, formData.date, formData.content)
    }
    

    return(
        <>
            <div className = "flex flex-col p-24">
                <div className = "flex flex-col gap-2 py-8 text-3xl">
                        <h2>New Post</h2>
                </div>

                <h2>Upload a formatted Markdown file (.md)</h2>
                <div className="flex flex-row">
                    <UploadForm/>
                </div>
                <div className="flex flex-row">
                    <div className="basis-1/2 flex flex-col gap-4">
                        

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
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">Filename</span>
                                    <span className="label-text-alt">Please use _ or - for spaces</span>
                                </div>
                                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" onChange={(e,viewUpdate) => setFormData({ ...formData, slug: e.target.value})}/>
                            </label>
                            <div className="flex py-8 w-1/2">
                                <MarkdownEditor
                                    value = {mdStr}
                                    height="300px"
                                    onChange={(value, viewUpdate) => setFormData({...formData, content: value})}
                                />
                            </div>

                            
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
                
            </div>
        </>
    );
}

export default blogPost