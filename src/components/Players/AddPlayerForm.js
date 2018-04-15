import React, { Component, Fragment } from 'react';
import { SearchBar, Button } from 'react-native-elements';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { colors } from '~/styles';

class addPlayer extends Component {
  state = {
    query: '',
  }
  static propTypes = {
    handler: PropTypes.func.isRequired,
  }
  textChange = (text) => {
    this.setState({
      query: text,
    });
  }
  clear = () => {
    this.setState({
      query: '',
    });
  }
  submit = () => {
    this.props.handler(this.state.query);
  }
  render() {
    return (
      <Fragment>
        <SearchBar autoCapitalize="none" onChangeText={this.textChange} onClear={this.clear} placeholder='Player Name' platform="ios" cancelButtonTitle="Cancel" containerStyle={{ backgroundColor: 'rgba(0,0,0,0)' }} round={false} lightTheme={true}/>
        <Button
          buttonStyle={{ backgroundColor: colors.primary }}
          title="Search"
          onPress={this.submit}
          containerStyle={{ margin: 15 }}
        />
      </Fragment>
    );
  }
}

export default addPlayer;
