import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <div id= "item1" class="item">Q1</div>
        <div id= "item2" class="item">Q2</div>
        <div id= "item3" class="item">Q3</div>
        <div id= "item4" class="item">Q4</div>
      </div>
    </>
  )
}

export default App
