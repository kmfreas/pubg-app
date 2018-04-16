import React, { Component } from 'react';
import { withMappedNavigationProps } from 'react-navigation-props-mapper';
import PropTypes from 'prop-types';
import Match from '~/components/Matches/Match';
import { colors } from '~/styles';
import moment from 'moment';

@withMappedNavigationProps()
class MatchContainer extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
  };
  static navigationOptions = ({ navigation }) => {
    return {
      headerBackTitleStyle: {
        color: 'white',
      },
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: colors.primary,
      },
      headerTitle: moment(navigation.state.params.match.info.time).fromNow(),
    };
  }
  render() {
    return (
      <Match match={this.props.match}/>
    );
  }
}

export default MatchContainer;
