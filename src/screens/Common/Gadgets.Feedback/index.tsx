import {ICONS} from '@assets';
import {Block, FormContainer, Header, Image, Text} from '@components';
import {useColors, useDeviceInfo} from '@hooks';
import {navigate} from '@navigation/NavigationServices';
import React from 'react';
import {Linking, Pressable} from 'react-native';
import data, {IFeedback} from './data';
import styles from './styles';

const url = 'https://reliable.vn/about-us';

const Feedback: React.FC = () => {
  const {COLORS} = useColors();
  const {version} = useDeviceInfo();

  const _renderItem = (item: IFeedback, index: number) => {
    const {id, icon, label, route} = item;
    const isLastItem = index === data.length - 1;
    return (
      <Pressable key={id} onPress={() => navigate(route)}>
        <Block row alignCenter padding={16} space="between">
          <Block row alignCenter>
            <Image source={icon} square={32} />
            <Text marginLeft={12}>{label}</Text>
          </Block>
          <Image source={ICONS.arrow_right} square={14} tintColor="light_text" />
        </Block>
        {!isLastItem && <Block height={1} marginHorizontal={16} backgroundColor={COLORS.light_text} />}
      </Pressable>
    );
  };

  return (
    <Block flex paddingBottom={60} backgroundColor="background">
      <Header canGoBack title="FAQ / Feedback" />
      <FormContainer>
        <Block margin={16} radius={12} backgroundColor="secondary_background">
          {data.map(_renderItem)}
        </Block>
        <Pressable style={{...styles.btnLogout, borderColor: COLORS.light_text}} onPress={() => Linking.openURL(url)}>
          <Image source={ICONS.aboutUs} square={30} />
          <Text marginLeft={12}>About Us</Text>
        </Pressable>
        <Block margin={16} paddingHorizontal={16}>
          <Text marginBottom={3}>Version: {version}</Text>
          <Text color="light_text">You are using the latest version of the app.</Text>
        </Block>
      </FormContainer>
    </Block>
  );
};

export default Feedback;
