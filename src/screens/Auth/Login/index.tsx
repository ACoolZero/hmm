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
    <Block flex padding={24} paddingTop={width * 0.2} backgroundColor="background">
      <Header content={t('login.header')} />
      <Text md marginTop={6} color="text">
        {t('login.sub_header')}
      </Text>
      <FormContainer>
        <LoginForm />
      </FormContainer>
      <Loading visible={isLoading} />
    </Block>
  );
};

export default Login;
