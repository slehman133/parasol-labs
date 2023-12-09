'use client';

import React, { useState } from 'react';
import MarkdownEditor from '@uiw/react-markdown-editor';

const mdStr = `# This is a H1  \n## This is a H2  \n###### This is a H6 \nInformational only, please delete this line and above`;
export default function App() {
  const [markdown, setMarkdown] = useState(mdStr);
  return (
    <MarkdownEditor
      value = {markdown}
      height="200px"
      onChange={(value, viewUpdate) => setMarkdown(value)}
    />
  );
}


