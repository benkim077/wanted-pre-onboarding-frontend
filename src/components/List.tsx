import React from 'react';
import { TodoItem } from '@Types/todo';

interface ListProps<T> {
  list: Array<T>;
  renderItem?: (item: T) => React.ReactNode;
}

export default function List<T>({ list, renderItem }: ListProps<T>) {
  return (
    <ul>
      {list.map((item, index) => {
        if (renderItem) {
          return <span key={index}>{renderItem(item)}</span>;
        }
        return <span>{String(item)}</span>;
      })}
    </ul>
  );
}
