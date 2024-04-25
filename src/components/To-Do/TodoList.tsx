// components/ToDoList.tsx
"use client"

import { useState } from 'react';
import styles from './variables.module.scss';

const ToDoList = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [tasks, setTasks] = useState<string[]>(['Hit the gym', 'Pay bills', 'Meet George', 'Buy eggs', 'Read a book', 'Organize office']);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleAddTask = () => {
    if (inputValue.trim() === '') {
      alert("You must write something!");
      return;
    }
    setTasks([...tasks, inputValue]);
    setInputValue('');
  };

  const handleToggleTask = (index: number) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = updatedTasks[index].startsWith('✓ ') ? updatedTasks[index].slice(2) : '✓ ' + updatedTasks[index];
    setTasks(updatedTasks);
  };

  const handleRemoveTask = (index: number) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1); // Remove the task at the specified index
    setTasks(updatedTasks);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>My To Do List</h2>
        <div className={styles.inputWrapper}>
          <input
            type="text"
            placeholder="Title..."
            value={inputValue}
            onChange={handleInputChange}
            className={styles.input}
          />
          <button onClick={handleAddTask} className={styles.addBtn}>Add</button>
        </div>
      </div>

      <ul className={styles.list}>
        {tasks.map((task, index) => (
          <li
            key={index}
            className={`${styles.listItem} ${task.startsWith('✓ ') ? styles.checked : ''}`}
            onClick={() => handleToggleTask(index)}
          >
            {task}
            <span className={styles.close} onClick={() => handleRemoveTask(index)}>×</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;