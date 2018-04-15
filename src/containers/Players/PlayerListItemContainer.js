import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { handleAddPlayers } from '~/redux/players';
import MatchListContainer from '~/containers/Matches/MatchListContainer';
import PlayerListItemHeader from '~/components/Players/PlayerListItemHeader';

class PlayerListItemContainer extends Component {
  static propTypes = {
    player: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    navigation: PropTypes.object.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
  }
  componentDidMount = () => {
    this.props.dispatch(handleAddPlayers());
  }
  collapse = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    return (
      <Fragment>
        <PlayerListItemHeader
          name={this.props.player.attributes.name}
          collapsed={this.state.collapsed}
          handler={this.collapse}
        />
        <MatchListContainer
          player={this.props.player}
          collapsed={this.state.collapsed}
          navigation={this.props.navigation}
        />
      </Fragment>
    );
  }
}

export default connect()(PlayerListItemContainer);
