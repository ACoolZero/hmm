import {Block, FormInput, GradientButton, Text} from '@components';
import {yupResolver} from '@hookform/resolvers/yup';
import {useStore} from '@hooks';
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

const INITIAL_VALUES = {email: '', password: ''};

const LoginForm: React.FC = () => {
  const {dispatch} = useStore();
  const {
    control,
    handleSubmit,
    formState: {isValid},
  } = useForm({
    resolver: yupResolver(validation),
    mode: 'onChange',
    defaultValues: INITIAL_VALUES,
  });

  const _onSubmit = (e: LoginPayload) => {
    dispatch({type: LOGIN_ACCOUNT, payload: e});
    // navigate(routes.BOTTOM_TAB);
  };

  return (
    <Block paddingVertical={24}>
      <FormInput
        shadow
        control={control}
        name="email"
        placeholder="Your email"
        color="common_text"
        containerInputStyle={styles.containerInputStyle}
      />
      <FormInput
        isSecure
        shadow
        control={control}
        name="password"
        placeholder="Password"
        color="common_text"
        containerInputStyle={styles.containerInputStyle}
      />
      <Block row alignCenter marginBottom={40} space="between">
        <Pressable onPress={() => navigate(routes.REGISTER_STEP1_SCREEN)}>
          <Text md color="primary">
            Register
          </Text>
        </Pressable>
        <Pressable onPress={() => navigate(routes.FORGOT_PASSWORD_STEP1_SCREEN)}>
          <Text md color="primary">
            Forgot password?
          </Text>
        </Pressable>
      </Block>
      <GradientButton isValid={isValid} title="Sign in" onPress={handleSubmit(_onSubmit)} />
      <SocialLoginForm />
    </Block>
  );
};

export default LoginForm;
