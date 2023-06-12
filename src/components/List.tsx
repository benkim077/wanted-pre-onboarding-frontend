import React from 'react';

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
