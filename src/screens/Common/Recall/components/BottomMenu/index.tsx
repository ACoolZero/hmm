import {IMAGES} from '@assets';
import {Block, BottomSheet, Image, Text} from '@components';
import {useStore} from '@hooks';
import {navigate} from '@navigation/NavigationServices';
import routes from '@navigation/routes';
import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import DeleteDialog from '../DeleteDialog';

interface BottomMenuProps {
  isOpenBottom: boolean;
  setIsOpenBottom: any;
}

const BottomMenu: React.FC<BottomMenuProps> = ({isOpenBottom, setIsOpenBottom}) => {
  const {useSelector} = useStore();
  const {data: activeMoment} = useSelector('activeMoment');
  const [isDialogVisible, setDialogVisible] = useState<boolean>(false);

  const _onDeleteMoment = () => {
    setDialogVisible(true);
  };

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
      <TouchableOpacity
        onPress={() => {
          setIsOpenBottom();
          navigate(routes.EDIT_MOMENT_SCREEN, {momentId: activeMoment.id});
        }}>
        <Block row alignCenter paddingHorizontal={12} paddingVertical={16}>
          <Image source={IMAGES.recall_edit} square={32} />
          <Text flex marginLeft={12} numberOfLines={1}>
            Edit title and privacy
          </Text>
        </Block>
      </TouchableOpacity>
      <Block height={1} marginHorizontal={13} backgroundColor="border" />
      <TouchableOpacity onPress={_onDeleteMoment}>
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
      <DeleteDialog useDialog={[isDialogVisible, setDialogVisible]} />
    </BottomSheet>
  );
};

export default BottomMenu;
