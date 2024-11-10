import React from 'react';
import styles from './TodoItem.module.css';

function TodoItem({ task, toggleComplete, toggleArchive }) {
  return (
    <li className={`${styles.task} ${task.isCompleted ? styles.completed : ''} ${task.isArchived ? styles.archived : ''}`}>
      <span>{task.text}</span>
      <button onClick={() => toggleComplete(task.id)}>
        {task.isCompleted ? 'Annuler' : 'Compléter'}
      </button>
      <button onClick={() => toggleArchive(task.id)}>
        {task.isArchived ? 'Désarchiver' : 'Archiver'}
      </button>
    </li>
  );
}

export default TodoItem;
