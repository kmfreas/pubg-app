import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PlayerListItem from '~/components/Players/PlayerListItem';
import { handleAddMatch } from '~/redux/matches';

class PlayerListItemContainer extends Component {
  static propTypes = {
    player: PropTypes.object.isRequired,
    matches: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
  }
  componentDidMount() {
    this.loadMatches();
  }
  loadMatches = () => {
    const matches = this.props.player.relationships.matches.data.splice(0, 2);
    matches.forEach(({ id }) => {
      this.props.dispatch(handleAddMatch(id, this.props.name));
    });
  }
  render() {
    return (
      <PlayerListItem
        player={this.props.player}
        name={this.props.name}
        matches={this.props.matches || {}}
      />
    );
  }
}

function mapStateToProps({ matches }, { player }) {
  return {
    matches: matches[player.attributes.name] || {},
    name: player.attributes.name,
  };
}

export default connect(mapStateToProps)(PlayerListItemContainer);
