import {ICONS} from '@assets';
import {Block, Image, Text} from '@components';
import {useColors} from '@hooks';
import {useNavigation} from '@react-navigation/native';
import {getSize, height, width} from '@utils/responsive';
import dayjs from 'dayjs';
import React, {useEffect, useRef, useState} from 'react';
import {Animated, Pressable, StyleProp, TouchableOpacity, ViewStyle} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styles from './styles';

const DetailLayer = ({data, onPress, STORY_WIDTH, STORY_HEIGHT}: any) => {
  const navigation = useNavigation();
  const {COLORS} = useColors();
  const {top} = useSafeAreaInsets();
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const {media, creatorName, content, createdAt} = data;
  const topOffset = top + 50 + getSize.m(24);
  const leftOffset = width * 0.1;

  useEffect(() => {
    navigation.setOptions({gestureEnabled: false});
    return () => navigation.setOptions({gestureEnabled: true});
  }, [navigation]);

  const handleToggle = () => setIsVisible(!isVisible);

  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  });

  return (
    <Block absolute width={width} height={height}>
      <Pressable onPress={handleToggle}>
        <Animated.View
          style={
            styles.animatedImageContainer({animatedValue, STORY_WIDTH, STORY_HEIGHT, leftOffset, topOffset}) as any
          }>
          <Image source={{uri: media}} style={styles.image} />
        </Animated.View>
      </Pressable>
      {isVisible && (
        <>
          <Animated.View style={styles.animatedHeader({top, animatedValue}) as any}>
            <Block
              absolute
              alignCenter
              justifyCenter
              width={width}
              height={top + 50}
              paddingTop={top}
              backgroundColor="#00000090">
              <Text center color={COLORS.white} type="semibold">
                Moments
              </Text>
            </Block>
            <TouchableOpacity
              onPress={() => {
                Animated.timing(animatedValue, {
                  toValue: 0,
                  duration: 300,
                  useNativeDriver: false,
                }).start(() => {
                  onPress({fullMode: false, index: null});
                });
              }}
              style={styles.closeButtonContainer(top) as StyleProp<ViewStyle>}>
              <Image source={ICONS.close} square={16} tintColor={COLORS.white} />
            </TouchableOpacity>
          </Animated.View>
          <Animated.View style={styles.animatedDetailText(animatedValue) as any}>
            <Block absolute width={width} bottom={0} safeBottom padding={16} backgroundColor="#00000090">
              <Block row alignCenter>
                <Text color={COLORS.placeholder} type="medium">
                  {creatorName}
                </Text>
                <Text color={COLORS.placeholder} marginHorizontal={8}>
                  -
                </Text>
                <Text color={COLORS.placeholder}>{dayjs(createdAt).format('DD/MM/YYYY')}</Text>
              </Block>
              <Text marginVertical={8} color={COLORS.placeholder}>
                {content}
              </Text>
            </Block>
          </Animated.View>
        </>
      )}
    </Block>
  );
};

export default DetailLayer;
