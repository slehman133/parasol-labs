import React from 'react';
import './emailtemplate.css';

interface EmailTemplateProps {
    message: string;
    name: string;
}

export default function EmailTemplate({ message, name }: EmailTemplateProps) {
  return (
    <div>
        <div className='email-header'>
            <h1>
                Hi <span className='colorized-name'>{name}</span>!
            </h1>
        </div>
        <p>
            {message}
        </p>
    </div>
  )
}
