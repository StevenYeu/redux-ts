import * as React from 'react';

export interface TodoProps {
  onClick: () => void;
  completed: boolean;
  text: string;
}

const Todo: React.FunctionComponent<TodoProps> = ({ onClick, completed, text }) => {
  return (
    <li onClick={onClick} style={{ textDecoration: completed ? 'line-through' : 'none' }}>
      {text}
    </li>
  );
};

export default Todo;
