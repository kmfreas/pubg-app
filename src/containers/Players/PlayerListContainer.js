import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PlayerListItemContainer from '~/containers/Players/PlayerListItemContainer';
import { handleAddPlayers } from '~/redux/players';
import { handleAddMatch } from '~/redux/matches';
import NoPlayersMessage from '~/components/Players/NoPlayersMessage';

class PlayerListContainer extends Component {
  static propTypes = {
    players: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    navigation: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
    };
  }

  handleRefresh = () => {
    this.setState({
      refreshing: true,
    });
    this.props.dispatch(handleAddPlayers())
      .then(() => {
        Object.keys(this.props.players).forEach((key) => {
          const matches = this.props.players[key].relationships.matches.data.splice(0, 2);
          matches.forEach(({ id }) => {
            this.props.dispatch(handleAddMatch(id, this.props.players[key].attributes.name));
          });
        });
      })
      .then(this.setState({
        refreshing: false,
      }));
  }

  renderItem = ({ item: key }) => {
    return (
      <PlayerListItemContainer
        player={this.props.players[key]}
        key={key}
        navigation={this.props.navigation}
      />
    );
  }

  render() {
    return (
      <FlatList
        data={Object.keys(this.props.players)}
        renderItem={this.renderItem}
        onRefresh={this.handleRefresh}
        keyExtractor={item => item}
        refreshing={this.state.refreshing}
        ListEmptyComponent={<NoPlayersMessage/>}
      />
    );
  }
}

function mapStateToProps({ players }) {
  return {
    players,
  };
}

export default connect(mapStateToProps)(PlayerListContainer);
