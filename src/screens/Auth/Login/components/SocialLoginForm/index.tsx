import {ICONS} from '@assets';
import {Block, Image, Text} from '@components';
import {useStore} from '@hooks';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {LOGIN_GOOGLE} from '@store/actions';
import {isIos} from '@utils/helper';
import {width} from '@utils/responsive';
import React from 'react';
import {TouchableOpacity} from 'react-native';

const SocialLoginForm: React.FC = () => {
  const {dispatch} = useStore();

  const _handleLoginGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      const {accessToken} = await GoogleSignin.getTokens();
      dispatch({type: LOGIN_GOOGLE, payload: {accessToken, email: userInfo.user.email}});
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Block>
      <Block row alignCenter>
        <Block flex height={1} backgroundColor="#DDDDDD" />
        <Text center marginVertical={24} marginHorizontal={12} color="primary">
          Or
        </Text>
        <Block flex height={1} backgroundColor="#DDDDDD" />
      </Block>
      <Block row alignCenter paddingHorizontal={width * 0.2} space="between">
        {isIos && (
          <TouchableOpacity>
            <Image source={ICONS.apple} square={24} resizeMode="contain" />
          </TouchableOpacity>
        )}
        <TouchableOpacity onPress={_handleLoginGoogle}>
          <Image source={ICONS.google} square={24} resizeMode="contain" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={ICONS.twitter} square={24} resizeMode="contain" />
        </TouchableOpacity>
      </Block>
    </Block>
  );
};

export default SocialLoginForm;
