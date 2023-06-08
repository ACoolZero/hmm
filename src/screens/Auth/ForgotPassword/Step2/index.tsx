import {ICONS} from '@assets';
import {Block, Image, Text} from '@components';
import {goBack} from '@navigation/NavigationServices';
import Header from '@screens/Auth/components/Header';
import React from 'react';
import {Pressable} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const ForgotPasswordStep2 = () => {
  const {top} = useSafeAreaInsets();

  return (
    <Block flex padding={24} backgroundColor="background">
      <Block paddingTop={top} marginBottom={40}>
        <Pressable onPress={goBack}>
          <Block marginBottom={40}>
            <Image source={ICONS.close} square={14} tintColor="light_text" resizeMode="contain" />
          </Block>
        </Pressable>
        <Header content="OTP sent !!" />
        <Text lg marginTop={8}>
          Please enter the OTP sent to your email to reset your password
        </Text>
      </Block>
      <Block>
        <Block height={50} width={100} backgroundColor="primary" />
      </Block>
    </Block>
  );
};

export default ForgotPasswordStep2;
