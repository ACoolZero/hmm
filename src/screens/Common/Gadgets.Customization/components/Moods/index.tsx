import {Block, Modal, Text} from '@components';
import {useStore} from '@hooks';
import {IReaction} from '@screens/Bottom/Home/types';
import {height} from '@utils/responsive';
import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {SvgUri} from 'react-native-svg';
import styles, {ICON_SIZE, REACTION_SIZE} from './styles';

const Moods: React.FC = () => {
  const {useSelector} = useStore();
  const {data: moodsList} = useSelector('moodsList');
  const [isShowModal, setIsShowModal] = useState(false);

  const _renderItem = (item: IReaction) => {
    const {id, icon, name, color} = item;
    return (
      <TouchableOpacity
        key={id}
        onPress={() => {
          setIsShowModal(true);
        }}>
        <Block alignCenter justifyCenter radius={12} square={REACTION_SIZE} backgroundColor="feeling_background">
          <Block
            radius={REACTION_SIZE}
            style={{...styles.iconShadow, shadowColor: color}}
            backgroundColor="secondary_background">
            <SvgUri width={ICON_SIZE} height={ICON_SIZE} uri={icon} />
          </Block>
        </Block>
        <Text sm center marginVertical={8} numberOfLines={1} type="semibold" color="light_text">
          {name}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <Block marginBottom={24}>
      <Text marginBottom={12} type="bold">
        Change the moods you frequently have
      </Text>
      <Block row alignCenter space="between">
        {moodsList?.slice(0, 4).map(_renderItem)}
      </Block>
      <Modal isVisible={isShowModal} onBackdropPress={() => setIsShowModal(false)}>
        <Block overflow="hidden" height={height * 0.6} radius={12} backgroundColor="background">
          <Text margin={16}>Frequently detected</Text>
          <Block height={1} marginBottom={16} backgroundColor="border" />
          <Block wrap row flex space="evenly">
            {moodsList?.map(_renderItem)}
          </Block>
        </Block>
      </Modal>
    </Block>
  );
};

export default Moods;
