import Editor from '@monaco-editor/react'
import React from 'react'
import Layout from '../../components/layout/Layout'

export default function all() {
  return (
    <div>
      <Layout>
        <Editor
          height="90vh"
          defaultLanguage="javascript"
          defaultValue="// type your code..."
          theme='vs-dark'
          className='h-screen'
        />
      </Layout>
    </div>
  )
}
