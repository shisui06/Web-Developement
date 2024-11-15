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
        class="input-field" 
        id="todoInput"
        placeholder="Ajouter une tâche" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
      />
      <button class="btn" onClick={handleAdd}>Ajouter</button>
      
    </div>
  );
}

export default TodoForm;
