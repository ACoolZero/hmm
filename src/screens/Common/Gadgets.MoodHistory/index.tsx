import {Block, EmptyList, Header, Image, ListWrapper, Text} from '@components';
import {useColors, useStore, useTranslation} from '@hooks';
import {GET_MOOD_HISTORY} from '@store/actions';
import {getSize} from '@utils/responsive';
import React, {useEffect} from 'react';
import {ListRenderItem} from 'react-native';
import {IMoodHistory, IMoodHistoryState} from './types';
import dayjs from 'dayjs';

const MoodHistory: React.FC = () => {
  const {COLORS, randomTextColor} = useColors();
  const {dispatch, useSelector} = useStore();
  const {data: moodsHistoryList} = useSelector('moodsHistoryList');
  const {t} = useTranslation();

  const _renđerItem: ListRenderItem<IMoodHistory> = ({item}) => {
    const {date, userMoodHistories} = item;

    const _renderHistory = (elm: IMoodHistoryState) => {
      const {moodId, icon, name, time} = elm;

      return (
        <Block
          key={moodId}
          row
          alignCenter
          paddingVertical={12}
          space="between"
          style={{borderBottomWidth: getSize.s(1), borderColor: COLORS.light_text}}>
          <Block row alignCenter>
            <Image source={{uri: icon}} round={32} />
            <Text sm marginLeft={12} type="semibold" color={randomTextColor()}>
              {name}
            </Text>
          </Block>
          <Text sm color="light_text">
            {time}
          </Text>
        </Block>
      );
    };

    return (
      <Block padding={16} marginTop={16} radius={12} backgroundColor="secondary_background">
        <Text>{dayjs(date).format('DD-MM-YYYY')}</Text>
        {userMoodHistories?.map(_renderHistory)}
      </Block>
    );
  };

  useEffect(() => {
    dispatch({type: GET_MOOD_HISTORY});
  }, [dispatch]);

  return (
    <Block flex backgroundColor="background">
      <Header canGoBack title={t('gadgets.mood_history.label')} />
      <Block flex safeBottom paddingHorizontal={16}>
        <ListWrapper
          data={moodsHistoryList}
          keyExtractor={(item: IMoodHistory) => String(item.id)}
          renderItem={_renđerItem}
          EmptyComponent={EmptyList}
        />
      </Block>
    </Block>
  );
};

export default MoodHistory;
