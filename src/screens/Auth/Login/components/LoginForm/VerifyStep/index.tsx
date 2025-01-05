import {ICONS} from '@assets';
import {Block, Image, Text} from '@components';
import {useTranslation} from '@hooks';
import {goBack, navigate} from '@navigation/NavigationServices';
import routes from '@navigation/routes';
import Header from '@screens/Auth/components/Header';
import React from 'react';
import {Pressable} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const LoginVerifyStep: React.FC = () => {
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
        <Header content={t('login.verify_header')} />
        <Text  marginTop={8} color="sub_text">
          {t('login.verify_sub_header')}
        </Text>
      </Block>
      <Block row justifyCenter marginBottom={24}>
        <Block borderBottomWidth={1} borderColor='primary' shadow radius={8} square={200} backgroundColor="placeholder" />
      </Block>
      <Block row justifyCenter marginBottom={24}>
        <Block shadow radius={8} square={32} marginRight={12} backgroundColor="white" />
        <Block shadow radius={8} square={32} marginRight={12} backgroundColor="white" />
        <Block shadow radius={8} square={32} backgroundColor="white" />
      </Block>
      <Block row marginBottom={24}>
        <Block flex>
          <Text sm color="sub_text">
            {t('login.verify_hint_1')}
          </Text>
          <Text sm color="sub_text">
            {t('login.verify_hint_2')}
          </Text>
        </Block>
        <Pressable
        onPress={() => {
          navigate(routes.LOGIN_SCREEN);
        }}>
        <Text sm color="primary" type="medium">
            {/* {t('common.try_again')}{' '} */}
            2:00
        </Text>
      </Pressable>
      </Block>
      
    </Block>
  );
};

export default LoginVerifyStep;
