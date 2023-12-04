import {Block, Text} from '@components';
import {useStore} from '@hooks';
import {IReaction} from '@screens/Bottom/Home/types';
import React from 'react';
import {Pressable} from 'react-native';
import {SvgUri} from 'react-native-svg';
import styles, {ICON_SIZE, REACTION_SIZE} from './styles';

const Moods: React.FC = () => {
  const {useSelector} = useStore();
  const {data: moodsList} = useSelector('moodsList');
  const _renderItem = (item: IReaction) => {
    const {id, icon, name, color} = item;
    return (
      <Pressable key={id}>
        <Block alignCenter justifyCenter radius={12} square={REACTION_SIZE} backgroundColor="feeling_background">
          <Block
            radius={REACTION_SIZE}
            style={{...styles.iconShadow, shadowColor: color}}
            backgroundColor="secondary_background">
            <SvgUri width={ICON_SIZE} height={ICON_SIZE} uri={icon} />
          </Block>
        </Block>
        <Text sm center marginTop={8} numberOfLines={1} type="semibold" color="light_text">
          {name}
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
        {moodsList?.map(_renderItem)}
      </Block>
    </Block>
  );
};

export default Moods;
