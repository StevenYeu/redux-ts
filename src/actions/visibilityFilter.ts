import { SET_VISIBILITY_FILTER } from './../constants/actionTypes';
export interface ISetVisibilityFilter {
  type: string;
  filter: string;
}

export const VisibiliterFilter = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};

export const setVisibilityFilter: (filter: string) => ISetVisibilityFilter = filter => {
  return {
    type: SET_VISIBILITY_FILTER,
    filter
  };
};
