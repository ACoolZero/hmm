import {ICONS, IMAGES} from '@assets';
import {Block, Image, Modal, Text} from '@components';
import {handleHitSlop} from '@components/base/shared';
import {useFocusEffect} from '@react-navigation/native';
import {IReaction} from '@screens/Bottom/Home/types';
import React, {memo, useCallback, useState} from 'react';
import {Pressable} from 'react-native';
import {DATA} from './data';
import styles, {ICON_SIZE, REACTION_SIZE} from './styles';

const Feeling: React.FC = () => {
  const [isFeelingVisible, setFeelingVisible] = useState(true);

  useFocusEffect(
    useCallback(() => {
      // setFeelingVisible(true);
    }, []),
  );

  const _renderItem = (item: IReaction) => {
    const {id, image, label, color} = item;
    return (
      <Pressable key={id}>
        <Block alignCenter justifyCenter radius={12} square={REACTION_SIZE} backgroundColor="feeling_background">
          <Block
            radius={REACTION_SIZE}
            style={{...styles.iconShadow, shadowColor: color}}
            backgroundColor="secondary_background">
            <Image source={image} round={ICON_SIZE} />
          </Block>
        </Block>
        <Text sm center marginTop={8} numberOfLines={1} type="semibold">
          {label}
        </Text>
      </Pressable>
    );
  };

  return (
    <Modal isVisible={isFeelingVisible}>
      <Block alignCenter radius={24} paddingHorizontal={12} paddingBottom={24} backgroundColor="secondary_background">
        <Block absolute top={-100}>
          <Image source={IMAGES.splash_logo} square={180} />
        </Block>
        <Text center size={24} marginTop={80} marginBottom={32} type="semibold">
          Hi, you good ?
        </Text>
        <Block row alignCenter gap={4}>
          {DATA.map(_renderItem)}
        </Block>
        <Pressable hitSlop={handleHitSlop(10)} style={styles.btnClosePopup} onPress={() => setFeelingVisible(false)}>
          <Image source={ICONS.close} square={16} tintColor="white" />
        </Pressable>
      </Block>
    </Modal>
  );
};

export default memo(Feeling);
