import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { IToggleTodo, toggleTodo } from '../actions/todo';
import { VisibiliterFilter } from '../actions/visibilityFilter';
import TodoList from '../components/TodoList';
import { AppState, ITodos } from '../constants/state';

const getVisibleTodos: (todos: ITodos[], filter: string) => ITodos[] = (todos, filter) => {
  switch (filter) {
    case VisibiliterFilter.SHOW_ALL:
      return todos;
    case VisibiliterFilter.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed);
    case VisibiliterFilter.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed);
    default:
      throw new Error('Unknow filter ' + filter);
  }
};

function mapStateToProps(state: AppState) {
  return {
    todos: getVisibleTodos(state.todo, state.visibilityFilter)
  };
}

function mapDispatchToProps(dispatch: Dispatch<IToggleTodo>) {
  return {
    toggleTodo: (id: number) => dispatch(toggleTodo(id))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
