import { useState } from 'react';
import { FaMobileAlt, FaGithub } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
import './App.css';
import * as React from 'react';
import Avatar from 'react-avatar';

function App() {
  return (
    <div className="card">
       <div>
       <Avatar 
  src="/public/images/avatar.png" 
  size="100" 
  round={true} 
  alt="Tamoor Younas"
/>
      </div>
      <h1>Tamoor Younas</h1>


      <h3>Étudiant en développement web</h3>
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginTop: '20px' }}>
        <FaMobileAlt style={{ fontSize: '50px', color: '08C2FF' }} />
        <FaGithub style={{ fontSize: '50px', color: 'FF8C9E' }} />
        <MdEmail style={{ fontSize: '50px', color: 'E4B1F0' }} />
      </div>
    </div>
  );
}

export default App;
