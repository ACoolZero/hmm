import {ICONS} from '@assets';
import {Block, Image, Text} from '@components';
import {useColors} from '@hooks';
import {useNavigation} from '@react-navigation/native';
import {getSize, height, width} from '@utils/responsive';
import dayjs from 'dayjs';
import React, {useEffect, useState} from 'react';
import {Pressable, StyleProp, TouchableOpacity, ViewStyle} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styles from './styles';

const DetailLayer = ({data, onPress}: any) => {
  const navigation = useNavigation();
  const {COLORS} = useColors();
  const {top} = useSafeAreaInsets();
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const {media, creatorName, content, createdAt} = data;

  useEffect(() => {
    navigation.setOptions({gestureEnabled: false});
    return () => navigation.setOptions({gestureEnabled: true});
  }, [navigation]);

  const handleToggle = () => setIsVisible(!isVisible);

  return (
    <Block absolute onLayout={() => {}}>
      <Pressable onPress={handleToggle}>
        <Image source={{uri: media}} width={width} height={height} />
      </Pressable>
      {isVisible && (
        <>
          <TouchableOpacity
            onPress={() => onPress({fullMode: false, index: null})}
            style={styles.closeButtonContainer(top + getSize.m(12)) as StyleProp<ViewStyle>}>
            <Image source={ICONS.close} square={16} tintColor={COLORS.white} />
          </TouchableOpacity>
          <Block
            absolute
            safeBottom
            bottom={0}
            padding={16}
            width={width}
            backgroundColor="#00000090"
            style={{maxHeight: getSize.v(height / 3.5)}}>
            <Block row alignCenter>
              <Text color={COLORS.placeholder} type="medium">
                {creatorName}
              </Text>
              <Text color={COLORS.placeholder} marginHorizontal={8}>
                -
              </Text>
              <Text color={COLORS.placeholder}>{dayjs(createdAt).format('DD/MM/YYYY')}</Text>
            </Block>
            <Text marginVertical={8} color={COLORS.placeholder} numberOfLines={5}>
              {content}
            </Text>
          </Block>
        </>
      )}
    </Block>
  );
};

export default DetailLayer;
