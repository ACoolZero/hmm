/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import {ICONS} from '@assets';
import {Block, FormContainer, FormInput, GradientButton, Image} from '@components';
import {yupResolver} from '@hookform/resolvers/yup';
import {goBack, navigate} from '@navigation/NavigationServices';
import routes from '@navigation/routes';
import Header from '@screens/Auth/components/Header';
import {STORE_REGISTER_DATA} from '@store/actions';
import {getSize} from '@utils/responsive';
import dayjs from 'dayjs';
import React, {useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import {Pressable} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useStore} from 'react-redux';
import {validation} from './validation';

const INITIAL_VALUES = {dob: ''};

const RegisterStep2: React.FC = () => {
  const {dispatch} = useStore();
  const {top} = useSafeAreaInsets();
  const [birthday, setBirthday] = useState<string>();
  const [isDatePickerVisible, setDatePickerVisibility] = useState<boolean>(false);
  const {
    control,
    setValue,
    trigger,
    formState: {isValid},
  } = useForm({
    resolver: yupResolver(validation),
    mode: 'onChange',
    defaultValues: INITIAL_VALUES,
  });

  const _rightIcon = () => {
    return <Image source={ICONS.calendar} square={24} tintColor="placeholder" />;
  };

  const _toggleDatePicker = () => setDatePickerVisibility(!isDatePickerVisible);

  const _handleConfirm = (d: Date) => {
    setBirthday(dayjs(d).format('YYYY-MM-DD'));
    _toggleDatePicker();
  };

  useEffect(() => {
    if (birthday) {
      setValue('dob', dayjs(birthday).format('YYYY-MM-DD'));
      dispatch({type: STORE_REGISTER_DATA, payload: {dob: birthday}});
      trigger();
    }
  }, [birthday, dispatch, setValue, trigger]);

  return (
    <Block flex padding={24} paddingTop={top} backgroundColor="common_background">
      <FormContainer>
        <Header content="When is your birthday ?" />
        <Block marginTop={24} height={200}>
          <Pressable onPress={_toggleDatePicker}>
            <FormInput
              control={control}
              name="dob"
              shadow
              pointerEvents="none"
              placeholder="Date of birth"
              rightIcon={_rightIcon}
              color="common_text"
              containerInputStyle={{marginBottom: getSize.m(16)}}
            />
          </Pressable>
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
            title="Continue"
            style={{flex: 1}}
            onPress={() => {
              navigate(routes.REGISTER_STEP3_SCREEN);
            }}
          />
        </Block>
      </FormContainer>
      <DateTimePickerModal
        mode="date"
        date={new Date()}
        isVisible={isDatePickerVisible}
        onConfirm={_handleConfirm}
        onCancel={_toggleDatePicker}
        confirmTextIOS="Đồng ý"
        display="inline"
        themeVariant="light"
        isDarkModeEnabled={false}
        customCancelButtonIOS={() => <Block safeBottom />}
      />
    </Block>
  );
};

export default RegisterStep2;
