import React, { Component } from 'react';
import { ImageBackground } from 'react-native';
import PropTypes from 'prop-types';
import HeaderButtons from 'react-navigation-header-buttons';
import Icon from 'react-native-vector-icons/Ionicons';
import PlayerListContainer from '~/containers/Players/PlayerListContainer';
import BackgroundImage from '~/images/bg.jpg';
import styles, { colors } from '~/styles';

class HomeContainer extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Players',
      headerTitleStyle: {
        color: 'white',
      },
      headerStyle: {
        backgroundColor: colors.primary,
      },
      headerRight: (
        <HeaderButtons IconComponent={Icon} iconSize={23} color="white">
          <HeaderButtons.Item
            title="add"
            iconName="ios-search"
            onPress={() => navigation.navigate('AddPlayer')}
          />
        </HeaderButtons>
      ),
    };
  }

  render() {
    return (
      <ImageBackground source={BackgroundImage} style={styles.backgroundImage}>
        <PlayerListContainer navigation={this.props.navigation} />
      </ImageBackground>
    );
  }
}

export default HomeContainer;
