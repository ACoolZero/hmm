import {Block, GradientButton, Text} from '@components';
import {navigate} from '@navigation/NavigationServices';
import routes from '@navigation/routes';
import Header from '@screens/Auth/components/Header';
import React from 'react';

const RegisterStep5: React.FC = () => {
  return (
    <Block flex justifyCenter padding={24} backgroundColor="common_background">
      <Header content="It's all set up !!" />
      <Text marginBottom={60} color="#96A7AF">
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
