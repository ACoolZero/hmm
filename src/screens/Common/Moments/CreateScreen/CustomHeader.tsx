import {ICONS} from '@assets';
import {Block, Header, Image} from '@components';
import {HeaderProps} from '@components/common/Header';
import {useStore} from '@hooks';
import React, {useEffect, useRef} from 'react';
import {Animated, Easing} from 'react-native';

interface CustomHeader extends HeaderProps {
  isLoading: boolean;
}

const CustomHeader: React.FC<CustomHeader> = ({isLoading, ...rest}) => {
  const {useSelector} = useStore();
  const {mode} = useSelector('theme');
  const animatedValue = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.loop(
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: false,
      }),
    ).start();
  });
  const rotation = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <Block>
      <Header {...rest} />
      <Block square={50} absolute right={0} bottom={0} justifyCenter alignCenter>
        {isLoading && (
          <Animated.View style={{transform: [{rotate: rotation}]}}>
            <Image source={ICONS.loading_indicator[mode as keyof typeof ICONS.loading_indicator]} round={24} />
          </Animated.View>
        )}
      </Block>
    </Block>
  );
};

export default CustomHeader;
