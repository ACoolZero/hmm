import {ICONS} from '@assets';
import {Block, Image} from '@components';
import {BlockProps} from '@components/base/Block/types';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import styles from './styles';

interface FABProps extends BlockProps {
  onPress?: () => void;
}

/**
 * @description Floating Action Button Component
 */
const FAB: React.FC<FABProps> = ({onPress, ...containerProps}) => (
  <TouchableOpacity style={styles.backdrop} onPress={onPress}>
    <Block alignCenter justifyCenter width={50} height={50} radius={50} backgroundColor="primary" {...containerProps}>
      <Image source={ICONS.plus} square={18} tintColor="white" />
    </Block>
  </TouchableOpacity>
);

export default FAB;
