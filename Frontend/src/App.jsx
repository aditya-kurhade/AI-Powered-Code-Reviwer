import { useState, useEffect } from 'react'
import "prismjs/themes/prism-tomorrow.css"
import prismjs from 'prismjs'
import Editor from "react-simple-code-editor"
import axios from 'axios'
import Markdown from "react-markdown"
import rehypeHighlight from 'rehype-highlight'
import 'highlight.js/styles/github-dark.css'
import './App.css'
import { ClipLoader } from 'react-spinners'


function App() {
  const [code, setCode] = useState(`// Write your code here or paste it from another source 
  console.log("Hello, World!");`)

  const [loader, setLoader] = useState(false)

  const [review, setReview] = useState('')

  useEffect(() => {
    // Highlight code blocks
    prismjs.highlightAll()
  })

  async function reviewCode() {
    setLoader(true);
    setReview('');
    try {
      const response = await axios.post('https://ai-powered-code-reviwer-pq8t.vercel.app/ai/get-review', { code });
      setReview(response.data);
    } catch (error) {
      setReview('Error fetching review.');
    }
    setLoader(false);
  }

  return (
    <>
    <main>
      <h1 className='heading'>AI-Powered Code Reviewer</h1>
      <div className="container">
      <div className="left">
        <div className="code">
          <Editor
            value={code}
            onValueChange={setCode}
            highlight={code => prismjs.highlight(code, prismjs.languages.js)}
            className="editor"
            padding={10}

            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace', 
              fontSize: 15,
              color: '#f8f8f2',
              height: '100%',
              width: '100%',
              // borderRadius: '5px',
              // padding: '10px',
            }}

          />
        </div>
        <div className="review" onClick={reviewCode}>Review</div>
      </div>
      <div className="right">
        {loader ? (
          <div className="loader">
            <ClipLoader color="#8b9ef1" size={50} />
          </div>
        ) : (
          <Markdown rehypePlugins={rehypeHighlight}>{review}</Markdown>
        )}
      </div>
      </div>
    </main>
    </>
  )
}

export default App
