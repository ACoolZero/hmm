import {Block, Image, ProgressCircle, Text} from '@components';
import {useColors} from '@hooks';
import {IReaction} from '@screens/Bottom/Home/types';
import React, {memo} from 'react';
import styles, {ICON_SIZE, REACTION_SIZE} from './styles';

interface ReactionCardProps {
  item: IReaction;
}

const ReactionCard: React.FC<ReactionCardProps> = ({item}) => {
  const {COLORS} = useColors();
  const {image, label, color, percentage} = item;

  return (
    <Block flex>
      <ProgressCircle
        percentage={percentage}
        size={REACTION_SIZE}
        color={color}
        radius={12}
        backgroundColor={COLORS.light_background}>
        <Block flex alignCenter justifyCenter>
          <Block
            radius={REACTION_SIZE}
            style={{...styles.iconShadow, shadowColor: color}}
            backgroundColor="light_background">
            <Image source={image} round={ICON_SIZE} />
          </Block>
        </Block>
      </ProgressCircle>
      <Text sm center marginTop={5} numberOfLines={1} type="semibold">
        {label}
      </Text>
    </Block>
  );
};

export default memo(ReactionCard);
