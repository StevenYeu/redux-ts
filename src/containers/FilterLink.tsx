import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AppState } from 'src/constants/state';
import { ISetVisibilityFilter, setVisibilityFilter } from '../actions/visibilityFilter';
import Link from '../components/Link';

export interface IFilterLinkOwnProps {
  filter: string;
}

export interface IFilterLinkProps {
  active: boolean;
}

const mapStateToProps: (state: AppState, ownProps: IFilterLinkOwnProps) => IFilterLinkProps = (
  state,
  ownProps
) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  };
};

function mapDispatchToProps(
  dispatch: Dispatch<ISetVisibilityFilter>,
  ownProps: IFilterLinkOwnProps
) {
  return {
    onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);
