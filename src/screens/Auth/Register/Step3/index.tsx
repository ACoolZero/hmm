/* eslint-disable react-native/no-inline-styles */
import {ICONS} from '@assets';
import {Block, GradientButton, Image, Text} from '@components';
import {goBack, navigate} from '@navigation/NavigationServices';
import routes from '@navigation/routes';
import Header from '@screens/Auth/components/Header';
import React from 'react';
import {Pressable} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const RegisterStep3 = () => {
  const {top} = useSafeAreaInsets();

  return (
    <Block flex padding={24} backgroundColor="common_background">
      <Block flex paddingTop={top} justifyCenter space="between">
        {/* <Pressable onPress={goBack}>
          <Image source={ICONS.back} square={20} tintColor="black" resizeMode="contain" />
        </Pressable> */}
        <Header content="What is your gender ?" />
      </Block>
      <Block style={{flex: 2}}>
        <Block height={200}>
          <Block radius={8} borderWidth={1} borderColor="border" backgroundColor="white">
            <Pressable>
              <Block row alignCenter height={48} paddingHorizontal={16} space="between">
                <Text color="common_text">Male</Text>
                <Block alignCenter justifyCenter round={20} borderWidth={2} borderColor="primary">
                  <Block round={10} backgroundColor="primary" />
                </Block>
              </Block>
            </Pressable>
            <Block height={1} backgroundColor="border" />
            <Pressable>
              <Block row alignCenter height={48} paddingHorizontal={16} space="between">
                <Text color="common_text">Female</Text>
                <Block round={20} borderWidth={2} borderColor="border" />
              </Block>
            </Pressable>
          </Block>
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
              navigate(routes.REGISTER_STEP4_SCREEN);
            }}
          />
        </Block>
      </Block>
    </Block>
  );
};

export default RegisterStep3;
