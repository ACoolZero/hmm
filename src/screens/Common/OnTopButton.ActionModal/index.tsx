import {ICONS, IMAGES} from '@assets';
import {Block, Image, Text} from '@components';
import {navigate} from '@navigation/NavigationServices';
import routes from '@navigation/routes';
import {BlurView} from '@react-native-community/blur';
import {getSize} from '@utils/responsive';
import React, {useState} from 'react';
import {DeviceEventEmitter, Pressable} from 'react-native';
import styles from './styles';

const ActionModal: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  DeviceEventEmitter.addListener('showActionModal', () => {
    setIsVisible(true);
  });

  if (!isVisible) return null;
  return (
    <Block style={styles.container}>
      <BlurView style={styles.container} blurType="dark" blurAmount={16} />
      <Block safeBottom flex row alignEnd>
        <Block flex alignEnd justifyCenter height={300}>
          {/**
           * Milestone
           */}
          <Pressable onPress={() => {}}>
            <Block alignCenter marginBottom={30} marginRight={8}>
              <Image source={IMAGES.milestone} square={50} />
              <Text marginTop={8} type="medium">
                Milestone
              </Text>
            </Block>
          </Pressable>
          {/**
           * Moment
           */}
          <Pressable onPress={() => {}}>
            <Block alignCenter>
              <Image source={IMAGES.moment} square={50} />
              <Text marginTop={8} type="medium">
                Moment
              </Text>
            </Block>
          </Pressable>
        </Block>
        <Block flex alignCenter justifyCenter height={350}>
          {/**
           * Suggest
           */}
          <Pressable onPress={() => {}}>
            <Block alignCenter>
              <Image source={IMAGES.suggest} square={50} />
              <Text marginTop={8} type="medium">
                Suggest
              </Text>
            </Block>
          </Pressable>
          <Block alignCenter marginVertical={30}>
            <Block square={75} style={styles.btnAvatar}>
              <Image source={IMAGES.fab_icon} square={60} style={{borderRadius: getSize.s(24)}} />
            </Block>
            <Pressable style={styles.btnClose} onPress={() => setIsVisible(false)}>
              <Image source={ICONS.close} square={12} tintColor="white" />
            </Pressable>
          </Block>
          {/**
           * Customization
           */}
          <Pressable
            onPress={() => {
              setIsVisible(false);
              navigate(routes.GADGETS_CUSTOMIZATION_SCREEN);
            }}>
            <Block alignCenter>
              <Image source={IMAGES.customization} square={25} resizeMode="contain" />
            </Block>
          </Pressable>
        </Block>
        <Block flex alignStart justifyCenter height={300}>
          {/**
           * Discover
           */}
          <Pressable onPress={() => {}}>
            <Block alignCenter marginBottom={30} marginLeft={8}>
              <Image source={IMAGES.discover} square={50} />
              <Text marginTop={8} type="medium">
                Discover
              </Text>
            </Block>
          </Pressable>
          {/**
           * Volunteer
           */}
          <Pressable onPress={() => {}}>
            <Block alignCenter opacity={0.3}>
              <Image source={IMAGES.volunteer} square={50} />
              <Text marginTop={8} type="medium">
                Volunteer
              </Text>
            </Block>
          </Pressable>
        </Block>
      </Block>
    </Block>
  );
};

export default ActionModal;
