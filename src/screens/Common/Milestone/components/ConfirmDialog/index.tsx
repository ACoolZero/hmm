import {IMAGES} from '@assets';
import {Block, GradientButton, Image, Modal, Text} from '@components';
import {useColors, useStore} from '@hooks';
import {CREATE_MILESTONE} from '@store/actions';
import {getSize, width} from '@utils/responsive';
import React from 'react';

const BUTTON_WIDTH = (width - 16 - 32 - 32) / 2;
interface ConfirmDialogProps {
  useDialog: any;
  mileStone?: any;
}

const ConfirmDialog: React.FC<ConfirmDialogProps> = ({useDialog, mileStone}) => {
  const {dispatch} = useStore();
  const [isDialogVisible, setDialogVisible] = useDialog;
  const {COLORS} = useColors();

  return (
    <Modal isVisible={isDialogVisible} onBackdropPress={() => setDialogVisible(false)}>
      <Block alignCenter radius={24} paddingHorizontal={12} paddingBottom={24} backgroundColor="secondary_background">
        <Block absolute top={-79}>
          <Image source={IMAGES.confirm_dialog_icon} square={180} resizeMode="contain" />
        </Block>
        <Text center size={24} marginTop={80} marginBottom={32} type="semibold">
          Add moment also ?
        </Text>
        <Block row>
          <Block alignCenter>
            <Image source={IMAGES.confirm_icon_left} round={57} />
            <GradientButton
              title="Uh, no"
              backgroundColor={['#F5F5F5', '#F5F5F5']}
              textColor="primary"
              style={{
                width: BUTTON_WIDTH,
                borderWidth: getSize.s(1),
                borderColor: COLORS.primary,
                borderRadius: getSize.s(9),
                marginTop: getSize.m(16),
              }}
              onPress={() => {
                setDialogVisible(false);
                dispatch({type: CREATE_MILESTONE, payload: {mileStone, hasMoment: false}});
              }}
            />
          </Block>
          <Block width={6} />
          <Block alignCenter>
            <Image source={IMAGES.confirm_icon_right} round={57} />
            <GradientButton
              title="Yes !"
              style={{
                width: BUTTON_WIDTH,
                borderWidth: getSize.s(0),
                borderColor: COLORS.secondary_background,
                borderRadius: getSize.s(9),
                marginTop: getSize.m(16),
              }}
              onPress={() => {
                setDialogVisible(false);
                dispatch({type: CREATE_MILESTONE, payload: {mileStone, hasMoment: true}});
              }}
            />
          </Block>
        </Block>
      </Block>
    </Modal>
  );
};

export default ConfirmDialog;
