import {Block, FormInput, GradientButton, Loading, Text} from '@components';
import {yupResolver} from '@hookform/resolvers/yup';
import {useStore, useTranslation} from '@hooks';
import {navigate} from '@navigation/NavigationServices';
import routes from '@navigation/routes';
import {LoginPayload} from '@screens/Auth/types';
import {LOGIN_ACCOUNT} from '@store/actions';
import React from 'react';
import {useForm} from 'react-hook-form';
import {Pressable} from 'react-native';
import SocialLoginForm from '../SocialLoginForm';
import styles from './styles';
import {validation} from './validation';

const LoginForm: React.FC = () => {
  const {dispatch, useSelector} = useStore();
  const {isLoading} = useSelector('auth');
  const {data: email} = useSelector('emailCaching');
  const {t} = useTranslation();
  const {
    control,
    handleSubmit,
    formState: {isValid},
  } = useForm({
    resolver: yupResolver(validation),
    mode: 'onChange',
    defaultValues: {email: email || '', password: ''},
  });

  const _onSubmit = (e: LoginPayload) => {
    dispatch({type: LOGIN_ACCOUNT, payload: e});
  };

  return (
    <Block paddingVertical={24}>
      <FormInput
        shadow
        control={control}
        name="email"
        placeholder={t('placeholder.email')}
        color="text"
        containerInputStyle={styles.containerInputStyle}
      />
      <FormInput
        isSecure
        shadow
        control={control}
        name="password"
        placeholder={t('placeholder.password')}
        color="text"
        containerInputStyle={styles.containerInputStyle}
      />
      <Block row alignCenter marginBottom={40} space="between">
        <Pressable onPress={() => navigate(routes.REGISTER_STEP1_SCREEN)}>
          <Text md color="primary">
            {t('login.register')}
          </Text>
        </Pressable>
        <Pressable onPress={() => navigate(routes.FORGOT_PASSWORD_STEP1_SCREEN)}>
          <Text md color="primary">
            {t('login.forgot_password')}
          </Text>
        </Pressable>
      </Block>
      <GradientButton
        disabled={isLoading}
        isValid={isValid}
        title={t('common.login')}
        onPress={handleSubmit(_onSubmit)}
      />
      <SocialLoginForm />
      <Loading visible={isLoading} />
    </Block>
  );
};

export default LoginForm;
