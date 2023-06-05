import {Block, Button, FormInput, Text} from '@components';
import {yupResolver} from '@hookform/resolvers/yup';
import React from 'react';
import {useForm} from 'react-hook-form';
import {Pressable} from 'react-native';
import SocialLoginForm from '../SocialLoginForm';
import styles from './styles';
import {validation} from './validation';

const INITIAL_VALUES = {username: '', password: ''};

const LoginForm = () => {
  const {
    control,
    handleSubmit,
    formState: {isValid},
  } = useForm({
    resolver: yupResolver(validation),
    mode: 'onChange',
    defaultValues: INITIAL_VALUES,
  });

  const _onSubmit = () => {};

  return (
    <Block paddingVertical={24}>
      <FormInput
        control={control}
        name="username"
        placeholder="Your full name"
        containerInputStyle={styles.containerInputStyle}
      />
      <FormInput
        isSecure
        control={control}
        name="password"
        placeholder="Password"
        containerInputStyle={styles.containerInputStyle}
      />
      <Block row alignCenter marginBottom={40} space="between">
        <Pressable>
          <Text md color="primary">
            Register
          </Text>
        </Pressable>
        <Pressable>
          <Text md color="primary">
            Forgot password?
          </Text>
        </Pressable>
      </Block>
      <Button isValid={isValid} title="Sign in" onPress={handleSubmit(_onSubmit)} />
      <SocialLoginForm />
    </Block>
  );
};

export default LoginForm;
