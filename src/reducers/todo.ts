import { ITodos } from 'src/constants/state';
import { IAddTodo, IToggleTodo, TodoAction } from './../actions/todo';
import { ADD_TODO, TOGGLE_TODO } from './../constants/actionTypes';

const todoReducer: (state: ITodos[], action: TodoAction) => ITodos[] = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      const add = action as IAddTodo;
      return state.concat([{ id: add.id, text: add.text, completed: false }]);
    case TOGGLE_TODO:
      const toggleAction = action as IToggleTodo;
      return state.map(todo => {
        return todo.id === toggleAction.id ? { ...todo, completed: !todo.completed } : todo;
      });
    default:
      return state;
  }
};

export default todoReducer;
