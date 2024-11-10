import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ tasks, toggleComplete, toggleArchive }) {
  return (
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
  );
}

export default TodoList;
