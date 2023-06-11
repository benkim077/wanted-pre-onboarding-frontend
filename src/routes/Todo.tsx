import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { TodoItem } from '@Types/todo';
import List from '@Components/List';

export default function Todo() {
  const [todos, setTodos] = useState<TodoItem[]>([
    { id: 1, todo: 'Buy milk', isCompleted: false, userId: 1 },
    { id: 2, todo: 'Buy eggs', isCompleted: false, userId: 1 },
    { id: 3, todo: 'Buy bread', isCompleted: false, userId: 1 },
  ]);

  const [newTodo, setNewTodo] = useState('');

  const handleNewTodoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');

    if (!accessToken) {
      navigate('/signin');
    }
  }, [navigate]);

  return (
    <>
      <h1>Todo</h1>
      <input type='text' placeholder='할 일 입력' data-testid='new-todo-input' value={newTodo} onChange={handleNewTodoChange} />
      <button type='button' data-testid='new-todo-add-button'>
        추가
      </button>
      <List
        list={todos}
        renderItem={(item) => {
          return (
            <label>
              <input type='checkbox' value={String(item.isCompleted)} />
              <span>{item.todo}</span>
            </label>
          );
        }}
      />
    </>
  );
}
