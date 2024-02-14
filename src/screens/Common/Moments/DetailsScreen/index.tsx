import {Block, Header, Image, Text} from '@components';
import {useStore} from '@hooks';
import {RootStackParamList} from '@navigation/types';
import {RouteProp} from '@react-navigation/native';
import {GET_MOMENT_DETAILS} from '@store/actions';
import {getSize, width} from '@utils/responsive';
import dayjs from 'dayjs';
import React, {useEffect} from 'react';

const STORY_WIDTH = width * 0.8;
const STORY_HEIGHT = STORY_WIDTH * 1.7;

interface DetailsScreenProps {
  route: RouteProp<RootStackParamList, 'MOMENT_DETAILS_SCREEN'>;
}

const DetailsScreen: React.FC<DetailsScreenProps> = ({route}) => {
  const {dispatch, useSelector} = useStore();
  const {data: momentDetails} = useSelector('momentDetails');
  const {momentId} = route.params;

  useEffect(() => {
    dispatch({type: GET_MOMENT_DETAILS, payload: {momentId}});
  }, [dispatch, momentId]);

  return (
    <Block flex backgroundColor="background">
      <Header canGoBack title="My Memories" />
      {momentDetails && (
        <Block paddingVertical={24} alignCenter>
          <Image
            source={{uri: momentDetails.media}}
            width={STORY_WIDTH}
            height={STORY_HEIGHT}
            style={{borderRadius: getSize.s(24)}}
          />
          <Block padding={24}>
            <Text center size={24} marginBottom={5} numberOfLines={2} type="semibold">
              {momentDetails.content}
            </Text>
            <Text sm center size={24} numberOfLines={1} color="light_text">
              {dayjs(momentDetails.createdAt).format('DD/MM/YYYY')}
            </Text>
          </Block>
        </Block>
      )}
    </Block>
  );
};

export default DetailsScreen;
