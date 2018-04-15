import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HeaderButtons from 'react-navigation-header-buttons';
import Icon from 'react-native-vector-icons/Ionicons';
import PlayerListContainer from '~/containers/Players/PlayerListContainer';

class HomeContainer extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: (
        <HeaderButtons IconComponent={Icon} iconSize={23} color="blue">
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
      <PlayerListContainer navigation={this.props.navigation} />
    );
  }
}

export default HomeContainer;
