import React, { useState, useEffect } from 'react';
import { useNavigate, useLoaderData } from 'react-router-dom';
import { TodoItem } from '@Types/todo';
import List from '@Components/List';
import { createTodo, getTodos, updateTodo } from '@Apis/todo';

export default function Todo() {
  const initial_todos = useLoaderData() as TodoItem[];
  const [todos, setTodos] = useState(initial_todos);

  const [newTodo, setNewTodo] = useState('');

  const handleNewTodoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { data } = await createTodo(newTodo);

    setTodos([...todos, data]);
  };

  const handleTodoChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const id = Number(event.target.dataset.id);

    const updatedTodo = todos.find((todo) => todo.id === id);

    if (!updatedTodo) {
      return;
    }

    const { data } = await updateTodo(id, updatedTodo.todo, !updatedTodo.isCompleted);

    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return data;
      }
      return todo;
    });

    setTodos(updatedTodos);
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
            <li>
              <label>
                <input type='checkbox' data-id={item.id} value={String(item.isCompleted)} onChange={handleTodoChange} />
                <span>{item.todo}</span>
              </label>
            </li>
          );
        }}
      />
    </>
  );
}

export const loader = async () => {
  const { data } = await getTodos();

  return data;
};
