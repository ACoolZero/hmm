import {Block, Header, Image, Text} from '@components';
import {useStore} from '@hooks';
import {RootStackParamList} from '@navigation/types';
import {RouteProp} from '@react-navigation/native';
import {sleep} from '@utils/date';
import {getSize, width} from '@utils/responsive';
import dayjs from 'dayjs';
import React, {useEffect, useRef, useState} from 'react';
import {Pressable} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import DetailLayer from './components/DetailLayer';

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
    sleep(500).then(() => {
      (carouselRef.current as any)?.snapToItem(momentIdx);
    });
  }, [momentIdx]);

  const [isFullMode, setIsFullMode] = useState(false);
  const [momentIndex, setMomentIndex] = useState<null | number>(null);
  const handlePress = (payload: {fullMode: boolean; index: number}) => {
    const {fullMode, index} = payload;
    setIsFullMode(fullMode);
    setMomentIndex(index);
  };

  const _renderItem = ({item, index, onPress}: any) => {
    const {media, content, createdAt} = item;
    return (
      <Block paddingVertical={24}>
        <Pressable onPress={() => onPress({fullMode: true, index})}>
          <Image
            source={{uri: media}}
            width={STORY_WIDTH}
            height={STORY_HEIGHT}
            style={{borderRadius: getSize.s(24)}}
          />
        </Pressable>
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
        renderItem={({item, index}) => <_renderItem item={item} index={index} onPress={handlePress} />}
        sliderWidth={width}
        itemWidth={width * 0.8}
      />
      {isFullMode && <DetailLayer data={momentsList[momentIndex!]} onPress={handlePress} />}
    </Block>
  );
};

export default ActivityDetails;
