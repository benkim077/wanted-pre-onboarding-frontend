import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { TodoItem } from '@Types/todo';
import List from '@Components/List';
import Item from '@Components/Item';
import { createTodo, getTodos, updateTodo, deleteTodo } from '@Apis/todo';

export default function Todo() {
  const [todos, setTodos] = useState<TodoItem[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const { data, status } = await getTodos();

        if (status === 401) {
          throw new Error('Unauthorized');
        }

        setTodos(data);
      } catch (error) {
        console.error(error);
        navigate('/signin');
      }
    };

    fetchTodos();
  }, []);

  const [newTodo, setNewTodo] = useState('');

  const handleNewTodoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { data } = await createTodo(newTodo);

    setTodos([...todos, data]);
  };

  const handleUpdateTodo = (id: number, todo: string, isCompleted: boolean) => {
    return async () => {
      const { data } = await updateTodo(id, todo, isCompleted);

      const updatedTodos = todos.map((todo) => {
        if (todo.id === id) {
          return data;
        }
        return todo;
      });

      setTodos(updatedTodos);
    };
  };

  const handleDeleteTodo = (id: number) => {
    return async () => {
      await deleteTodo(id);

      const remainedTodo = todos.filter((todo) => todo.id !== id);

      setTodos(remainedTodo);
    };
  };

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
          return <Item key={item.id} item={item} handleUpdateTodo={handleUpdateTodo} handleDeleteTodo={handleDeleteTodo} />;
        }}
      />
    </>
  );
}
