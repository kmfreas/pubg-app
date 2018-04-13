import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import StackNavigation from './StackNavigation';

class Navigation extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  };
  render() {
    return (
      <StackNavigation />
    );
  }
}


export default connect()(Navigation);
