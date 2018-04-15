import React, { Component } from 'react';
import { withMappedNavigationProps } from 'react-navigation-props-mapper';
import PropTypes from 'prop-types';
import Match from '~/components/Matches/Match';
import { colors } from '~/styles';

@withMappedNavigationProps()
class MatchContainer extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
  };
  static navigationOptions = () => {
    return {
      headerBackTitleStyle: {
        color: 'white',
      },
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: colors.primary,
      },
    };
  }
  render() {
    return (
      <Match match={this.props.match}/>
    );
  }
}

export default MatchContainer;
