import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="container">
        <div id=item-1 class="item">Q1</div>
        <div id=item-2 lass="item">Q2</div>
        <div id=item-3 lass="item">Q3</div>
        <div id=item-4 class="item">Q4</div>
      </div>
    </>
  )
}

export default App
