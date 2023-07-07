import {Block, Image, Text} from '@components';
import {useColors} from '@hooks';
import {IMilestone} from '@screens/Bottom/Home/types';
import React, {memo} from 'react';
import {Pressable} from 'react-native';

interface MilestoneCardProps {
  item: IMilestone;
}

const MilestoneCard2: React.FC<MilestoneCardProps> = ({item}) => {
  const {randomTextColor, randomBackgroundColor} = useColors();
  const {image, label, datetime} = item;
  const {COLORS} = useColors();

  return (
    <Pressable onPress={() => {}}>
      <Block
        row
        alignCenter
        radius={20}
        paddingHorizontal={16}
        paddingVertical={6}
        marginBottom={8}
        space="between"
        backgroundColor={COLORS.secondary_background}>
        <Block flex row alignCenter marginRight={12}>
          <Block alignCenter justifyCenter radius={5} square={40} backgroundColor={randomBackgroundColor()}>
            <Image source={image} square={30} resizeMode="contain" />
          </Block>
          <Text flex sm marginLeft={12} numberOfLines={1} color={randomTextColor()} type="semibold">
            {label}
          </Text>
        </Block>
        <Block row alignCenter>
          <Text sm marginRight={6} color="#5C7887">
            {datetime}
          </Text>
          <Block round={8} backgroundColor={COLORS.primary} />
        </Block>
      </Block>
    </Pressable>
  );
};

export default memo(MilestoneCard2);
