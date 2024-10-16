import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <nav>
          <div classname="logo">
             <img src="/images/brand_logo.png" alt="logo" />
          </div>
          <ul>
            <li>Menu</li>
            <li>Location</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          
          <button>Login</button>
        </nav>
       
      </div>
  
      
        
      
      
    </>
  )
}

export default App
