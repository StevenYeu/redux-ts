import { ISetVisibilityFilter, VisibiliterFilter } from '../actions/visibilityFilter';
import { SET_VISIBILITY_FILTER } from '../constants/actionTypes';
import { Reducer } from 'redux';

const visibiilityFilter: Reducer<string> = (
  state = VisibiliterFilter.SHOW_ALL,
  action
) => {
  let filterAction = action as ISetVisibilityFilter
  switch (filterAction.type) {
    case SET_VISIBILITY_FILTER:
      return filterAction.filter;
    default:
      return state;
  }
};

export default visibiilityFilter;
