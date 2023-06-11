import React from 'react';
import { TodoItem } from '@Types/todo';

interface ListProps<T> {
  list: Array<T>;
  renderItem?: (item: T) => React.ReactNode;
}

export default function List<T>({ list, renderItem }: ListProps<T>) {
  return (
    <ul>
      {list.map((item, idx) => {
        if (renderItem) {
          return <li key={idx}>{renderItem(item)}</li>;
        }
        return <li key={idx}>{String(item)}</li>;
      })}
    </ul>
  );
}
