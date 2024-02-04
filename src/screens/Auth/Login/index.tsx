import {Block, FormContainer, Loading, Text} from '@components';
import {useStore, useTranslation} from '@hooks';
import {width} from '@utils/responsive';
import React from 'react';
import Header from '../components/Header';
import LoginForm from './components/LoginForm';

const Login: React.FC = () => {
  const {useSelector} = useStore();
  const {isLoading} = useSelector('auth');
  const {t} = useTranslation();

  return (
    <Block flex padding={24} paddingTop={width * 0.2} backgroundColor="common_background">
      <Header content={t('login.welcome')} />
      <Text md marginTop={6} color="common_light_text">
        {t('login.prompt')}
      </Text>
      <FormContainer>
        <LoginForm />
      </FormContainer>
      <Loading visible={isLoading} />
    </Block>
  );
};

export default Login;
