import React from 'react';
import { TodoItem } from '@Types/todo';

interface ItemProps {
  item: TodoItem;
  handleUpdateTodo: (id: number, todo: string, isCompleted: boolean) => () => void;
  handleDeleteTodo: (id: number) => () => void;
}

export default function Item({ item, handleUpdateTodo, handleDeleteTodo }: ItemProps) {
  const { id, todo, isCompleted } = item;

  return (
    <li>
      <label>
        <input type='checkbox' checked={isCompleted} onClick={handleUpdateTodo(id, todo, !isCompleted)} />
        <span>{item.todo}</span>
      </label>
      <button type='button' data-testid='modify-button'>
        수정
      </button>
      <button type='button' data-testid='delete-button' onClick={handleDeleteTodo(item.id)}>
        삭제
      </button>
    </li>
  );
}
