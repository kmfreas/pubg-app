import React, { Component } from 'react';
import { withMappedNavigationProps } from 'react-navigation-props-mapper';
import PropTypes from 'prop-types';
import Match from '~/components/Matches/Match';

@withMappedNavigationProps()
class MatchContainer extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
  };
  render() {
    return (
      <Match match={this.props.match}/>
    );
  }
}

export default MatchContainer;
