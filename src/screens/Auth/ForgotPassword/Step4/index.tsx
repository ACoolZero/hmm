import {Block, GradientButton} from '@components';
import {useTranslation} from '@hooks';
import {navigate} from '@navigation/NavigationServices';
import routes from '@navigation/routes';
import Header from '@screens/Auth/components/Header';
import React from 'react';

const ForgotPasswordStep4: React.FC = () => {
  const {t} = useTranslation();

  return (
    <Block flex justifyCenter padding={24} backgroundColor="background">
      <Header content={t('forgot_password.welcome')} />
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
