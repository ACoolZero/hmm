import {IMAGES} from '@assets';
import {Block, GradientButton, Image, Modal, Text} from '@components';
import {useColors, useStore, useTranslation} from '@hooks';
import {DELETE_MOMENT} from '@store/actions';
import {getSize, width} from '@utils/responsive';
import React from 'react';

const BUTTON_WIDTH = (width - 16 - 32 - 32) / 2;

interface DeleteDialogProps {
  useDialog: any;
}

const DeleteDialog: React.FC<DeleteDialogProps> = ({useDialog}) => {
  const {dispatch, useSelector} = useStore();
  const {isLoading} = useSelector('auth');
  const {data: activeMoment} = useSelector('activeMoment');
  const {COLORS} = useColors();
  const {t} = useTranslation();
  const [isDialogVisible, setDialogVisible] = useDialog;

  const _handleDelete = () => {
    setDialogVisible(false);
    dispatch({type: DELETE_MOMENT, payload: {momentId: activeMoment.id}});
  };

  return (
    <Modal isVisible={isDialogVisible} onBackdropPress={() => setDialogVisible(false)}>
      <Block alignCenter radius={24} paddingHorizontal={12} paddingBottom={24} backgroundColor="secondary_background">
        <Text center size={24} margin={36} type="semibold">
          {t('recall.delete_moment.question')}
        </Text>
        <Block row>
          <Block alignCenter>
            <Image source={IMAGES.delete_moment_icon_left} round={57} />
            <GradientButton
              title={t('recall.delete_moment.no')}
              backgroundColor={['#F5F5F5', '#F5F5F5']}
              textColor="primary"
              style={{
                width: BUTTON_WIDTH,
                borderWidth: getSize.s(1),
                borderColor: COLORS.primary,
                borderRadius: getSize.s(9),
                marginTop: getSize.m(16),
              }}
              onPress={() => setDialogVisible(false)}
            />
          </Block>
          <Block width={6} />
          <Block alignCenter>
            <Image source={IMAGES.logout_icon_right} round={57} />
            <GradientButton
              disabled={isLoading}
              title={t('recall.delete_moment.yes')}
              style={{
                width: BUTTON_WIDTH,
                borderWidth: getSize.s(0),
                borderColor: COLORS.secondary_background,
                borderRadius: getSize.s(9),
                marginTop: getSize.m(16),
              }}
              onPress={_handleDelete}
            />
          </Block>
        </Block>
      </Block>
    </Modal>
  );
};

export default DeleteDialog;
