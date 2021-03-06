import { createStore } from 'redux';
import { combinedReducer } from '../reducers/index';
import { initialAppState } from './../constants/state';

const store = createStore(
  combinedReducer,
  initialAppState,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
