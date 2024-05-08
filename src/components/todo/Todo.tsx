"use client"
import React, { useState } from 'react';

interface Todo {
  id: number;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  completed: boolean;
}

const TodoComponent: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');

  const addTodo = () => {
    if (title.trim() !== '' && description.trim() !== '' && endDate.trim() !== '' && startDate.trim() !== '') {
      const newTodo: Todo = {
        id: todos.length + 1,
        title,
        description,
        startDate,
        endDate,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setTitle('');
      setDescription('');
      setStartDate('');
      setEndDate('');
    }
  };

  const toggleTodo = (id: number) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const removeTodo = (id: number) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Add Blog</h2>
      <div className="mb-4">
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Title"
          className="px-3 py-2 border rounded mb-2 w-full focus:outline-none"
        />
        <textarea
          value={description}
          onChange={e => setDescription(e.target.value)}
          placeholder="Description"
          className="px-3 py-2 border rounded mb-2 w-full focus:outline-none"
        />

        {/* <select
          value={priority}
          onChange={e => setPriority(e.target.value as 'low' | 'medium' | 'high')}
          className="px-3 py-2 border rounded mb-2 w-full focus:outline-none"
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select> */}
        <input
          type="date"
          value={startDate}
          onChange={e => setStartDate(e.target.value)}
          placeholder="Start Date"
          className="px-3 py-2 border rounded mb-2 w-full focus:outline-none"
        />
        <input
          type="date"
          value={endDate}
          onChange={e => setEndDate(e.target.value)}
          placeholder="End Date"
          className="px-3 py-2 border rounded mb-2 w-full focus:outline-none"
        />
        <button onClick={addTodo} className="px-4 py-2 bg-orange-500 text-white rounded">
          +
        </button>
      </div>
      <ul>
        {todos.map(todo => (
          <li key={todo.id} className="flex items-center mb-4">
            <div className="bg-gray-100 p-4 rounded shadow-md w-full">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
                className="mr-2"
              />
              <div>
                <h3 className={`text-xl font-bold ${todo.completed ? 'line-through text-gray-500' : ''}`}>
                  {todo.title}
                </h3>
                <p className="text-gray-600 mb-2">{todo.description}</p>
                <p className="text-sm text-gray-500">Start Date : {todo.startDate}</p>
                <p className="text-sm text-gray-500">End Date: {todo.endDate}</p>
              </div>
              <button
                onClick={() => removeTodo(todo.id)}
                className="ml-auto px-2 py-1 bg-orange-500 text-white rounded"
              >
                x
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoComponent;
