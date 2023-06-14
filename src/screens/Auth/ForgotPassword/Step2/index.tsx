import {ICONS} from '@assets';
import {Block, Image, Text} from '@components';
import {goBack, navigate} from '@navigation/NavigationServices';
import routes from '@navigation/routes';
import Header from '@screens/Auth/components/Header';
import React from 'react';
import {Pressable} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const ForgotPasswordStep2 = () => {
  const {top} = useSafeAreaInsets();

  return (
    <Block flex padding={24} backgroundColor="common_background">
      <Block paddingTop={top} marginBottom={40}>
        <Pressable onPress={goBack}>
          <Block marginBottom={40}>
            <Image source={ICONS.close} square={14} tintColor="common_light_text" resizeMode="contain" />
          </Block>
        </Pressable>
        <Header content="OTP sent !!" />
        <Text lg marginTop={8} color="common_light_text">
          Please enter the OTP sent to your email to reset your password
        </Text>
      </Block>
      <Block row marginBottom={24}>
        <Block shadow radius={8} square={48} marginRight={12} backgroundColor="white" />
        <Block shadow radius={8} square={48} marginRight={12} backgroundColor="white" />
        <Block shadow radius={8} square={48} marginRight={12} backgroundColor="white" />
        <Block shadow radius={8} square={48} marginRight={12} backgroundColor="white" />
      </Block>
      <Pressable
        onPress={() => {
          navigate(routes.FORGOT_PASSWORD_STEP3_SCREEN);
        }}>
        <Text color="#8C8C8C">
          Did not receive the OTP code?{' '}
          <Text color="primary" type="medium">
            Try again
          </Text>
        </Text>
      </Pressable>
    </Block>
  );
};

export default ForgotPasswordStep2;
