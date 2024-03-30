// components/TodoList.tsx

import React from 'react';
import Todo, { Todo as TodoType } from './Todo';

interface TodoListProps {
  todos: TodoType[];
  toggleTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo }) => {
  return (
    <ul>
      {todos.map(todo => (
        <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </ul>
  );
};

export default TodoList;
