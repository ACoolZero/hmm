/* eslint-disable react-native/no-inline-styles */
import {ICONS} from '@assets';
import {Block, FormInput, GradientButton, Image} from '@components';
import {yupResolver} from '@hookform/resolvers/yup';
import {useStore} from '@hooks';
import {goBack} from '@navigation/NavigationServices';
import Header from '@screens/Auth/components/Header';
import {REGISTER_ACCOUNT} from '@store/actions';
import {getSize} from '@utils/responsive';
import React from 'react';
import {useForm} from 'react-hook-form';
import {Pressable} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {validation} from './validation';

const INITIAL_VALUES = {password: '', retypePassword: ''};

const RegisterStep4: React.FC = () => {
  const {dispatch, useSelector} = useStore();
  const {data} = useSelector('register');
  const {top} = useSafeAreaInsets();
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
    const {password} = e;
    dispatch({type: REGISTER_ACCOUNT, payload: {...data, password}});
  };

  return (
    <Block flex padding={24} backgroundColor="common_background">
      <Block flex paddingTop={top} justifyCenter space="between">
        <Header content="Create your password" />
      </Block>
      <Block style={{flex: 2}}>
        <Block height={200}>
          <FormInput
            control={control}
            name="password"
            shadow
            isSecure
            placeholder="Password"
            color="common_text"
            containerInputStyle={{marginBottom: getSize.m(16)}}
          />
          <FormInput
            control={control}
            name="retypePassword"
            shadow
            isSecure
            placeholder="Confirm password"
            color="common_text"
            containerInputStyle={{marginBottom: getSize.m(16)}}
          />
        </Block>
        <Block row>
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
            disabled={false}
            isValid={isValid}
            title="Continue"
            style={{flex: 1}}
            onPress={handleSubmit(_onSubmit)}
          />
        </Block>
      </Block>
    </Block>
  );
};

export default RegisterStep4;
