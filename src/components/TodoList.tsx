import * as React from 'react';
import { ITodos } from 'src/constants/state';
import Todo from './Todo';

export interface ITodoListProps {
  todos: ITodos[];
  toggleTodo: (id: number) => void;
}

const TodoList: React.FunctionComponent<ITodoListProps> = ({ todos, toggleTodo }) => {
  return (
    <ul>
      {todos.map(todo => {
        const onClick = () => toggleTodo(todo.id);
        return <Todo key={todo.id} {...todo} onClick={onClick} />;
      })}
    </ul>
  );
};

export default TodoList;
