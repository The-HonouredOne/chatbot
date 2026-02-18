import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import ChatBotIcon from './chatbot'
// import c from './chatbot'
import Chattag from './component/chattag'
import ChatUI from './chatbot/ChatUI'

function App() {
  const [count, setCount] = useState(0)

  const [showChatbot, setShowChatbot] = useState(false)
  // const [formstate, setformstate]=useState(false)


  const handlebotclick = () => {
    setShowChatbot(true)
    console.log("chatbot clicked");

  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>

      </div>
      {/* <div>
        {showChatbot ? <div className='absolute right-0 bottom-0'>

          <Chattag />

        </div> : <div className=''
          onClick={handlebotclick}>

          <img className='absolute  right-0 bottom-0 rounded-full object-cover hover:shadow-2xl hover:scale-90 duration-300 animate-bounce cursor-pointer '
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD
          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" alt="" />
        </div>}

      </div> */}


      <ChatUI/>
    </>
  )
}

export default App
