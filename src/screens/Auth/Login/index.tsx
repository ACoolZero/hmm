import {IMAGES} from '@assets';
import {Block, GradientText, FormContainer, Image, Text} from '@components';
import {width} from '@utils/responsive';
import React from 'react';
import LoginForm from './components/LoginForm';

const LOGO_SIZE = width * 0.18;

const Login = () => {
  return (
    <Block flex padding={24} paddingTop={100} backgroundColor="background">
      <Image source={IMAGES.logo} square={LOGO_SIZE} />
      <GradientText size={46} marginTop={12} type="bold">
        Welcome!
      </GradientText>
      <Text size={20} marginTop={6} color="light_text">
        Sign in to continue
      </Text>
      <FormContainer>
        <LoginForm />
      </FormContainer>
    </Block>
  );
};

export default Login;
