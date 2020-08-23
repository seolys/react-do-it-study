import React from 'react';
import PropTypes from 'prop-types';
import Button from '../04/Button';
import withLoadingContext from './withLoadingContext';

function ButtonWithLoadingContext(context) {
  const { label, loading, setLoading } = context;
  console.log(label, loading, setLoading);
  console.log('context : ', context);
  return <Button onPress={() => setLoading(!loading)}>{loading ? '로딩중' : label}</Button>;
}

ButtonWithLoadingContext.propTypes = {
  label: PropTypes.string,
  loading: PropTypes.bool,
  setLoading: PropTypes.func,
};

export default withLoadingContext(ButtonWithLoadingContext);
