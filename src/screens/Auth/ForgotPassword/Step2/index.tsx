import {ICONS} from '@assets';
import {Block, Image, Text} from '@components';
import {useTranslation} from '@hooks';
import {goBack, navigate} from '@navigation/NavigationServices';
import routes from '@navigation/routes';
import Header from '@screens/Auth/components/Header';
import React from 'react';
import {Pressable} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const ForgotPasswordStep2: React.FC = () => {
  const {top} = useSafeAreaInsets();
  const {t} = useTranslation();

  return (
    <Block flex padding={24} backgroundColor="background">
      <Block paddingTop={top} marginBottom={40}>
        <Pressable onPress={goBack}>
          <Block marginBottom={40}>
            <Image source={ICONS.close} square={14} tintColor="sub_text" resizeMode="contain" />
          </Block>
        </Pressable>
        <Header content={t('forgot_password.otp_sent')} />
        <Text md marginTop={8} color="sub_text">
          {t('forgot_password.otp_input_prompt')}
        </Text>
      </Block>
      <Block row marginBottom={24}>
        <Block shadow radius={8} square={48} marginRight={12} backgroundColor="white" />
        <Block shadow radius={8} square={48} marginRight={12} backgroundColor="white" />
        <Block shadow radius={8} square={48} marginRight={12} backgroundColor="white" />
        <Block shadow radius={8} square={48} marginRight={12} backgroundColor="white" />
      </Block>
      <Pressable
        onPress={() => {
          navigate(routes.FORGOT_PASSWORD_STEP3_SCREEN);
        }}>
        <Text color="sub_text">
          {t('forgot_password.otp_didnt_receive')}{' '}
          <Text color="primary" type="medium">
            {t('forgot_password.try_again')}
          </Text>
        </Text>
      </Pressable>
    </Block>
  );
};

export default ForgotPasswordStep2;
