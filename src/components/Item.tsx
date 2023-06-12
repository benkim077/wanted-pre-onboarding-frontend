import React from 'react';
import { TodoItem } from '@Types/todo';

interface ItemProps {
  item: TodoItem;
  handleTodoChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleDeleteTodo: (id: number) => () => void;
}

export default function Item({ item, handleTodoChange, handleDeleteTodo }: ItemProps) {
  return (
    <li>
      <label>
        <input type='checkbox' data-id={item.id} value={String(item.isCompleted)} onChange={handleTodoChange} />
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
