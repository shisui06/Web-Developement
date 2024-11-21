import React from 'react';
import styles from './TodoItem.module.css';
import { FaCheckCircle, FaArchive } from 'react-icons/fa'; 

function TodoItem({ task, toggleComplete, toggleArchive }) {
  return (
    <li className={`${styles.task} ${task.isCompleted ? styles.completed : ''} ${task.isArchived ? styles.archived : ''}`} 
        style={{ 
          textDecoration: task.isCompleted ? 'line-through' : 'none',
          opacity: task.isArchived ? 0.5 : 1,
          backgroundColor: task.isArchived ? '#e0e0e0' : '#f0f0f0'
        }}>
      
      <div onClick={() => toggleComplete(task.id)} className={styles.checkmark}>
        {task.isCompleted && <span className={styles.animatedCheckmark}></span>}
        <FaCheckCircle 
          className={task.isCompleted ? styles.checkedIcon : styles.uncheckedIcon} 
        />
      </div>
      <span>{task.text}</span>
  
      <div onClick={() => toggleArchive(task.id)} className={styles.iconContainer}>
        <FaArchive className={styles.archiveIcon} />
      </div>
    </li>
  );
}

export default TodoItem;