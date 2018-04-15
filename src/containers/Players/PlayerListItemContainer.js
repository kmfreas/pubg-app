import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PlayerListItem from '~/components/Players/PlayerListItem';
import { handleAddPlayers } from '~/redux/players';
import MatchListContainer from '~/containers/Matches/MatchListContainer';

class PlayerListItemContainer extends Component {
  static propTypes = {
    player: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    navigation: PropTypes.object.isRequired,
  }
  componentDidMount = () => {
    this.props.dispatch(handleAddPlayers());
  }
  render() {
    return (
      <PlayerListItem
        player={this.props.player}
        name={this.props.player.attributes.name}
        footer={<MatchListContainer player={this.props.player} navigation={this.props.navigation}/>}
      />
    );
  }
}

export default connect()(PlayerListItemContainer);
