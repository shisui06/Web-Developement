import { useState } from 'react';
import { FaMobileAlt, FaGithub } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
import './App.css';
import * as React from 'react';
import Avatar from 'react-avatar';

function App() {
  return (
    div
      <h1>Tamoor Younas</h1>
      <h3>Étudiant en developement web</h3>
      <div>
        <Avatar name="Foo Bar" />
      </div>
        <FaMobileAlt style={{ fontSize: '50px', color: 'white' }} />
        <FaGithub style={{ fontSize: '50px', color: 'white' }} />
        <MdEmail style={{ fontSize: '50px', color: 'white' }} />
      </div>
    </div>
  );
}


export default App; 