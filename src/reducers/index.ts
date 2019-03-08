import { combineReducers } from 'redux';
import { ArticleAction } from '../actions/index';
import { ADD_ARTICLE } from './../constants/actionTypes';
import todo from './todo';
import visibilityFilter from './visibilityFilter';
export interface State {
  articles: any[];
}

const intialState = {
  articles: []
};

const rootReducer: (state: State, action: ArticleAction) => State = (
  state = intialState,
  action
) => {
  switch (action.type) {
    case ADD_ARTICLE:
      return { ...state, articles: state.articles.concat(action.payload) };
    default:
      return state;
  }
};

export const combinedReducer = combineReducers({ todo, visibilityFilter });

export default rootReducer;
