import {Block, Image, Text} from '@components';
import {IReaction} from '@screens/Bottom/Home/types';
import React from 'react';
import {Pressable} from 'react-native';
import {DATA} from './data';
import styles, {ICON_SIZE, REACTION_SIZE} from './styles';

const Moods: React.FC = () => {
  const _renderItem = (item: IReaction) => {
    const {id, image, label, color} = item;
    return (
      <Pressable key={id}>
        <Block alignCenter justifyCenter radius={12} square={REACTION_SIZE} backgroundColor="modal_feeling_background">
          <Block
            radius={REACTION_SIZE}
            style={{...styles.iconShadow, shadowColor: color}}
            backgroundColor="secondary_background">
            <Image source={image} round={ICON_SIZE} />
          </Block>
        </Block>
        <Text sm center marginTop={8} numberOfLines={1} type="semibold" color="light_text">
          {label}
        </Text>
      </Pressable>
    );
  };

  return (
    <Block marginBottom={24}>
      <Text marginBottom={12} type="bold">
        Change the moods you frequently have
      </Text>
      <Block row alignCenter space="between">
        {DATA.map(_renderItem)}
      </Block>
    </Block>
  );
};

export default Moods;
