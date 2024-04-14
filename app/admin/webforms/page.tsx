import React from 'react'

interface ResponsePageProps {
    formId: string;
}

export default function ResponsePage({ formId }: ResponsePageProps) {
  return (
    <div>
        <p>Form ID: {formId}</p>
    </div>
  )
}
