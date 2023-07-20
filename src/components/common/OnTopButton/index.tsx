import {IMAGES} from '@assets';
import {FAB, Image} from '@components';
import {getSize} from '@utils/responsive';
import React from 'react';
import {DeviceEventEmitter, StyleSheet} from 'react-native';

const OnTopButton: React.FC = () => {
  return (
    <FAB
      draggable
      maxSize={75}
      backgroundColor="transparent"
      borderWidth={1}
      style={styles.container}
      onPress={() => {
        DeviceEventEmitter.emit('showActionModal');
      }}>
      <Image source={IMAGES.fab_icon} square={60} style={{borderRadius: getSize.s(24)}} />
    </FAB>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: getSize.s(28),
    borderColor: '#87A8B980',
    borderStyle: 'dashed',
  },
});

export default OnTopButton;
