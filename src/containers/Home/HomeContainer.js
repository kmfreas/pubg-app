import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import HeaderButtons from 'react-navigation-header-buttons';
import Icon from 'react-native-vector-icons/Ionicons';
import NoPlayersMessage from '~/components/Players/NoPlayersMessage';
import PlayerListContainer from '~/containers/Players/PlayerListContainer';

class HomeContainer extends Component {
  static propTypes = {
    players: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: (
        <HeaderButtons IconComponent={Icon} iconSize={23} color="blue">
          <HeaderButtons.Item title="add" iconName="ios-search" onPress={() => navigation.navigate('AddPlayer')} />
        </HeaderButtons>
      ),
    };
  }

  render() {
    return (
      <Fragment>
        {Object.keys(this.props.players).length ? <PlayerListContainer /> : <NoPlayersMessage/>}
      </Fragment>
    );
  }
}

function mapStateToProps({ players }) {
  return {
    players,
  };
}

export default connect(mapStateToProps)(HomeContainer);
