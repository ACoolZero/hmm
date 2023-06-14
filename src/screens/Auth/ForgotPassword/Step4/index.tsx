import {Block, GradientButton} from '@components';
import {navigate} from '@navigation/NavigationServices';
import routes from '@navigation/routes';
import Header from '@screens/Auth/components/Header';
import React from 'react';

const ForgotPasswordStep4 = () => {
  return (
    <Block flex justifyCenter padding={24} backgroundColor="common_background">
      <Header content="You’re back !!" />
      <Block height={40} />
      <GradientButton
        title="Home"
        onPress={() => {
          navigate(routes.LOGIN_SCREEN);
        }}
      />
    </Block>
  );
};

export default ForgotPasswordStep4;
