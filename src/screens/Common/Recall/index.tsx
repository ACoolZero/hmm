/* eslint-disable react-hooks/exhaustive-deps */
import {Block, Image, Text} from '@components';
import {useStore, useTranslation} from '@hooks';
import {RootStackParamList} from '@navigation/types';
import {RouteProp} from '@react-navigation/native';
import {IStory} from '@screens/Bottom/Home/types';
import {SET_ACTIVE_MOMENT, _onSuccess} from '@store/actions';
import {sleep} from '@utils/date';
import {getSize, width} from '@utils/responsive';
import dayjs from 'dayjs';
import React, {useEffect, useRef} from 'react';
import {ListRenderItem} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Header from './components/Header';

const STORY_WIDTH = width * 0.8;
const STORY_HEIGHT = STORY_WIDTH * 1.7;

interface RecallProps {
  route: RouteProp<RootStackParamList, 'RECALL_SCREEN'>;
}

const Recall: React.FC<RecallProps> = ({route}) => {
  const {dispatch, useSelector} = useStore();
  const {data: userMomentsList} = useSelector('userMomentsList');
  const carouselRef = useRef(null);
  const {momentIdx} = route.params;
  const {t} = useTranslation();

  useEffect(() => {
    sleep(200).then(() => {
      (carouselRef.current as any)?.snapToItem(momentIdx);
    });
  }, [momentIdx]);

  useEffect(() => {
    const moment = [...userMomentsList][0];
    dispatch({type: _onSuccess(SET_ACTIVE_MOMENT), payload: {data: moment}});
  }, [dispatch]);

  const onSnapToItem = (e: number) => {
    const moment = [...userMomentsList][e];
    dispatch({type: _onSuccess(SET_ACTIVE_MOMENT), payload: {data: moment}});
  };

  const _renderItem: ListRenderItem<IStory> = ({item}) => {
    const {media, content, createdAt} = item;
    return (
      <Block paddingVertical={24}>
        <Image source={{uri: media}} width={STORY_WIDTH} height={STORY_HEIGHT} style={{borderRadius: getSize.s(24)}} />
        <Block padding={24}>
          <Text center size={24} marginBottom={5} numberOfLines={2} type="semibold">
            {content}
          </Text>
          <Text sm center size={24} numberOfLines={1} color="sub_text">
            {dayjs(createdAt).format('DD/MM/YYYY')}
          </Text>
        </Block>
      </Block>
    );
  };

  return (
    <Block flex backgroundColor="background">
      <Header canGoBack title={t('recall.header')} />
      <Carousel
        ref={carouselRef}
        data={userMomentsList}
        renderItem={_renderItem}
        sliderWidth={width}
        itemWidth={width * 0.8}
        onSnapToItem={onSnapToItem}
      />
    </Block>
  );
};

export default Recall;
