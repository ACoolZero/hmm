import {ICONS} from '@assets';
import {Block, Image, Text} from '@components';
import {handleHitSlop} from '@components/base/shared';
import {useTranslation} from '@hooks';
import {width} from '@utils/responsive';
import React from 'react';
import {Animated, StyleProp, TouchableOpacity, ViewStyle} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import BottomMenu from '../../../BottomMenu';
import styles from './styles';

interface AnimatedHeaderProps {
  isOpenBottom: boolean;
  setIsOpenBottom: any;
  animatedValue: any;
  onCloseAnimation: any;
  opacityAnimatedValue: any;
}

const AnimatedHeader = ({
  isOpenBottom,
  setIsOpenBottom,
  animatedValue,
  onCloseAnimation,
  opacityAnimatedValue,
}: AnimatedHeaderProps) => {
  const {top} = useSafeAreaInsets();
  const {t} = useTranslation();

  const _openBottomMenu = () => {
    setIsOpenBottom(true);
  };

  return (
    <Animated.View style={styles.animatedHeader({animatedValue, opacityAnimatedValue, top}) as any}>
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
