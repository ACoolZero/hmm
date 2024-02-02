import {Block, GradientButton, Text} from '@components';
import {useTranslation} from '@hooks';
import {reset} from '@navigation/NavigationServices';
import routes from '@navigation/routes';
import Header from '@screens/Auth/components/Header';
import React from 'react';

const RegisterStep5: React.FC = () => {
  const {t} = useTranslation();

  return (
    <Block flex justifyCenter padding={24} backgroundColor="common_background">
      <Header content={t('validate.step_five_header')} />
      <Text marginBottom={60} color="#96A7AF">
        {t('validate.welcome')}
      </Text>
      <GradientButton
        title={t('button.continue')}
        onPress={() => {
          reset(routes.BOTTOM_TAB);
        }}
      />
    </Block>
  );
};

export default RegisterStep5;
