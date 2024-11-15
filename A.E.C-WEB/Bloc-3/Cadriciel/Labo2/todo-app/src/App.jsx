import React, { useState } from 'react';
import Header from './component/Header';
import TodoForm from './component/TodoForm';
import TodoList from './component/TodoList';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Faire les courses', isCompleted: false, isArchived: false },
    { id: 2, text: 'Réviser pour l\'examen', isCompleted: false, isArchived: false },
    { id: 3, text: 'Faire du sport', isCompleted: true, isArchived: false },
  ]);
  const [searchText, setSearchText] = useState('');

  const addTask = (text) => {
    setTasks([...tasks, { id: Date.now(), text, isCompleted: false, isArchived: false }]);
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    ));
  };

  const toggleArchive = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, isArchived: !task.isArchived } : task
    ));
  };

  const filteredTasks = tasks.filter(task => 
    task.text.toLowerCase().includes(searchText.toLowerCase()) && !task.isArchived
  );

  return (
    <div className="appContainer">
      <Header />
      <TodoForm addTask={addTask} setSearchText={setSearchText} />
      <TodoList tasks={filteredTasks} toggleComplete={toggleComplete} toggleArchive={toggleArchive} />
    </div>
  );
}

export default App;
