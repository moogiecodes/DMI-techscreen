/*
 * HomePage container for grocery foods list
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet'; // for SEO in multiple headers
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectFoodItems } from './selectors';
import messages from './messages';
import {
  loadFoods,
  loadFoodSuccess,
  loadFoodsError
}
  from './actions';
import reducer from './reducer';
import saga from './saga';

const key = 'home';

export default function ListContainer({ loading, error, foodItems }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  return (
    <div>
      <Helmet>
        <title>Grocery Foods List</title>
        <meta name="description" content="list container on app homepage" />
      </Helmet>
      <h1>
        <FormattedMessage {...messages.header} />
      </h1>
    </div>
  );
}

// const reposListProps = {
//   loading,
//   error,
//   repos,
// };

ListContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  foodItems: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

const mapStateToProps = createStructuredSelector({
  foodItems: makeSelectFoodItems(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    loadFoods: dispatch()
  }
}

// export function mapDispatchToProps(dispatch) {
//   return {
//     onSubmitForm: evt => {
//       if (evt !== undefined && evt.preventDefault) evt.preventDefault();
//       dispatch(loadFoods());
//     },
//   };
// }

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);
