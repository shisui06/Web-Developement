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
    <div>
      <input 
        type="text" 
        placeholder="Ajouter une tâche" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
      />
      <button onClick={handleAdd}>Ajouter</button>
      <input 
        type="text" 
        placeholder="Rechercher des tâches" 
        onChange={handleSearch} 
      />
    </div>
  );
}

export default TodoForm;
