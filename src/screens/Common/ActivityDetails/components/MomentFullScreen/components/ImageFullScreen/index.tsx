import {Image} from '@components';
import React from 'react';
import {StyleSheet} from 'react-native';

const ImageFullScreen = ({media}: any) => {
  return <Image source={{uri: media}} style={styles.image} />;
};

export default ImageFullScreen;

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
});
