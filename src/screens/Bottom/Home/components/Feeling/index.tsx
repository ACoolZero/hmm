import {ICONS, IMAGES} from '@assets';
import {Block, Image, Modal, Text} from '@components';
import {handleHitSlop} from '@components/base/shared';
import {useFocusEffect} from '@react-navigation/native';
import {IReaction} from '@screens/Bottom/Home/types';
import useHome from '@screens/Bottom/Home/useHome';
import {CREATE_MOOD} from '@store/actions';
import {sleep} from '@utils/date';
import React, {memo, useCallback, useEffect, useState} from 'react';
import {Pressable} from 'react-native';
import {SvgUri} from 'react-native-svg';
import styles, {ICON_SIZE, REACTION_SIZE} from './styles';

const Feeling: React.FC = () => {
  const {moodsList, userCurrentMood, dispatch} = useHome();
  const [isFeelingVisible, setFeelingVisible] = useState(false);

  useFocusEffect(
    useCallback(() => {
      // setFeelingVisible(true);
    }, []),
  );

  useEffect(() => {
    sleep(3000).then(() => setFeelingVisible(true));
  }, []);

  const _renderItem = (item: IReaction) => {
    const {id, icon, name, color} = item;
    return (
      <Pressable
        key={id}
        onPress={() => {
          dispatch({type: CREATE_MOOD, payload: {moodId: id}});
          sleep(500).then(() => setFeelingVisible(false));
        }}>
        <Block alignCenter justifyCenter radius={12} square={REACTION_SIZE} backgroundColor="modal_feeling_background">
          <Block
            radius={REACTION_SIZE}
            style={{...styles.iconShadow, shadowColor: color}}
            backgroundColor="secondary_background">
            <SvgUri width={ICON_SIZE} height={ICON_SIZE} uri={icon} />
          </Block>
        </Block>
        <Text sm center marginTop={8} numberOfLines={1} type="semibold">
          {name}
        </Text>
      </Pressable>
    );
  };

  return (
    <Modal isVisible={isFeelingVisible} onBackdropPress={() => userCurrentMood && setFeelingVisible(false)}>
      <Block alignCenter radius={24} paddingHorizontal={12} paddingBottom={24} backgroundColor="secondary_background">
        <Block absolute top={-100}>
          <Image source={IMAGES.splash_logo} square={180} />
        </Block>
        <Text center size={24} marginTop={80} marginBottom={32} type="semibold">
          Hi, you good ?
        </Text>
        <Block row alignCenter gap={4}>
          {moodsList?.map(_renderItem)}
        </Block>
        {userCurrentMood && (
          <Pressable hitSlop={handleHitSlop(10)} style={styles.btnClosePopup} onPress={() => setFeelingVisible(false)}>
            <Image source={ICONS.close} square={16} tintColor="white" />
          </Pressable>
        )}
      </Block>
    </Modal>
  );
};

export default memo(Feeling);
