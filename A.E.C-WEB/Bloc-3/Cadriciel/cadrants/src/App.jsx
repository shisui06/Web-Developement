import React from 'react';
import Quadrant from './components/Quadrant';
import './App.css';

const App = () => {
  return (
    <div className="flex-container">
      <Quadrant backgroundColor="#F4538A">Quadrant 1</Quadrant>
      <Quadrant backgroundColor="#FAA300">Quadrant 2</Quadrant>
      <Quadrant backgroundColor="#F5DD61">Quadrant 3</Quadrant>
      <Quadrant backgroundColor="#59D5E0">Quadrant 4</Quadrant>
    </div>
  );
};

export default App;
