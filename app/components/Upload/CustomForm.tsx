'use client'

import { useState } from 'react'
import MarkdownEditor from '@uiw/react-markdown-editor';
import Markdown from 'react-markdown';

//Developed and integrated
//source: https://ethanmick.com/how-to-upload-a-file-in-next-js-13-app-directory/

const mdStr = `Content here`;

export function CustomForm() {
  const [formData, setFormData] = useState({
    title: "Title",
    subtitle: "",
    date: "01/01/1970",
    slug: "",
    content: mdStr,
  })
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if ((formData.title == "Title")) return

    try {
      const markdownHeader = `---\ntitle: ${formData.title}\nsubtitle: ${formData.subtitle}\ndate: ${formData.date}\n---\n\n`;
      const fullFile = markdownHeader + formData.content;
      const data = new FormData()
      const fileName = formData.slug + ".md"
      data.append('file', new Blob([fullFile], { type: 'text/markdown' }), fileName)

      const res = await fetch('/api/upload', {
        method: 'POST',
        body: data
      })
      if (res.ok) {
        console.log('Upload Successful')
      }
      // handle the error
      if (!res.ok) throw new Error(await res.text())
    } catch (e: any) {
      // Handle errors here
      console.error(e)
    }
  }

  return (
    <div className="flex flex-row">
      <div className="basis-1/3 flex flex-col gap-4">
        <div className="flex flex-col py-8 p-4">
          <h2>Create a basic news post</h2>
          <form onSubmit={onSubmit}>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Title</span>
                <span className="label-text-alt">Top Right label</span>
              </div>
              <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" onChange={(e) => setFormData({ ...formData, title: e.target.value })} />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Subtitle</span>
                <span className="label-text-alt">Top Right label</span>
              </div>
              <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })} />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Date</span>
                <span className="label-text-alt">Top Right label</span>
              </div>
              <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" onChange={(e) => setFormData({ ...formData, date: e.target.value })} />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Filename</span>
                <span className="label-text-alt">Please use _ or - for spaces</span>
              </div>
              <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" onChange={(e) => setFormData({ ...formData, slug: e.target.value })} />
            </label>

            <div className="flex py-8">
              <MarkdownEditor
                value={mdStr}
                height="300px"
                width="500px"
                onChange={(value, viewUpdate) => setFormData({ ...formData, content: value })}
              />
            </div>
            <div className='flex py-4'>
              <input className='btn btn-active' type="submit" value="Submit" />
            </div>
          </form>



        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="py-8 text-3xl">
          <h2>Text Preview</h2>
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

  )
}