import {IMAGES} from '@assets';
import {Block, Image} from '@components';
import {getSize} from '@utils/responsive';
import React from 'react';
import {DeviceEventEmitter, StyleSheet} from 'react-native';
import FAB from 'react-native-animated-fab';

const OnTopButton: React.FC = () => {
  return (
    <FAB
      renderSize={75}
      topOffset={80}
      bottomOffset={80}
      backgroundColor="transparent"
      onPress={() => {
        DeviceEventEmitter.emit('showActionModal');
      }}>
      <Block alignCenter justifyCenter square={75} style={styles.container} borderWidth={1.5}>
        <Image source={IMAGES.fab_icon} square={60} style={{borderRadius: getSize.s(24)}} />
      </Block>
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
