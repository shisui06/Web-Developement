import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ tasks, toggleComplete, toggleArchive, archivedTasks }) { 
  return (
    <div>
      <ul>
        {tasks.map(task => (
          <TodoItem 
            key={task.id} 
            task={task} 
            toggleComplete={toggleComplete} 
            toggleArchive={toggleArchive} 
          />
        ))}
      </ul>

      <h2>Tâche archiver</h2> 
      <ul>
        {archivedTasks.map(task => (
          <TodoItem 
            key={task.id} 
            task={task} 
            toggleComplete={toggleComplete} 
            toggleArchive={toggleArchive} 
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;