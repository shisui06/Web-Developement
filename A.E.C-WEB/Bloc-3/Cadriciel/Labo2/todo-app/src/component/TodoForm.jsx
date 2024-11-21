import React, { useState } from 'react';

function TodoForm({ addTask, setSearchText }) {
  const [input, setInput] = useState('');

  const handleAdd = () => {
    if (input.trim()) {
      addTask(input);
      setInput('');
    }
  };

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div className="input">
      <input 
        type="text" 
        className="input-field" 
        id="todoInput"
        placeholder="Ajouter une tâche" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
      />
      <button className="btn" onClick={handleAdd}>Ajouter</button>

    
      <input 
        type="text" 
        className="input-field" 
        id="searchInput"
        placeholder="Rechercher une tâche..." 
        onChange={handleSearch} 
      />
    </div>
  );
}

export default TodoForm;