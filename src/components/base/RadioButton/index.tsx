import {Block, Text} from '@components';
import React from 'react';
import {Pressable} from 'react-native';
import styles from './styles';
import {ItemType, RadioButtonProps} from './types';

const RadioButton: React.FC<RadioButtonProps> = ({
  data,
  selected,
  setSelected,
  onPress,
  containerStyle,
  itemStyle,
  labelStyle,
  unCheckColor = 'smoke',
  checkedColor = 'primary',
}) => {
  const _renderItem = (item: ItemType, index: number) => {
    return (
      <Pressable
        key={index}
        style={[styles.itemStyle, itemStyle]}
        onPress={() => {
          item.value !== selected && setSelected && setSelected(item.value);
          onPress && onPress(item.value);
        }}>
        <Block row alignCenter>
          <Block
            round={18}
            alignCenter
            justifyCenter
            backgroundColor={item.value === selected ? checkedColor : unCheckColor}>
            {item.value === selected && <Block round={6} backgroundColor="white" />}
          </Block>
          <Text marginLeft={10} style={labelStyle}>
            {item.label}
          </Text>
        </Block>
      </Pressable>
    );
  };

  return (
    <Block row style={containerStyle}>
      {data?.map(_renderItem)}
    </Block>
  );
};

export default RadioButton;
