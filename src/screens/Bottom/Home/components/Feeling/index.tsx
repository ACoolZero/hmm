/* eslint-disable react-hooks/exhaustive-deps */
import {ICONS, IMAGES} from '@assets';
import {Block, Image, Modal, Text} from '@components';
import {handleHitSlop} from '@components/base/shared';
import {IReaction} from '@screens/Bottom/Home/types';
import useHome from '@screens/Bottom/Home/useHome';
import {CREATE_MOOD} from '@store/actions';
import {sleep} from '@utils/date';
import React, {memo, useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import styles, {ICON_SIZE, REACTION_SIZE} from './styles';

const Feeling: React.FC = () => {
  const {customization, userCurrentMood, dispatch} = useHome();
  const [isFeelingVisible, setFeelingVisible] = useState(false);
  const defaultMoods = customization?.find((x: any) => x.key === 'MOOD').config;

  useEffect(() => {
    sleep(10000).then(() => !!defaultMoods?.length && setFeelingVisible(true));
  }, []);

  const _renderItem = (item: IReaction) => {
    const {id, icon, name, color} = item;
    return (
      <TouchableOpacity
        key={id}
        onPress={() => {
          sleep(200).then(() => setFeelingVisible(false));
          dispatch({type: CREATE_MOOD, payload: {moodId: id}});
        }}>
        <Block alignCenter justifyCenter radius={12} square={REACTION_SIZE} backgroundColor="modal_feeling_background">
          <Block
            radius={REACTION_SIZE}
            style={{...styles.iconShadow, shadowColor: color}}
            backgroundColor="secondary_background">
            <Image source={{uri: icon}} square={ICON_SIZE} />
          </Block>
        </Block>
        <Text sm center marginTop={8} numberOfLines={1} type="semibold">
          {name}
        </Text>
      </TouchableOpacity>
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
          {defaultMoods?.map(_renderItem)}
        </Block>
        {userCurrentMood && (
          <TouchableOpacity
            hitSlop={handleHitSlop(10)}
            style={styles.btnClosePopup}
            onPress={() => setFeelingVisible(false)}>
            <Image source={ICONS.close} square={16} tintColor="white" />
          </TouchableOpacity>
        )}
      </Block>
    </Modal>
  );
};

export default memo(Feeling);
