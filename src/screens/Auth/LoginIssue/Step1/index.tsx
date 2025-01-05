import {ICONS} from '@assets';
import {Block, FormInput, GradientButton, Image, TextInput} from '@components';
import { yupResolver } from '@hookform/resolvers/yup';
import {useStore, useTranslation} from '@hooks';
import {goBack, navigate} from '@navigation/NavigationServices';
import routes from '@navigation/routes';
import { validation } from '@screens/Auth/LoginIssue/Step1/validation';
import Header from '@screens/Auth/components/Header';
import { LOGIN_ISSUE } from '@store/actions';
import {getSize} from '@utils/responsive';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {Pressable} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const INITIAL_VALUES = {email: '', type: 'LOGIN_ISSUE'};

const LoginIssueStep1: React.FC = () => {
  const {dispatch} = useStore();
  const {top} = useSafeAreaInsets();
  const {t} = useTranslation();
  const {
    control,
    handleSubmit,
    formState: {isValid},
  } = useForm({
    resolver: yupResolver(validation),
    mode: 'onChange',
    defaultValues: INITIAL_VALUES,
  });

  const _onSubmit = (e: any) => {
    dispatch({type: LOGIN_ISSUE, payload: e});
  };
  
  return (
    <Block flex padding={24} backgroundColor="background">
      <Block paddingTop={top} marginBottom={60}>
        <Pressable onPress={goBack}>
          <Block marginBottom={40}>
            <Image source={ICONS.close} square={14} tintColor="sub_text" resizeMode="contain" />
          </Block>
        </Pressable>
        <Header content={t('login_issue.step_one_header')} />
      </Block>
      <Block marginTop={24} height={100}>
        <FormInput
          control={control}
          name="email"
          shadow
          placeholder={t('placeholder.email')}
          color="text"
          containerInputStyle={{marginBottom: getSize.m(16)}}
        />
      </Block>
      {/* <Block>
        <TextInput
          shadow
          defaultValue={info?.email}
          placeholder={t('placeholder.email')}
          color="text"
          containerInputStyle={{marginBottom: getSize.m(40)}}
          onChangeText={email => setInfo(oldValue => ({...oldValue, email}))}
        />
        <GradientButton
          title={t('button.continue')}
          onPress={handleSubmit(_onSubmit)}
        />
      </Block> */}
      <Block row alignCenter>
        {/* <Pressable onPress={goBack}>
          <Block
            alignCenter
            justifyCenter
            square={50}
            radius={8}
            marginRight={8}
            borderWidth={1}
            borderColor="primary"
            backgroundColor="white">
            <Image source={ICONS.back} square={20} tintColor="primary" resizeMode="contain" />
          </Block>
        </Pressable> */}
        <GradientButton
          isValid={isValid}
          title={t('button.continue')}
          style={{flex: 1}}
          onPress={handleSubmit(_onSubmit)}
        />
      </Block>
    </Block>
  );
};

export default LoginIssueStep1;
