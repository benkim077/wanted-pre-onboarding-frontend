import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { TodoItem } from '@Types/todo';
import List from '@Components/List';
import { createTodo } from '@Apis/todo';

export default function Todo() {
  const [todos, setTodos] = useState<TodoItem[]>([]);

  const [newTodo, setNewTodo] = useState('');

  const handleNewTodoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { data } = await createTodo(newTodo);

    setTodos([...todos, data]);
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
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='할 일 입력' data-testid='new-todo-input' value={newTodo} onChange={handleNewTodoChange} />
        <button type='submit' data-testid='new-todo-add-button'>
          추가
        </button>
      </form>
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
