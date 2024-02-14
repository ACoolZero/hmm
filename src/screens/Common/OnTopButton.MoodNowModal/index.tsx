/* eslint-disable react-native/no-inline-styles */
import {ICONS, IMAGES} from '@assets';
import {Block, Image, Modal, Text} from '@components';
import {handleHitSlop} from '@components/base/shared';
import {useStore, useTranslation} from '@hooks';
import {IReaction} from '@screens/Bottom/Home/types';
import useHome from '@screens/Bottom/Home/useHome';
import {CREATE_MOOD} from '@store/actions';
import {sleep} from '@utils/date';
import {height, width} from '@utils/responsive';
import React, {memo, useState} from 'react';
import {DeviceEventEmitter, LayoutAnimation, ScrollView, TouchableOpacity} from 'react-native';
import styles, {ICON_SIZE, REACTION_SIZE} from './styles';

const MoodNowModal: React.FC = () => {
  const {t} = useTranslation();
  const {useSelector} = useStore();
  const {customization, userCurrentMood, dispatch} = useHome();
  const [isFeelingVisible, setFeelingVisible] = useState<boolean>(false);
  const defaultMoods = customization?.find((x: any) => x.key === 'MOOD').config;
  const {data: moodsList} = useSelector('moodsList');
  const [expandation, setExpandation] = useState<boolean>(false);

  DeviceEventEmitter.addListener('showMoodNowModal', () => !!defaultMoods?.length && setFeelingVisible(true));

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
        <Block width={REACTION_SIZE}>
          <Text sm center marginVertical={8} numberOfLines={1} type="semibold">
            {name}
          </Text>
        </Block>
      </TouchableOpacity>
    );
  };

  const _toggleExpandation = () => {
    setExpandation(!expandation);
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  };

  const _closeModal = () => setFeelingVisible(false);

  return (
    <Modal
      isVisible={isFeelingVisible}
      onBackdropPress={() => {
        userCurrentMood && setFeelingVisible(false);
      }}>
      <Block alignCenter radius={24} paddingHorizontal={12} paddingBottom={24} backgroundColor="secondary_background">
        <Block absolute top={-100}>
          <Image source={IMAGES.splash_logo} square={180} />
        </Block>
        <Text center size={24} marginTop={80} marginBottom={32} type="semibold">
          {t('home.feeling.prompt')}
        </Text>
        {expandation ? (
          <Block height={height * 0.4} overflow="hidden">
            <ScrollView
              contentContainerStyle={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between'}}>
              {moodsList?.map(_renderItem)}
            </ScrollView>
          </Block>
        ) : (
          <Block row alignCenter gap={4}>
            {defaultMoods?.map(_renderItem)}
          </Block>
        )}
        <Block width={width - 64} row space="between" alignCenter absolute bottom={-24}>
          <TouchableOpacity hitSlop={handleHitSlop(10)}>
            <Text type="medium" textDecorationLine="underline" onPress={_toggleExpandation}>
              {expandation ? 'Less Moods' : 'More Moods'}
            </Text>
          </TouchableOpacity>
          {userCurrentMood && (
            <TouchableOpacity hitSlop={handleHitSlop(10)} onPress={_closeModal}>
              <Image source={ICONS.close} square={16} tintColor="white" />
            </TouchableOpacity>
          )}
        </Block>
      </Block>
    </Modal>
  );
};

export default memo(MoodNowModal);
