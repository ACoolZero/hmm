import {ICONS} from '@assets';
import {Block, Image} from '@components';
import {goBack} from '@navigation/NavigationServices';
import Header from '@screens/Auth/components/Header';
import React from 'react';
import {Pressable} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const RegisterStep1 = () => {
  const {top} = useSafeAreaInsets();

  return (
    <Block flex padding={24} backgroundColor="background">
      <Block flex paddingTop={top} justifyCenter space="between">
        <Pressable onPress={goBack}>
          <Image source={ICONS.back} square={20} tintColor="black" resizeMode="contain" />
        </Pressable>
        <Header content="First, we want to know you" />
      </Block>
      <Block flex justifyCenter></Block>
      <Block flex justifyCenter backgroundColor="red"></Block>
    </Block>
  );
};

export default RegisterStep1;
