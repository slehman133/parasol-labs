import react from "react"


export async function generateMetadata() {
    return {
        title: 'Post generator for Parasol Labs',
    }
}

const blogPost = () => {

    return(
        <>
            <div className = "flex flex-col p-24 gap-4">
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
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </label>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Subtitle</span>
                        <span className="label-text-alt">Top Right label</span>
                    </div>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </label>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Date</span>
                        <span className="label-text-alt">Top Right label</span>
                    </div>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </label>
                    

                </div>
            </div>
        </>
    );
}

export default blogPost