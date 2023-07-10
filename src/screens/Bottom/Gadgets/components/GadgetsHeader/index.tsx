/* eslint-disable react-native/no-inline-styles */
import {ICONS, IMAGES} from '@assets';
import {Block, Image, Text} from '@components';
import React from 'react';
import {Pressable} from 'react-native';

const GadgetsHeader: React.FC = () => {
  return (
    <Block padding={24}>
      <Block row space="between">
        <Block flex row>
          <Image source={IMAGES.avatar} round={72} />
          <Block flex marginLeft={12} space="between">
            <Text md type="semibold">
              Alice Smith
            </Text>
            <Text sm color="light_text">
              +191 23 456 7890
            </Text>
            <Text sm color="light_text">
              alicesmith.work@mail.com
            </Text>
          </Block>
        </Block>
        <Pressable onPress={() => {}}>
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
      <Text marginTop={16} style={{fontStyle: 'italic'}}>
        Sometimes, it’s better to smile 🤡 than to explain why you’re sad 🥹
      </Text>
    </Block>
  );
};

export default GadgetsHeader;
