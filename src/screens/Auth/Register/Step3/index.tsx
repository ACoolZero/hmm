/* eslint-disable react-native/no-inline-styles */
import {ICONS} from '@assets';
import {Block, GradientButton, Image, Text} from '@components';
import {goBack, navigate} from '@navigation/NavigationServices';
import routes from '@navigation/routes';
import Header from '@screens/Auth/components/Header';
import {STORE_REGISTER_DATA} from '@store/actions';
import React, {useState} from 'react';
import {Pressable} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useStore} from 'react-redux';

type GenderType = 'MALE' | 'FEMALE';

const RegisterStep3: React.FC = () => {
  const {dispatch} = useStore();
  const {top} = useSafeAreaInsets();
  const [gender, setGender] = useState<GenderType>('MALE');

  const _onSubmit = () => {
    dispatch({type: STORE_REGISTER_DATA, payload: {gender}});
    navigate(routes.REGISTER_STEP4_SCREEN);
  };

  return (
    <Block flex padding={24} backgroundColor="common_background">
      <Block flex paddingTop={top} justifyCenter space="between">
        <Header content="What is your gender ?" />
      </Block>
      <Block style={{flex: 2}}>
        <Block height={200}>
          <Block radius={8} borderWidth={1} borderColor="common_border" backgroundColor="white">
            <Pressable onPress={() => setGender('MALE')}>
              <Block row alignCenter height={48} paddingHorizontal={16} space="between">
                <Text color="common_text">Male</Text>
                <Block
                  alignCenter
                  justifyCenter
                  round={20}
                  borderWidth={2}
                  borderColor={gender === 'MALE' ? 'primary' : 'border'}>
                  {gender === 'MALE' && <Block round={10} backgroundColor="primary" />}
                </Block>
              </Block>
            </Pressable>
            <Block height={1} backgroundColor="common_border" />
            <Pressable onPress={() => setGender('FEMALE')}>
              <Block row alignCenter height={48} paddingHorizontal={16} space="between">
                <Text color="common_text">Female</Text>
                <Block
                  alignCenter
                  justifyCenter
                  round={20}
                  borderWidth={2}
                  borderColor={gender === 'FEMALE' ? 'primary' : 'border'}>
                  {gender === 'FEMALE' && <Block round={10} backgroundColor="primary" />}
                </Block>
              </Block>
            </Pressable>
          </Block>
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
          <GradientButton title="Continue" style={{flex: 1}} onPress={_onSubmit} />
        </Block>
      </Block>
    </Block>
  );
};

export default RegisterStep3;
