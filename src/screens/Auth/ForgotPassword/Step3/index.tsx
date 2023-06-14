import {ICONS} from '@assets';
import {Block, GradientButton, Image, TextInput} from '@components';
import {reset} from '@navigation/NavigationServices';
import routes from '@navigation/routes';
import Header from '@screens/Auth/components/Header';
import {getSize} from '@utils/responsive';
import React from 'react';
import {Pressable} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const ForgotPasswordStep3 = () => {
  const {top} = useSafeAreaInsets();

  return (
    <Block flex padding={24} backgroundColor="common_background">
      <Block justifyCenter paddingTop={top} marginBottom={60} space="between">
        <Pressable onPress={() => reset(0, routes.LOGIN_SCREEN)}>
          <Block marginBottom={40}>
            <Image source={ICONS.close} square={14} tintColor="common_light_text" resizeMode="contain" />
          </Block>
        </Pressable>
        <Header content="Create your password" />
      </Block>
      <Block marginBottom={40}>
        <TextInput
          shadow
          isSecure
          placeholder="Password"
          color="common_text"
          containerInputStyle={{marginBottom: getSize.m(16)}}
        />
        <TextInput
          shadow
          isSecure
          placeholder="Confirm password"
          color="common_text"
          containerInputStyle={{marginBottom: getSize.m(16)}}
        />
      </Block>
      <GradientButton
        title="Create a password"
        onPress={() => {
          reset(0, routes.FORGOT_PASSWORD_STEP4_SCREEN);
        }}
      />
    </Block>
  );
};

export default ForgotPasswordStep3;
