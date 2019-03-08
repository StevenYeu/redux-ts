import * as React from 'react';
import { VisibiliterFilter } from '../actions/visibilityFilter';
import FilterLink from '../containers/FilterLink';

const Footer: React.FunctionComponent = () => {
  return (
    <div>
      <span>Show: </span>
      <FilterLink filter={VisibiliterFilter.SHOW_ALL}>All</FilterLink>
      <FilterLink filter={VisibiliterFilter.SHOW_ACTIVE}>Active</FilterLink>
      <FilterLink filter={VisibiliterFilter.SHOW_COMPLETED}>Completed</FilterLink>
    </div>
  );
};

export default Footer;
