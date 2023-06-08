/* eslint-disable react-native/no-inline-styles */
import {ICONS} from '@assets';
import {Block, GradientButton, Image, TextInput} from '@components';
import {goBack, reset} from '@navigation/NavigationServices';
import routes from '@navigation/routes';
import Header from '@screens/Auth/components/Header';
import {getSize} from '@utils/responsive';
import React from 'react';
import {Pressable} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const RegisterStep4 = () => {
  const {top} = useSafeAreaInsets();

  return (
    <Block flex padding={24} backgroundColor="background">
      <Block flex paddingTop={top} justifyCenter space="between">
        {/* <Pressable onPress={goBack}>
          <Image source={ICONS.back} square={20} tintColor="black" resizeMode="contain" />
        </Pressable> */}
        <Header content="Create your password" />
      </Block>
      <Block style={{flex: 2}}>
        <Block height={200}>
          <TextInput shadow isSecure placeholder="Password" containerInputStyle={{marginBottom: getSize.m(16)}} />
          <TextInput
            shadow
            isSecure
            placeholder="Confirm password"
            containerInputStyle={{marginBottom: getSize.m(16)}}
          />
        </Block>
        <Block row>
          <Pressable onPress={goBack}>
            <Block
              alignCenter
              justifyCenter
              square={50}
              radius={8}
              marginRight={8}
              borderWidth={1}
              borderColor="primary"
              backgroundColor="white">
              <Image source={ICONS.back} square={20} tintColor="primary" resizeMode="contain" />
            </Block>
          </Pressable>
          <GradientButton
            title="Continue"
            style={{flex: 1}}
            onPress={() => {
              reset(0, routes.REGISTER_STEP5_SCREEN);
            }}
          />
        </Block>
      </Block>
    </Block>
  );
};

export default RegisterStep4;
