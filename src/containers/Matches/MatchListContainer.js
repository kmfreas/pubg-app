import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import MatchListItem from '~/components/Matches/MatchListItem';
import PropTypes from 'prop-types';
import { handleAddMatch } from '~/redux/matches';
import moment from 'moment';

class MatchListContainer extends Component {
  static propTypes = {
    player: PropTypes.object.isRequired,
    navigation: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    matches: PropTypes.object.isRequired,
  }
  componentDidMount = () => {
    this.setState({
      timeInterval: setInterval(this.refreshTimes, 1000),
      times: {},
    });
    this.loadMatches();
  }
  componentWillUnmount = () => {
    clearInterval(this.state.timeInterval);
  }
  refreshTimes = () => {
    const times = Object.keys(this.props.matches).reduce((accumulator, key) => {
      if (!this.props.matches[key].error) {
        accumulator[key] = moment(this.props.matches[key].info.time).fromNow();
      }
      return accumulator;
    }, {});
    this.setState({
      times,
    });
  }
  loadMatches = () => {
    const matches = this.props.player.relationships.matches.data.splice(0, 2);
    matches.forEach(({ id }) => {
      this.props.dispatch(handleAddMatch(id, this.props.player.attributes.name));
    });
  }
  viewMatch = (key) => {
    this.props.navigation.navigate('ViewMatch', {
      match: this.props.matches[key],
    });
  }
  render() {
    return (
      <Fragment>
        {
          Object.keys(this.props.matches).map((key) => {
            return <MatchListItem
              key={key}
              match={this.props.matches[key]}
              handler={this.viewMatch}
              time={this.state.times[key] || '...'}
            />;
          })
        }
      </Fragment>
    );
  }
}

function mapStateToProps({ matches }, { player }) {
  return {
    matches: matches[player.attributes.name] || {},
  };
}

export default connect(mapStateToProps)(MatchListContainer);
