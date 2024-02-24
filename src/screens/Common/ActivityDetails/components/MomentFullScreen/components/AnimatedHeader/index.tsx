import React, {useState} from 'react';
import {Animated, StyleProp, TouchableOpacity, ViewStyle} from 'react-native';
import styles from './styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Block, Image, Text} from '@components';
import {width} from '@utils/responsive';
import {useTranslation} from '@hooks';
import {ICONS} from '@assets';
import {handleHitSlop} from '@components/base/shared';
import BottomMenu from '../../../BottomMenu';

const AnimatedHeader = ({animatedValue, onCloseAnimation}: any) => {
  const {top} = useSafeAreaInsets();
  const {t} = useTranslation();
  const [isOpenBottom, setIsOpenBottom] = useState(false);

  const _openBottomMenu = () => setIsOpenBottom(true);

  return (
    <Animated.View style={styles.animatedHeader({animatedValue, top}) as any}>
      <Block
        absolute
        alignCenter
        justifyCenter
        width={width}
        height={top + 50}
        paddingTop={top}
        backgroundColor="moment_full_screen">
        <Text center color="text" type="semibold">
          {t('moments.header')}
        </Text>
      </Block>
      <TouchableOpacity onPress={onCloseAnimation} style={styles.closeButtonContainer(top) as StyleProp<ViewStyle>}>
        <Image source={ICONS.close} square={16} tintColor="text" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btnMenu as StyleProp<ViewStyle>}
        hitSlop={handleHitSlop(5)}
        onPress={_openBottomMenu}>
        <Image source={ICONS.dots} square={28} tintColor="text" />
      </TouchableOpacity>
      <BottomMenu isOpenBottom={isOpenBottom} setIsOpenBottom={setIsOpenBottom} />
    </Animated.View>
  );
};

export default AnimatedHeader;
