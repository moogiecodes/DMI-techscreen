/**
 *
 * AddFoodContainer
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectAddFoodContainer from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function AddFoodContainer() {
  useInjectReducer({ key: 'addFoodContainer', reducer });
  useInjectSaga({ key: 'addFoodContainer', saga });

  return (
    <div>
      <Helmet>
        <title>AddFoodContainer</title>
        <meta name="description" content="Description of AddFoodContainer" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

AddFoodContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  addFoodContainer: makeSelectAddFoodContainer(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(AddFoodContainer);
