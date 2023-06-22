import {ICONS} from '@assets';
import {Block, Image, MilestoneCard, Text} from '@components';
import {useColors} from '@hooks';
import {navigate} from '@navigation/NavigationServices';
import routes from '@navigation/routes';
import {IMilestone} from '@screens/Bottom/Home/types';
import React, {memo} from 'react';
import {Pressable} from 'react-native';
import {DATA} from './data';

const Milestones: React.FC = () => {
  const {COLORS} = useColors();

  const _renderItem = (item: IMilestone, index: number) => {
    const isLastItem = index === 2;
    return <MilestoneCard key={item.id} item={item} isLastItem={isLastItem} />;
  };

  return (
    <Block
      radius={20}
      marginBottom={24}
      marginHorizontal={16}
      paddingHorizontal={16}
      paddingTop={24}
      paddingBottom={8}
      borderWidth={1}
      borderColor="border">
      <Block row alignCenter marginBottom={25} marginRight={-1} space="between">
        <Text md type="bold">
          Keep fighting !
        </Text>
        <Pressable onPress={() => navigate(routes.MILESTONE_DETAILS_SCREEN)}>
          <Block row alignCenter>
            <Text sm marginRight={6} color={COLORS.primary}>
              See more
            </Text>
            <Image source={ICONS.arrow_right} square={12} tintColor={COLORS.primary} />
          </Block>
        </Pressable>
      </Block>
      <Block>{DATA.slice(0, 3).map(_renderItem)}</Block>
    </Block>
  );
};

export default memo(Milestones);
