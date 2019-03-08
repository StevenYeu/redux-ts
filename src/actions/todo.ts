import { ADD_TODO, TOGGLE_TODO } from './../constants/actionTypes';
let nextTodo: number = 0;

export interface IAddTodo {
  type: string;
  id: number;
  text: string;
}

export interface IToggleTodo {
  type: string;
  id: number;
}

export type TodoAction = IAddTodo | IToggleTodo;

export const addTodo: (text: string) => IAddTodo = text => {
  return {
    type: ADD_TODO,
    id: nextTodo++,
    text
  };
};

export const toggleTodo: (id: number) => IToggleTodo = id => {
  return {
    type: TOGGLE_TODO,
    id
  };
};
