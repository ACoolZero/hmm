import {ICONS} from '@assets';
import {Block, Image, LazyImage, Text} from '@components';
import {useStore} from '@hooks';
import {navigate} from '@navigation/NavigationServices';
import routes from '@navigation/routes';
import {IMoment} from '@screens/Bottom/Moments/types';
import {LIKE_MOMENT} from '@store/actions';
import {getSize, width} from '@utils/responsive';
import React, {memo} from 'react';
import {Pressable, StyleSheet, TouchableOpacity, ViewStyle} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const FULL_WIDTH = width - getSize.s(16 * 2);
const HALF_WIDTH = (width - getSize.s(16 * 2 + 11)) / 2;

interface MomentCardProps {
  item: IMoment;
  index: number;
}

const MomentCard: React.FC<MomentCardProps> = ({item, index}) => {
  const {dispatch} = useStore();
  const {id, thumbnail, media, content, liked, creatorName} = item;
  const position = index + 1;
  const specific = position % 9 === 0 ? 9 : position % 9;
  const specificStyle: {[k: number]: ViewStyle} = {
    1: {width: FULL_WIDTH, height: FULL_WIDTH * 0.57},
    2: {width: HALF_WIDTH, height: HALF_WIDTH * 1.16},
    3: {width: HALF_WIDTH, height: HALF_WIDTH * 1.45},
    4: {width: HALF_WIDTH, height: HALF_WIDTH * 1.45},
    5: {width: HALF_WIDTH, height: HALF_WIDTH * 1.16},
    6: {width: FULL_WIDTH, height: FULL_WIDTH},
    7: {width: HALF_WIDTH, height: HALF_WIDTH},
    8: {width: HALF_WIDTH, height: FULL_WIDTH},
    9: {width: HALF_WIDTH, height: HALF_WIDTH},
  };
  const isFourthItem = (position - 4) % 9 === 0;
  const isNinethItem = position % 9 === 0;
  let marginTop = 0;
  if (isFourthItem) {
    marginTop = -HALF_WIDTH * 0.285;
  } else if (isNinethItem) {
    marginTop = -HALF_WIDTH - 4;
  }

  return (
    <Pressable
      onPress={() => {
        navigate(routes.ACTIVITY_DETAILS_SCREEN, {momentIdx: index});
      }}>
      <Block
        radius={24}
        overflow="hidden"
        marginTop={marginTop}
        marginBottom={12}
        backgroundColor="background"
        style={specificStyle[specific]}>
        <Block absolute>
          <LazyImage thumbnail={thumbnail} source={media} style={specificStyle[specific]} />
        </Block>
        <LinearGradient
          style={{...StyleSheet.absoluteFillObject}}
          colors={['#00000060', '#00000030', '#00000000', '#00000030', '#00000060']}
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}>
          <Block flex paddingHorizontal={16} paddingTop={12} paddingBottom={8} space="between">
            <Text type="bold" color="#FAFAFA" numberOfLines={3}>
              {content}
            </Text>
            <Block row alignCenter space="between">
              <Text flex sm color="#FAFAFA" numberOfLines={1}>
                {creatorName}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  dispatch({type: LIKE_MOMENT, payload: {id, action: liked ? 'UNLIKE' : 'LIKE'}});
                }}>
                <Block alignCenter justifyCenter round={36} backgroundColor="#00000070">
                  <Image source={liked ? ICONS.loved : ICONS.unloved} square={20} resizeMode="contain" />
                </Block>
              </TouchableOpacity>
            </Block>
          </Block>
        </LinearGradient>
      </Block>
    </Pressable>
  );
};

export default memo(MomentCard);
