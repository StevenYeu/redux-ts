import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { IAddTodo } from '../actions/todo';
import { addTodo } from '../actions/todo';

export interface IAddTodoProps {
  onSubmit: (input: string) => void;
}

function mapDispatchToProps(dispatch: Dispatch<IAddTodo>) {
  return {
    onSubmit: (input: string) => dispatch(addTodo(input))
  };
}

const AddTodo: React.FunctionComponent<IAddTodoProps> = ({ onSubmit }) => {
  let input: HTMLInputElement;
  const mySubmit: (e: React.FormEvent<HTMLFormElement>) => void = e => {
    e.preventDefault();
    onSubmit(input.value);
    input.value = '';
  };
  return (
    <div>
      <form onSubmit={mySubmit}>
        <input ref={node => (input = node as HTMLInputElement)} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default connect(
  null,
  mapDispatchToProps
)(AddTodo);
