import {IMAGES} from '@assets';
import {Block, BottomSheet, Image, Text} from '@components';
import React from 'react';
import {TouchableOpacity} from 'react-native';

interface BottomMenuProps {
  isOpenBottom: boolean;
  setIsOpenBottom: any;
}

const BottomMenu: React.FC<BottomMenuProps> = ({isOpenBottom, setIsOpenBottom}) => {
  return (
    <BottomSheet useBottomSheet={[isOpenBottom, setIsOpenBottom]}>
      <TouchableOpacity disabled onPress={() => {}}>
        <Block row alignCenter paddingHorizontal={12} paddingVertical={16} opacity={0.4}>
          <Image source={IMAGES.recall_share} square={32} />
          <Text flex marginLeft={12} numberOfLines={1}>
            Share to other apps
          </Text>
        </Block>
      </TouchableOpacity>
      <Block height={1} marginHorizontal={13} backgroundColor="border" />
      <TouchableOpacity onPress={() => {}}>
        <Block row alignCenter paddingHorizontal={12} paddingVertical={16}>
          <Image source={IMAGES.recall_edit} square={32} />
          <Text flex marginLeft={12} numberOfLines={1}>
            Edit title and privacy
          </Text>
        </Block>
      </TouchableOpacity>
      <Block height={1} marginHorizontal={13} backgroundColor="border" />
      <TouchableOpacity onPress={() => {}}>
        <Block row alignCenter paddingHorizontal={12} paddingVertical={16}>
          <Image source={IMAGES.recall_delete} square={32} />
          <Text flex marginLeft={12} numberOfLines={1}>
            Delete this moment
          </Text>
        </Block>
      </TouchableOpacity>
      <Block height={1} marginHorizontal={13} backgroundColor="border" />
      <TouchableOpacity disabled onPress={() => {}}>
        <Block row alignCenter paddingHorizontal={12} paddingVertical={16} opacity={0.4}>
          <Image source={IMAGES.recall_notice} square={32} />
          <Text flex marginLeft={12} numberOfLines={1}>
            Notice us this meaningful moment
          </Text>
        </Block>
      </TouchableOpacity>
    </BottomSheet>
  );
};

export default BottomMenu;
