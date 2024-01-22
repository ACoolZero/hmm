import {Block, Header, Image, Text} from '@components';
import {useStore} from '@hooks';
import {RootStackParamList} from '@navigation/types';
import {RouteProp} from '@react-navigation/native';
import {IStory} from '@screens/Bottom/Home/types';
import {sleep} from '@utils/date';
import {getSize, width} from '@utils/responsive';
import dayjs from 'dayjs';
import React, {useEffect, useRef} from 'react';
import {ListRenderItem} from 'react-native';
import Carousel from 'react-native-snap-carousel';

const STORY_WIDTH = width * 0.8;
const STORY_HEIGHT = STORY_WIDTH * 1.7;

interface ActivityDetailsProps {
  route: RouteProp<RootStackParamList, 'ACTIVITY_DETAILS_SCREEN'>;
}

const ActivityDetails: React.FC<ActivityDetailsProps> = ({route}) => {
  const {useSelector} = useStore();
  const {data: momentsList} = useSelector('momentsList');
  const carouselRef = useRef(null);
  const {momentIdx} = route.params;

  useEffect(() => {
    sleep(200).then(() => {
      (carouselRef.current as any)?.snapToItem(momentIdx);
    });
  }, [momentIdx]);

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
      <Header canGoBack title="Moments" />
      <Carousel
        useScrollView={true}
        ref={carouselRef}
        data={momentsList}
        renderItem={_renderItem}
        sliderWidth={width}
        itemWidth={width * 0.8}
      />
    </Block>
  );
};

export default ActivityDetails;
