// pages/index.tsx
"use client"
import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import { Todo } from './Todo';

const IndexPage: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputText, setInputText] = useState<string>('');

  useEffect(() => {
    // Fetch initial todos from an API or local storage
    // For demonstration purposes, we'll just set some initial todos
    const initialTodos: Todo[] = [
      { id: 1, text: 'Learn React', completed: false },
      { id: 2, text: 'Build a Todo App', completed: true },
    ];
    setTodos(initialTodos);
  }, []); // Run only once on component mount

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const handleAddTodo = () => {
    if (inputText.trim() !== '') {
      const newTodo: Todo = {
        id: todos.length + 1,
        text: inputText,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setInputText('');
    }
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input type="text" value={inputText} onChange={handleInputChange} />
      <button onClick={handleAddTodo}>Add Todo</button>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </div>
  );
};

export default IndexPage;
