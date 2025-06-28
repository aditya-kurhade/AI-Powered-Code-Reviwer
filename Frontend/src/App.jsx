import { useState, useEffect } from 'react'
import "prismjs/themes/prism-tomorrow.css"
import prismjs from 'prismjs'
import Editor from "react-simple-code-editor"
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [code, setCode] = useState(`function sum(){
  return 1 + 2;
}`)

  useEffect(() => {
    // Highlight code blocks
    prismjs.highlightAll()
  })

  return (
    <>
    <main>
      <div className="left">
        <div className="code">
          <Editor
            value={code}
            onValueChange={setCode}
            highlight={code => prismjs.highlight(code, prismjs.languages.js)}
            padding={10}
            className="editor"

            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace', 
              fontSize: 20,
              color: '#f8f8f2',
              height: '100%',
              width: '100%',
              border: '1px solid #44475a',
              borderRadius: '5px',
            }}
          />
        </div>
        <div className="review">Review</div>
      </div>
      <div className="right"></div>
    </main>
    </>
  )
}

export default App
