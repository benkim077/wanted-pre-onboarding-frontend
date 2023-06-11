import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { TodoItem } from '@Types/todo';
import List from '@Components/List';

export default function Todo() {
  const todos: TodoItem[] = [
    { id: 1, todo: 'Buy milk', isCompleted: false, userId: 1 },
    { id: 2, todo: 'Buy eggs', isCompleted: false, userId: 1 },
    { id: 3, todo: 'Buy bread', isCompleted: false, userId: 1 },
  ];

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
      <List
        list={todos}
        renderItem={(item) => {
          return (
            <li>
              <label>
                <input type='checkbox' value={String(item.isCompleted)} />
                <span>{item.todo}</span>
              </label>
            </li>
          );
        }}
      />
    </>
  );
}
