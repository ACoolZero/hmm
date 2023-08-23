import {ICONS} from '@assets';
import {Block, Image, Text} from '@components';
import {width} from '@utils/responsive';
import React from 'react';
import {Pressable} from 'react-native';

const SocialLoginForm: React.FC = () => {
  return (
    <Block>
      <Block row alignCenter>
        <Block flex height={1} backgroundColor="#DDDDDD" />
        <Text center marginVertical={24} marginHorizontal={12} color="primary">
          Or
        </Text>
        <Block flex height={1} backgroundColor="#DDDDDD" />
      </Block>
      <Block row alignCenter paddingHorizontal={width * 0.2} space="between">
        <Pressable>
          <Image source={ICONS.apple} square={24} resizeMode="contain" />
        </Pressable>
        <Pressable>
          <Image source={ICONS.google} square={24} resizeMode="contain" />
        </Pressable>
        <Pressable>
          <Image source={ICONS.twitter} square={24} resizeMode="contain" />
        </Pressable>
      </Block>
    </Block>
  );
};

export default SocialLoginForm;
