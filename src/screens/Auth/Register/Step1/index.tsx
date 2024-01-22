/* eslint-disable react-native/no-inline-styles */
import {ICONS} from '@assets';
import {Block, FormInput, GradientButton, Image} from '@components';
import {yupResolver} from '@hookform/resolvers/yup';
import {goBack, navigate} from '@navigation/NavigationServices';
import routes from '@navigation/routes';
import Header from '@screens/Auth/components/Header';
import {STORE_REGISTER_DATA} from '@store/actions';
import {getSize} from '@utils/responsive';
import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {Pressable} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useStore} from 'react-redux';
import {validation} from './validation';
import {debounce} from 'lodash';
import {isIos} from '@utils/helper';

const INITIAL_VALUES = {fullName: '', email: ''};

const RegisterStep1: React.FC = () => {
  const {dispatch} = useStore();
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
    dispatch({type: STORE_REGISTER_DATA, payload: e});
    navigate(routes.REGISTER_STEP2_SCREEN);
  };

  const [isTyping, setIsTyping] = useState(false);
  const debouncedSetIsTyping = debounce(setIsTyping);
  const _onFocus = () => debouncedSetIsTyping(true);
  const _onBlur = () => debouncedSetIsTyping(false);

  return (
    <Block flex padding={24} backgroundColor="common_background">
      <Block flex paddingTop={top} justifyCenter space="between">
        <Header content="First, we want to know you" />
      </Block>
      <Block style={{flex: !isTyping ? 2 : isIos ? 2 : 1}}>
        <Block height={200}>
          <FormInput
            control={control}
            name="fullName"
            shadow
            placeholder="Your name"
            color="common_text"
            containerInputStyle={{marginBottom: getSize.m(16)}}
            onFocus={_onFocus}
            onBlur={_onBlur}
          />
          <FormInput
            control={control}
            name="email"
            shadow
            placeholder="Email"
            color="common_text"
            containerInputStyle={{marginBottom: getSize.m(16)}}
            onFocus={_onFocus}
            onBlur={_onBlur}
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
          <GradientButton isValid={isValid} title="Continue" style={{flex: 1}} onPress={handleSubmit(_onSubmit)} />
        </Block>
      </Block>
    </Block>
  );
};

export default RegisterStep1;
