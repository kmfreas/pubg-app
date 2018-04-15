import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AddPlayerContainer from '~/containers/Players/AddPlayerContainer';
import PlayerManageItem from '~/components/Players/PlayerManageItem';
import { handleRemovePlayer } from '~/redux/players';

class ManagePlayersContainer extends Component {
  static propTypes = {
    players: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
  }
  removePlayer = (player) => {
    this.props.dispatch(handleRemovePlayer(player));
  }
  render() {
    return (
      <Fragment>
        <AddPlayerContainer />
        {
          Object.keys(this.props.players).map((key) => {
            return <PlayerManageItem
              key={key}
              name={this.props.players[key].attributes.name}
              handler={() => this.removePlayer(key)}
            />;
          })
        }
      </Fragment>
    );
  }
}

function mapStateToProps({ players }) {
  return {
    players,
  };
}

export default connect(mapStateToProps)(ManagePlayersContainer);
