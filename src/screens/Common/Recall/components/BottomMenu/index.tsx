import {IMAGES} from '@assets';
import {Block, BottomSheet, Image, Text} from '@components';
import {showMessage} from '@components/common/ToastMessage';
import {useStore, useTranslation} from '@hooks';
import {navigate} from '@navigation/NavigationServices';
import routes from '@navigation/routes';
import Clipboard from '@react-native-clipboard/clipboard';
import {GET_MOMENT_DETAILS} from '@store/actions';
import React, {useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import DeleteDialog from '../DeleteDialog';

interface BottomMenuProps {
  isOpenBottom: boolean;
  setIsOpenBottom: any;
}

const BottomMenu: React.FC<BottomMenuProps> = ({isOpenBottom, setIsOpenBottom}) => {
  const {t} = useTranslation();
  const {dispatch, useSelector} = useStore();
  const {data: activeMoment} = useSelector('activeMoment');
  const {data: momentDetails} = useSelector('momentDetails');
  const [isDialogVisible, setDialogVisible] = useState<boolean>(false);
  const [isShareable, setIsShareable] = useState<boolean>(false);

  const _onDeleteMoment = () => {
    setDialogVisible(true);
  };

  useEffect(() => {
    if (activeMoment) {
      dispatch({type: GET_MOMENT_DETAILS, payload: {momentId: activeMoment.id}});
      setIsShareable(true);
    }
  }, [dispatch, activeMoment]);

  const _handleShareLink = () => {
    if (momentDetails) {
      const deepLinkUrl = momentDetails.deepLinkUrl;
      Clipboard.setString(deepLinkUrl);
      showMessage({type: 'success', message: `${t('recall.share.message')}`});
    }
  };

  return (
    <BottomSheet useBottomSheet={[isOpenBottom, setIsOpenBottom]}>
      <TouchableOpacity disabled={!isShareable} onPress={_handleShareLink}>
        <Block row alignCenter paddingHorizontal={12} paddingVertical={16} opacity={isShareable ? 1 : 0.4}>
          <Image source={IMAGES.recall_share} square={32} />
          <Text flex marginLeft={12} numberOfLines={1}>
            {t('recall.share.label')}
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
            {t('recall.edit')}
          </Text>
        </Block>
      </TouchableOpacity>
      <Block height={1} marginHorizontal={13} backgroundColor="border" />
      <TouchableOpacity onPress={_onDeleteMoment}>
        <Block row alignCenter paddingHorizontal={12} paddingVertical={16}>
          <Image source={IMAGES.recall_delete} square={32} />
          <Text flex marginLeft={12} numberOfLines={1}>
            {t('recall.delete')}
          </Text>
        </Block>
      </TouchableOpacity>
      <Block height={1} marginHorizontal={13} backgroundColor="border" />
      <TouchableOpacity disabled onPress={() => {}}>
        <Block row alignCenter paddingHorizontal={12} paddingVertical={16} opacity={0.4}>
          <Image source={IMAGES.recall_notice} square={32} />
          <Text flex marginLeft={12} numberOfLines={1}>
            {t('recall.notice')}
          </Text>
        </Block>
      </TouchableOpacity>
      <DeleteDialog useDialog={[isDialogVisible, setDialogVisible]} />
    </BottomSheet>
  );
};

export default BottomMenu;
