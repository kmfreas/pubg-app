import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AddPlayerContainer from '~/containers/Players/AddPlayerContainer';
import PlayerManageItem from '~/components/Players/PlayerManageItem';
import { handleRemovePlayer } from '~/redux/players';
import styles, { colors } from '~/styles';
import { Card } from 'react-native-elements';
import { ImageBackground } from 'react-native';
import BackgroundImage from '~/images/bg2.jpg';

class ManagePlayersContainer extends Component {
  static propTypes = {
    players: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
  }
  static navigationOptions = () => {
    return {
      headerBackTitleStyle: {
        color: 'white',
      },
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: colors.primary,
      },
    };
  }
  removePlayer = (player) => {
    this.props.dispatch(handleRemovePlayer(player));
  }
  render() {
    return (
      <ImageBackground source={BackgroundImage} style={styles.backgroundImage}>
        <AddPlayerContainer />
        <Card title='Players'>
          {
            Object.keys(this.props.players).map((key) => {
              return <PlayerManageItem
                key={key}
                name={this.props.players[key].attributes.name}
                handler={() => this.removePlayer(key)}
              />;
            })
          }
        </Card>
      </ImageBackground>
    );
  }
}

function mapStateToProps({ players }) {
  return {
    players,
  };
}

export default connect(mapStateToProps)(ManagePlayersContainer);
