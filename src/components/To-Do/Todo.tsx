// components/Todo.tsx

import React from 'react';

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoProps {
  todo: Todo;
  toggleTodo: (id: number) => void;
}

const Todo: React.FC<TodoProps> = ({ todo, toggleTodo }) => {
  return (
    <li style={{ textDecoration: todo.completed ? 'line-through' : 'none' }} onClick={() => toggleTodo(todo.id)}>
      {todo.text}
    </li>
  );
};

export default Todo;
