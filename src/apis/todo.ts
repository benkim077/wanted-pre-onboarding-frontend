import { AxiosResponse } from 'axios';
import instance from './instance';
import { TodoItem } from '@Types/todo';

export const createTodo = async (todo: string): Promise<AxiosResponse<TodoItem>> => {
  const res = await instance.post(
    '/todos',
    { todo },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    }
  );

  return res;
};

export const getTodos = async (): Promise<AxiosResponse<TodoItem[]>> => {
  const res = await instance.get('/todos', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
  });

  return res;
};

export const updateTodo = async (id: number, todo: string, isCompleted: boolean): Promise<AxiosResponse<TodoItem>> => {
  const res = await instance.put(
    `todos/${id}`,
    { todo, isCompleted },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    }
  );

  return res;
};
