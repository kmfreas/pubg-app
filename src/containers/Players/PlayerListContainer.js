import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PlayerListItemContainer from '~/containers/Players/PlayerListItemContainer';

export class PlayerListContainer extends Component {
  static propTypes = {
    players: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
  }

  render() {
    return (
      <Fragment>
        {
          Object.keys(this.props.players)
            .map((key) => {
              return (
                <PlayerListItemContainer player={this.props.players[key]} key={key}/>
              );
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

export default connect(mapStateToProps)(PlayerListContainer);
