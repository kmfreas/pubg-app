import React, { Component } from 'react';
import AppLoading from '~/components/AppLoading/AppLoading';

export default class AppLoadingContainer extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('App');
    }, 500);
  }
  render() {
    return (
      <AppLoading />
    );
  }
}
