import {ICONS} from '@assets';
import {Block, Text} from '@components';
import {useColors} from '@hooks';
import {IQuestion} from '@screens/Common/Gadgets.FAQ/data';
import {getSize} from '@utils/responsive';
import React, {memo, useState} from 'react';
import {Animated, LayoutAnimation, Pressable} from 'react-native';

interface FAQCardProps {
  item: IQuestion;
  index: number;
  tintColor: string;
  isLastItem: boolean;
}
const FAQCard: React.FC<FAQCardProps> = ({item, index, tintColor, isLastItem}) => {
  const animatedValue = new Animated.Value(0);
  const {COLORS} = useColors();
  const [expanded, setExpanded] = useState<IQuestion | null>(null);
  const {id, title, description} = item;
  const isSelected = expanded === item;

  Animated.timing(animatedValue, {toValue: 1, duration: 250, useNativeDriver: true}).start();

  const rotate = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: expanded ? ['0deg', '90deg'] : ['90deg', '0deg'],
  });

  const _handleClick = () => {
    isSelected ? setExpanded(null) : setExpanded(item);
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  };

  return (
    <Pressable key={id} onPress={_handleClick}>
      <Block row alignCenter padding={16} space="between">
        <Block row alignCenter>
          <Block alignCenter justifyCenter radius={8} square={32} backgroundColor={tintColor}>
            <Text sm>{index + 1}</Text>
          </Block>
          <Text marginLeft={12}>{title}</Text>
        </Block>
        <Animated.Image
          source={ICONS.arrow_right}
          style={{height: getSize.s(14), width: getSize.s(14), transform: [{rotate}]}}
          tintColor={COLORS.sub_text}
        />
      </Block>
      {isSelected && (
        <Block padding={16}>
          <Text sm>{description}</Text>
        </Block>
      )}
      {!isLastItem && <Block height={1} marginHorizontal={16} backgroundColor={COLORS.sub_text} />}
    </Pressable>
  );
};

export default memo(FAQCard);
