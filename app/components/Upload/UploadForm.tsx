'use client'

import { useState } from 'react'

export function UploadForm() {
  const [file, setFile] = useState<File>()

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!file) return

    try {
      const data = new FormData()
      data.set('file', file)

      const res = await fetch('/api/upload', {
        method: 'POST',
        body: data
      })
      // handle the error
      if (!res.ok) throw new Error(await res.text())
    } catch (e: any) {
      // Handle errors here
      console.error(e)
    }
  }

  return (
    <div className='py-2'>
    <form onSubmit={onSubmit}>
      <input
        type="file"
        name="file"
        className='file-input file-input-bordered w-full max-w-xs'
        onChange={(e) => setFile(e.target.files?.[0])}
      />
      <input className = 'btn btn-active' type="submit" value="Submit"/>
    </form>
    </div>
  )
}