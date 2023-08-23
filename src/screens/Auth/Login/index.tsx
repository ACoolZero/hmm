import {Block, FormContainer, Text} from '@components';
import {width} from '@utils/responsive';
import React from 'react';
import Header from '../components/Header';
import LoginForm from './components/LoginForm';

const Login: React.FC = () => {
  return (
    <Block flex padding={24} paddingTop={width * 0.2} backgroundColor="common_background">
      <Header content="Welcome!" />
      <Text md marginTop={6} color="common_light_text">
        Sign in to continue
      </Text>
      <FormContainer>
        <LoginForm />
      </FormContainer>
    </Block>
  );
};

export default Login;
