import {Block, GradientButton, Text} from '@components';
import {navigate} from '@navigation/NavigationServices';
import routes from '@navigation/routes';
import Header from '@screens/Auth/components/Header';
import React from 'react';

const RegisterStep5 = () => {
  return (
    <Block flex justifyCenter padding={24} backgroundColor="background">
      <Header content="It's all set up !!" />
      <Text md marginBottom={60} color="light_text">
        Thank you for using the app
      </Text>
      <GradientButton
        title="Continue"
        onPress={() => {
          navigate(routes.LOGIN_SCREEN);
        }}
      />
    </Block>
  );
};

export default RegisterStep5;
