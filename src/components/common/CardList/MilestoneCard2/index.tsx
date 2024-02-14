import {Block, Text} from '@components';
import {useColors} from '@hooks';
import {IMilestone} from '@screens/Bottom/Home/types';
import dayjs from 'dayjs';
import React, {memo} from 'react';
import {Pressable} from 'react-native';

interface MilestoneCardProps {
  item: IMilestone;
  selectedId: string;
  onPress?: () => void;
}

const MilestoneCard2: React.FC<MilestoneCardProps> = ({item, selectedId, onPress}) => {
  const {COLORS, randomTextColor, randomBackgroundColor} = useColors();
  const {id, icon, content, milestoneTime} = item;
  const isSelected = selectedId === id;

  return (
    <Pressable onPress={() => onPress && onPress()}>
      <Block
        row
        alignCenter
        radius={20}
        paddingHorizontal={16}
        paddingVertical={6}
        marginBottom={8}
        space="between"
        backgroundColor={isSelected ? '#FF974A' : COLORS.secondary_background}>
        <Block flex row alignCenter marginRight={12}>
          <Block alignCenter justifyCenter radius={5} square={40} backgroundColor={randomBackgroundColor()}>
            <Text md>{icon}</Text>
          </Block>
          <Text
            flex
            sm
            marginLeft={12}
            numberOfLines={1}
            color={isSelected ? 'white' : randomTextColor()}
            type="semibold">
            {content}
          </Text>
        </Block>
        <Block row alignCenter>
          <Text sm marginRight={6} color="#5C7887">
            {dayjs(milestoneTime).format('DD/MM/YYYY')}
          </Text>
          <Block round={8} backgroundColor={isSelected ? COLORS.background : COLORS.primary} />
        </Block>
      </Block>
    </Pressable>
  );
};

export default memo(MilestoneCard2);
