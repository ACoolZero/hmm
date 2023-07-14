import {Block, Text} from '@components';
import {useColors, useStore} from '@hooks';
import {CHANGE_CHAT_COLOR} from '@store/actions';
import React, {useState} from 'react';
import {Pressable} from 'react-native';

const colors: string[] = ['#558EF9', '#00C0A6', '#FFE9A9', '#FF99FF', '#C070FF'];

const ChatColor: React.FC = () => {
  const {dispatch, useSelector} = useStore();
  const {COLORS} = useColors();
  const {chatColor} = useSelector('general');
  const [selected, setSelected] = useState<string>(chatColor);

  const _renderItem = (item: string) => {
    const isSelected = selected === item;

    return (
      <Pressable
        key={item}
        onPress={() => {
          dispatch({type: CHANGE_CHAT_COLOR, payload: {chatColor: item}});
          setSelected(item);
        }}>
        <Block row alignCenter>
          <Block flex alignCenter justifyCenter radius={12} height={36} backgroundColor={item}>
            <Text color="#213138">I feel very sad today</Text>
          </Block>
          <Block alignCenter justifyCenter width={80} height={36}>
            <Block
              alignCenter
              justifyCenter
              round={20}
              borderWidth={2}
              borderColor={isSelected ? COLORS.primary : COLORS.light_text}>
              <Block round={10} backgroundColor={isSelected ? COLORS.primary : COLORS.background} />
            </Block>
          </Block>
        </Block>
      </Pressable>
    );
  };

  return (
    <Block marginBottom={24}>
      <Text marginBottom={12} type="bold">
        Chat color
      </Text>
      <Block gap={8}>{colors.map(_renderItem)}</Block>
    </Block>
  );
};

export default ChatColor;
