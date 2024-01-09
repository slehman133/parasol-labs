'use client'

import react, {useState} from "react"
import MarkdownEditor from '@uiw/react-markdown-editor';
import Markdown from 'markdown-to-jsx'
import { UploadForm } from "@/app/components/Upload/UploadForm";
import { CustomForm } from "@/app/components/Upload/CustomForm";





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
    
    
    

    return(
        <>
            <div className = "flex flex-col p-24 bg-white">
                <div className = "flex flex-col gap-2 py-8 text-3xl">
                        <h2>New Post</h2>
                </div>

                <h2>Upload a formatted Markdown file (.md)</h2>
                <div className="flex flex-row">
                    <UploadForm/>
                </div>
                <CustomForm/>   
    
            </div>
        </>
    );
}

export default blogPost