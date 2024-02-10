import {ICONS} from '@assets';
import {Block, Image, Text} from '@components';
import {useBackHandler, useColors, useTranslation} from '@hooks';
import {useNavigation} from '@react-navigation/native';
import {getSize, height, width} from '@utils/responsive';
import dayjs from 'dayjs';
import React, {useEffect, useRef, useState} from 'react';
import {Animated, PanResponder, StyleProp, TouchableOpacity, ViewStyle} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styles from './styles';

const SWIPING_BOUND = {x: width / 4, y: height / 4};

const DetailLayer = ({data, onPress, STORY_WIDTH, STORY_HEIGHT}: any) => {
  const {t} = useTranslation();
  const navigation = useNavigation();
  const {COLORS} = useColors();
  const {top} = useSafeAreaInsets();
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const animatedValue = useRef(new Animated.Value(0)).current;
  const pan = useRef(new Animated.ValueXY()).current;
  const {media, creatorName, content, createdAt} = data;
  const originalDimensions = {
    topOffset: top + 50 + getSize.m(24),
    leftOffset: width * 0.1,
  };

  useEffect(() => {
    navigation.setOptions({gestureEnabled: false});
    return () => navigation.setOptions({gestureEnabled: true});
  }, [navigation]);

  const handleToggle = () =>
    setIsVisible((currentState): boolean => {
      return !currentState;
    });

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [animatedValue]);

  const handleClose = () => onPress({fullMode: false, index: null});
  const closeAnimation = {
    animatedValue: Animated.timing(animatedValue, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    }),
    pan: Animated.timing(pan, {
      toValue: {x: 0, y: 0},
      duration: 300,
      useNativeDriver: false,
    }),
  };
  const handleCloseAnimation = () => {
    closeAnimation.animatedValue.start(() => handleClose());
  };

  useBackHandler({enabled: true, callback: handleCloseAnimation});

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderTerminate: () => true,

      onPanResponderMove: (_, gestureState) => {
        pan.setValue({x: gestureState.dx, y: gestureState.dy});
        setIsVisible(false);
      },

      onPanResponderRelease: (_, gestureState) => {
        if (
          Math.abs(gestureState.dx) >= SWIPING_BOUND.x ||
          Math.abs(gestureState.dy) >= SWIPING_BOUND.y ||
          Math.abs(gestureState.vx) >= 1 ||
          Math.abs(gestureState.vy) >= 1
        ) {
          Animated.parallel([closeAnimation.animatedValue, closeAnimation.pan]).start(() => handleClose());
        } else if (Math.abs(gestureState.dx) > 0 || Math.abs(gestureState.dy) > 0) {
          closeAnimation.pan.start(() => handleToggle());
        }

        if (gestureState.dx === 0 && gestureState.dy === 0) {
          handleToggle();
        }
      },
    }),
  ).current;

  return (
    <Block absolute width={width} height={height}>
      <Animated.View
        style={
          styles.animatedImageContainer({animatedValue, STORY_WIDTH, STORY_HEIGHT, originalDimensions, pan}) as any
        }
        {...panResponder.panHandlers}>
        <Image source={{uri: media}} style={styles.image} />
      </Animated.View>
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
                {t('moments.header')}
              </Text>
            </Block>
            <TouchableOpacity
              onPress={() => {
                handleCloseAnimation();
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
