import * as React from 'react';
import { connect } from 'react-redux';
import { State } from '../reducers/index';

export interface ListProps {
  articles: any[];
}

const mapStateToProps: (state: State) => ListProps = state => {
  return { articles: state.articles };
};

const ConnectedList: React.FunctionComponent<ListProps> = ({ articles }) => {
  return (
    <ul className="list-group list-group-flush">
      {articles.map(el => (
        <li className="list-group-item" key={el.id}>
          {el.title}
        </li>
      ))}
    </ul>
  );
};

const List = connect(mapStateToProps)(ConnectedList);

export default List;
