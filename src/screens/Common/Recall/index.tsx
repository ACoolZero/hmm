import {Block, Image, Text} from '@components';
import {useStore} from '@hooks';
import {IStory} from '@screens/Bottom/Home/types';
import {getSize, width} from '@utils/responsive';
import dayjs from 'dayjs';
import React from 'react';
import {ListRenderItem} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Header from './components/Header';

const STORY_WIDTH = width * 0.8;
const STORY_HEIGHT = STORY_WIDTH * 1.7;

const Recall: React.FC = () => {
  const {useSelector} = useStore();
  const {data: userMomentsList} = useSelector('userMomentsList');

  const _renderItem: ListRenderItem<IStory> = ({item}) => {
    const {media, content, createdAt} = item;

    return (
      <Block paddingVertical={24}>
        <Image source={{uri: media}} width={STORY_WIDTH} height={STORY_HEIGHT} style={{borderRadius: getSize.s(24)}} />
        <Block padding={24}>
          <Text center size={24} marginBottom={5} numberOfLines={2} type="semibold">
            {content}
          </Text>
          <Text sm center size={24} numberOfLines={1} color="light_text">
            {dayjs(createdAt).format('DD/MM/YYYY')}
          </Text>
        </Block>
      </Block>
    );
  };

  return (
    <Block flex backgroundColor="background">
      <Header canGoBack title="Recall" />
      <Carousel data={userMomentsList} renderItem={_renderItem} sliderWidth={width} itemWidth={width * 0.8} />
    </Block>
  );
};

export default Recall;
