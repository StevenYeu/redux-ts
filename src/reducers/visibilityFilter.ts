import { ISetVisibilityFilter, VisibiliterFilter } from './../actions/visibilityFilter';
import { SET_VISIBILITY_FILTER } from './../constants/actionTypes';

const visibiilityFilter: (state: string, action: ISetVisibilityFilter) => string = (
  state = VisibiliterFilter.SHOW_ALL,
  action
) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export default visibiilityFilter;
