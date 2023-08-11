import {ICONS} from '@assets';
import {Block, Image, Text} from '@components';
import {IMOMENT} from '@screens/Bottom/Moments/types';
import {getSize, width} from '@utils/responsive';
import React from 'react';
import {ImageBackground, Pressable, ScrollView, StyleSheet, ViewStyle} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {DATA} from './data';

const FULL_WIDTH = width - getSize.s(16 * 2);
const HALF_WIDTH = (width - getSize.s(16 * 2 + 12)) / 2;

const Newsfeed: React.FC = () => {
  const _renderItem = (item: IMOMENT, index: number) => {
    const {id, image, title, loved, author} = item;
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
    const isFirstItem = position % 9 === 1;
    const isFourthItem = (position - 4) % 9 === 0;
    const isNinethItem = position % 9 === 0;
    let marginTop = 0;
    if (isFirstItem) {
      marginTop = -12;
    }
    if (isFourthItem) {
      marginTop = -HALF_WIDTH * 0.285;
    } else if (isNinethItem) {
      marginTop = -HALF_WIDTH - 4;
    }

    return (
      <Pressable key={id}>
        <Block radius={24} overflow="hidden" marginTop={marginTop}>
          <ImageBackground source={image} style={specificStyle[specific]}>
            <LinearGradient
              style={{...StyleSheet.absoluteFillObject}}
              colors={['#00000060', '#00000020', '#00000000', '#00000020', '#00000060']}
              start={{x: 0, y: 0}}
              end={{x: 0, y: 1}}>
              <Block flex paddingHorizontal={16} paddingTop={12} paddingBottom={8} space="between">
                <Text type="bold" color="#FAFAFA" numberOfLines={3}>
                  {title}
                </Text>
                <Block row alignCenter space="between">
                  <Text flex sm color="#FAFAFA" numberOfLines={1}>
                    {author}
                  </Text>
                  <Pressable>
                    <Block alignCenter justifyCenter round={36} backgroundColor="#00000070">
                      <Image source={loved ? ICONS.loved : ICONS.unloved} square={20} resizeMode="contain" />
                    </Block>
                  </Pressable>
                </Block>
              </Block>
            </LinearGradient>
          </ImageBackground>
        </Block>
      </Pressable>
    );
  };

  return (
    <Block flex paddingHorizontal={16}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Block row wrap paddingTop={12} paddingBottom={50} gap={12}>
          {DATA.map(_renderItem)}
        </Block>
      </ScrollView>
    </Block>
  );
};

export default Newsfeed;
