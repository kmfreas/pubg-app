import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AddPlayerForm from '~/components/Players/AddPlayerForm';
import { handleAddPlayers } from '~/redux/players';

class AddPlayerContainer extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  }

  addPlayer = (player) => {
    player = player.trim();
    this.props.dispatch(handleAddPlayers(player));
  }

  render() {
    return (
      <AddPlayerForm handler={this.addPlayer}/>
    );
  }
}

export default connect()(AddPlayerContainer);
