/* eslint-disable react-native/no-inline-styles */
import {ICONS} from '@assets';
import {Block, Image, Text} from '@components';
import {useStore} from '@hooks';
import {navigate} from '@navigation/NavigationServices';
import routes from '@navigation/routes';
import React from 'react';
import {Pressable} from 'react-native';

const GadgetsHeader: React.FC = () => {
  const {useSelector} = useStore();
  const {userInfo} = useSelector('auth');
  const {avatar, fullName, phoneNumber, email, slogan} = userInfo;

  return (
    <Block padding={24}>
      <Block row space="between">
        <Block flex row>
          <Block round={72} borderWidth={1} borderColor="light_text" overflow="hidden">
            <Image source={{uri: avatar}} round={72} />
          </Block>
          <Block flex marginLeft={12} space="between">
            <Text md type="semibold">
              {fullName}
            </Text>
            <Text sm color="light_text">
              {phoneNumber ? phoneNumber : '-'}
            </Text>
            <Text sm color="light_text">
              {email}
            </Text>
          </Block>
        </Block>
        <Pressable
          onPress={() => {
            navigate(routes.EDIT_PROFILE_SCREEN);
          }}>
          <Block
            alignCenter
            justifyCenter
            radius={8}
            square={36}
            marginLeft={12}
            backgroundColor="secondary_background">
            <Image source={ICONS.edit} square={20} />
          </Block>
        </Pressable>
      </Block>
      {slogan && (
        <Text marginTop={16} style={{fontStyle: 'italic'}}>
          {slogan}
        </Text>
      )}
    </Block>
  );
};

export default GadgetsHeader;
