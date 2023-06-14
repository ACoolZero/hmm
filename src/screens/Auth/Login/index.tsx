import {Block, FormContainer, Text} from '@components';
import React from 'react';
import Header from '../components/Header';
import LoginForm from './components/LoginForm';

const Login = () => {
  return (
    <Block flex padding={24} paddingTop={100} backgroundColor="common_background">
      <Header content="Welcome!" />
      <Text size={20} marginTop={6} color="#595959">
        Sign in to continue
      </Text>
      <FormContainer>
        <LoginForm />
      </FormContainer>
    </Block>
  );
};

export default Login;
