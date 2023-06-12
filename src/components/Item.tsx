import React, { useState } from 'react';
import { TodoItem } from '@Types/todo';

interface ItemProps {
  item: TodoItem;
  handleUpdateTodo: (id: number, todo: string, isCompleted: boolean) => () => void;
  handleDeleteTodo: (id: number) => () => void;
}

export default function Item({ item, handleUpdateTodo, handleDeleteTodo }: ItemProps) {
  const { id, todo, isCompleted } = item;

  const [inputTodo, setInputTodo] = useState(todo);

  const handleNewTodoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputTodo(event.target.value);
  };

  const [isModificationMode, setIsModificationMode] = useState(false);

  const handleUpdateButtonClick = () => {
    setIsModificationMode(!isModificationMode);
  };

  const handleSubmitButtonClick = () => {
    handleUpdateTodo(id, inputTodo, isCompleted)();

    setIsModificationMode(!isModificationMode);
  };

  const handleCancelButtonClick = () => {
    setInputTodo(todo);

    setIsModificationMode(!isModificationMode);
  };

  return (
    <li>
      {isModificationMode && (
        <>
          <label>
            <input type='checkbox' defaultChecked={isCompleted} onClick={handleUpdateTodo(id, todo, !isCompleted)} />
            <input type='text' value={inputTodo} onChange={handleNewTodoChange} data-testid='modify-input' />
          </label>
          <button type='button' data-testid='submit-button' onClick={handleSubmitButtonClick}>
            제출
          </button>
          <button type='button' data-testid='cancel-button' onClick={handleCancelButtonClick}>
            취소
          </button>
        </>
      )}

      {!isModificationMode && (
        <>
          <label>
            <input type='checkbox' defaultChecked={isCompleted} onClick={handleUpdateTodo(id, todo, !isCompleted)} />
            {!isModificationMode && <span>{item.todo}</span>}
          </label>
          <button type='button' data-testid='modify-button' onClick={handleUpdateButtonClick}>
            수정
          </button>
          <button type='button' data-testid='delete-button' onClick={handleDeleteTodo(item.id)}>
            삭제
          </button>
        </>
      )}
    </li>
  );
}
