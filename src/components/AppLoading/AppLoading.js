import React from 'react';
import { ImageBackground } from 'react-native';
import LoadingImage from '~/images/loading.jpg';
import styles from '~/styles';

function AppLoading() {
  return (
    <ImageBackground source={LoadingImage} style={styles.backgroundImage}/>
  );
}

export default AppLoading;
