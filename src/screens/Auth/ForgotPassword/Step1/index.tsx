import {ICONS} from '@assets';
import {Block, GradientButton, Image, TextInput} from '@components';
import {useTranslation} from '@hooks';
import {goBack, navigate} from '@navigation/NavigationServices';
import routes from '@navigation/routes';
import Header from '@screens/Auth/components/Header';
import {getSize} from '@utils/responsive';
import React from 'react';
import {Pressable} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const ForgotPasswordStep1: React.FC = () => {
  const {top} = useSafeAreaInsets();
  const {t} = useTranslation();

  return (
    <Block flex padding={24} backgroundColor="common_background">
      <Block paddingTop={top} marginBottom={60}>
        <Pressable onPress={goBack}>
          <Block marginBottom={40}>
            <Image source={ICONS.close} square={14} tintColor="common_light_text" resizeMode="contain" />
          </Block>
        </Pressable>
        <Header content={t('forgot_password.step_one_header')} />
      </Block>
      <Block>
        <TextInput
          shadow
          placeholder={t('placeholder.email')}
          color="common_text"
          containerInputStyle={{marginBottom: getSize.m(40)}}
        />
        <GradientButton
          title={t('button.continue')}
          onPress={() => {
            navigate(routes.FORGOT_PASSWORD_STEP2_SCREEN);
          }}
        />
      </Block>
    </Block>
  );
};

export default ForgotPasswordStep1;
