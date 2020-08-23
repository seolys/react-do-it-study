import React from 'react';
import PropTypes from 'prop-types';

class LoadingProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = { loading: false };
    this.setLoading = this.setLoading.bind(this);
    console.log('LoadingProvider', 'this.state', this.state);
    console.log('LoadingProvider', 'this.setLoading', this.setLoading);
  }

  getChildContext() {
    console.log('getChildContext', {
      loading: this.state.loading,
      setLoading: this.setLoading,
    });
    return {
      loading: this.state.loading,
      setLoading: this.setLoading,
    };
  }

  setLoading(loading) {
    this.setState({ loading });
  }

  render() {
    return this.props.children;
  }
}

LoadingProvider.childContextTypes = {
  loading: PropTypes.bool,
  setLoading: PropTypes.func,
};

export default LoadingProvider;
