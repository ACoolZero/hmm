import {Block, ListWrapper, Modal, Text} from '@components';
import {useStore} from '@hooks';
import {IReaction} from '@screens/Bottom/Home/types';
import {STORE_CONFIG_MOOD} from '@store/actions';
import {height} from '@utils/responsive';
import React, {useState} from 'react';
import {ListRenderItem, TouchableOpacity} from 'react-native';
import {SvgUri} from 'react-native-svg';
import styles, {ICON_SIZE, REACTION_SIZE, SELECTED_ICON_SIZE, SELECTED_REACTION_SIZE} from './styles';

const Moods: React.FC = () => {
  const {dispatch, useSelector} = useStore();
  const {data: moodsList} = useSelector('moodsList');
  const {data: configMood} = useSelector('configMood');
  const [isShowModal, setIsShowModal] = useState(false);
  const [selectedMood, setSelectedMood] = useState<number>();

  const _renderSelectedItem = (item: IReaction, index: number) => {
    const {id, icon, name, color} = item;
    return (
      <TouchableOpacity
        key={id}
        onPress={() => {
          setIsShowModal(true);
          setSelectedMood(index);
        }}>
        <Block
          alignCenter
          justifyCenter
          radius={12}
          square={SELECTED_REACTION_SIZE}
          backgroundColor="feeling_background">
          <Block
            radius={SELECTED_REACTION_SIZE}
            style={{...styles.iconShadow, shadowColor: color}}
            backgroundColor="secondary_background">
            <SvgUri width={SELECTED_ICON_SIZE} height={SELECTED_ICON_SIZE} uri={icon} />
          </Block>
        </Block>
        <Text sm center marginVertical={8} numberOfLines={1} type="semibold" color="light_text">
          {name}
        </Text>
      </TouchableOpacity>
    );
  };

  const _renderItem: ListRenderItem<IReaction> = ({item}) => {
    const {id, icon, name, color} = item;
    return (
      <TouchableOpacity
        key={id}
        onPress={() => {
          let temp = [...configMood];
          temp[selectedMood as any] = item;
          setIsShowModal(false);
          dispatch({type: STORE_CONFIG_MOOD, payload: {data: temp}});
        }}>
        <Block
          alignCenter
          justifyCenter
          radius={12}
          square={REACTION_SIZE}
          marginLeft={12}
          backgroundColor="feeling_background">
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
        {configMood?.map(_renderSelectedItem)}
      </Block>
      <Modal isVisible={isShowModal} onBackdropPress={() => setIsShowModal(false)}>
        <Block overflow="hidden" height={height * 0.6} radius={12} backgroundColor="background">
          <Text margin={16}>Frequently detected</Text>
          <Block height={1} marginBottom={16} backgroundColor="border" />
          <ListWrapper
            numColumns={4}
            data={moodsList}
            keyExtractor={item => String(item.id)}
            renderItem={_renderItem}
          />
        </Block>
      </Modal>
    </Block>
  );
};

export default Moods;
