import React from 'react';
import { Image } from 'react-native';
import LoadingImage from '~/images/loading.jpg';

function AppLoading() {
  const resizeMode = 'cover';
  return (
    <Image source={LoadingImage} style={{
      backgroundColor: '#ccc',
      flex: 1,
      resizeMode,
      width: '100%',
      height: '100%',
      justifyContent: 'center',
    }}/>
  );
}

export default AppLoading;
