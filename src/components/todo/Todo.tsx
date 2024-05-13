"use client"
import React, { useState } from 'react';

interface Todo {
  id: number;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  image: File | null;
  completed: boolean;
}

const TodoComponent = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');
  const [image, setImage] = useState<File | null>(null);

  const addTodo = () => {
    if (title.trim() !== '' && description.trim() !== '' && endDate.trim() !== '' && startDate.trim() !== '') {
      const newTodo: Todo = {
        id: todos.length + 1,
        title,
        description,
        startDate,
        endDate,
        image,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setTitle('');
      setDescription('');
      setStartDate('');
      setEndDate('');
      setImage(null);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Send todos data to backend
    console.log('Sending todos data:', todos);
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Add Todo</h2>
      <form onSubmit={handleSubmit}>
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
          <input
            type="file"
            onChange={e => setImage(e.target.files ? e.target.files[0] : null)}
            accept="image/*"
            className="px-3 py-2 border rounded mb-2 w-full focus:outline-none"
          />
          <button type="submit" className="px-4 py-2 bg-orange-500 text-white rounded mr-2">
            Save
          </button>
          <button type="button" onClick={addTodo} className="px-4 py-2 bg-orange-500 text-white rounded">
            Add
          </button>
        </div>
      </form>
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
                {todo.image && (
                  <img src={URL.createObjectURL(todo.image)} alt="Todo Image" className="mt-2" style={{ maxWidth: '100%' }} />
                )}
              </div>
              <button
                onClick={() => removeTodo(todo.id)}
                className="ml-auto px-2 py-1 bg-red-700 text-white rounded"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoComponent;
