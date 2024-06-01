/* eslint-disable react-native/no-inline-styles */
import {ICONS} from '@assets';
import {Block, FormContainer, FormInput, GradientButton, Image} from '@components';
import {yupResolver} from '@hookform/resolvers/yup';
import {goBack, navigate} from '@navigation/NavigationServices';
import routes from '@navigation/routes';
import Header from '@screens/Auth/components/Header';
import {STORE_REGISTER_DATA} from '@store/actions';
import {getSize} from '@utils/responsive';
import React from 'react';
import {useForm} from 'react-hook-form';
import {Pressable} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useStore} from 'react-redux';
import {validation} from './validation';
import {useTranslation} from '@hooks';

const INITIAL_VALUES = {fullName: '', email: ''};

const RegisterStep1: React.FC = () => {
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
    dispatch({type: STORE_REGISTER_DATA, payload: e});
    navigate(routes.REGISTER_STEP2_SCREEN);
  };

  return (
    <Block flex padding={24} paddingTop={top} backgroundColor="background">
      <FormContainer>
        <Header content={t('validate.step_one_header')} />
        <Block marginTop={24} height={200}>
          <FormInput
            control={control}
            name="fullName"
            shadow
            placeholder={t('placeholder.name')}
            color="text"
            containerInputStyle={{marginBottom: getSize.m(16)}}
          />
          <FormInput
            control={control}
            name="email"
            shadow
            placeholder={t('placeholder.email')}
            color="text"
            containerInputStyle={{marginBottom: getSize.m(16)}}
          />
        </Block>
        <Block row alignCenter>
          <Pressable onPress={goBack}>
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
          </Pressable>
          <GradientButton
            isValid={isValid}
            title={t('button.continue')}
            style={{flex: 1}}
            onPress={handleSubmit(_onSubmit)}
          />
        </Block>
      </FormContainer>
    </Block>
  );
};

export default RegisterStep1;
