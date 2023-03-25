import Editor from '@monaco-editor/react'
import React from 'react'
import Layout from '../../components/layout/Layout'

export default function all() {
  function setEditorTheme(monaco) {
    monaco.editor.defineTheme('onedark', {
      base: 'vs-dark',
      inherit: true,
      rules: [
        {
          token: 'comment',
          foreground: '#5d7988',
          fontStyle: 'italic'
        },
        { token: 'constant', foreground: '#ff0' }
      ],
      colors: {
        'editor.background': '#21252b'
      }
    });
  }
    
  return (
    <div>
      <Layout>
        <Editor
          height="90vh"
          defaultLanguage="javascript"
          defaultValue="// type your code..."
          theme='vs-dark'
          className='h-screen'
          beforeMount={setEditorTheme}

        />
      </Layout>
    </div>
  )
}
