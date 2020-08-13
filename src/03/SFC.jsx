import React, { Component } from 'react';
import PropTypes from 'prop-types';

function SCF(props, context) {
  const { somePropValue } = props;
  const { someContextValue } = context;
  return <h1>hello, {somePropValue}</h1>;
}

SFC.propTypes = { somePropValue: PropTypes.any };
SFC.defalutProps = { somePropValue: 'default value' };

export default SFC;
