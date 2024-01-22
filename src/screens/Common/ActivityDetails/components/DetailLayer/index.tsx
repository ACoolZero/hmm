import {Block, Image, Text} from '@components';
import {useNavigation} from '@react-navigation/native';
import {height, width, getSize} from '@utils/responsive';
import React, {useEffect, useState} from 'react';
import {Pressable, StyleProp, ViewStyle} from 'react-native';
import {useColors} from '@hooks';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import dayjs from 'dayjs';
import styles from './styles';
const DetailLayer = ({data, onPress}: any) => {
  const navigation = useNavigation();
  const {media, creatorName, content, createdAt} = data;

  useEffect(() => {
    navigation.setOptions({
      gestureEnabled: false,
    });

    return () => {
      navigation.setOptions({
        gestureEnabled: true,
      });
    };
  }, [navigation]);

  const {COLORS} = useColors();
  const {top} = useSafeAreaInsets();
  const [isVisible, setIsVisible] = useState(true);
  const handleToggle = () => {
    setIsVisible(isVisible);
  };
  return (
    <Block absolute onLayout={e => console.log(e.nativeEvent.layout)}>
      <Pressable onPress={handleToggle}>
        <Image source={{uri: media}} width={width} height={height} />
      </Pressable>
      {isVisible && (
        <>
          <Pressable
            onPress={() => onPress({fullMode: false, index: null})}
            style={styles.closeButtonContainer(top, COLORS.secondary_background) as StyleProp<ViewStyle>}>
            <Text color={COLORS.text}>X</Text>
          </Pressable>
          <Block
            absolute
            padding={24}
            bottom={0}
            width={width}
            radius={getSize.m(20)}
            backgroundColor={`${COLORS.secondary_background}66`}
            style={{maxHeight: getSize.v(height / 3.5)}}>
            <Block row>
              <Text color={COLORS.text} type="semibold">
                {creatorName}
              </Text>
              <Text marginHorizontal={getSize.s(8)} color={COLORS.text}>
                -
              </Text>
              <Text color={COLORS.text}>{dayjs(createdAt).format('DD/MM/YYYY')}</Text>
            </Block>
            <Text md marginVertical={getSize.v(8)} color={COLORS.text}>
              {content}
            </Text>
          </Block>
        </>
      )}
    </Block>
  );
};

export default DetailLayer;
