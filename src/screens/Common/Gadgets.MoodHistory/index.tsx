import {IMAGES} from '@assets';
import {Block, EmptyList, Header, Image, ListWrapper, Text} from '@components';
import {useColors} from '@hooks';
import {getSize} from '@utils/responsive';
import React from 'react';
import {ListRenderItem} from 'react-native';
import data from './data';
import {IMoodHistory} from './types';

const MoodHistory: React.FC = () => {
  const {COLORS, randomTextColor} = useColors();

  const _renđerItem: ListRenderItem<IMoodHistory> = ({item}) => {
    const {datetime, history} = item;

    const _renderHistory = (e: any) => (
      <Block
        key={e.id}
        row
        alignCenter
        paddingVertical={12}
        space="between"
        style={{borderBottomWidth: getSize.s(1), borderColor: COLORS.light_text}}>
        <Block row alignCenter>
          <Image source={IMAGES.fun} round={32} />
          <Text sm marginLeft={12} type="semibold" color={randomTextColor()}>
            {e.label}
          </Text>
        </Block>
        <Text sm color="light_text">
          {e.time}
        </Text>
      </Block>
    );

    return (
      <Block padding={16} marginTop={16} radius={12} backgroundColor="secondary_background">
        <Text>{datetime}</Text>
        {history.map(_renderHistory)}
      </Block>
    );
  };

  return (
    <Block flex backgroundColor="background">
      <Header canGoBack title="Mood history" />
      <Block flex safeBottom paddingHorizontal={16}>
        <ListWrapper
          data={data}
          keyExtractor={(item: IMoodHistory) => item.id}
          renderItem={_renđerItem}
          EmptyComponent={EmptyList}
        />
      </Block>
    </Block>
  );
};

export default MoodHistory;
