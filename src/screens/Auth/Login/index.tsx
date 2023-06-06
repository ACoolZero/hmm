import {IMAGES} from '@assets';
import {Block, FormContainer, Image, Text} from '@components';
import {width} from '@utils/responsive';
import React from 'react';
import LoginForm from './components/LoginForm';

const LOGO_SIZE = width * 0.18;

const Login = () => {
  return (
    <Block flex padding={24} paddingTop={100} backgroundColor="#F5F5F5">
      <Image source={IMAGES.logo} square={LOGO_SIZE} />
      <Text size={46} marginTop={12} color="primary" type="bold">
        Welcome!
      </Text>
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
