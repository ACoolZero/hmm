import {IMAGES} from '@assets';
import {Block, GradientButton, Image, Modal, Text} from '@components';
import {useColors, useStore} from '@hooks';
import {LOGOUT_ACCOUNT} from '@store/actions';
import {getSize, width} from '@utils/responsive';
import React from 'react';

const BUTTON_WIDTH = (width - 16 - 32 - 32) / 2;

interface LogoutDialogProps {
  useDialog: any;
}

const LogoutDialog: React.FC<LogoutDialogProps> = ({useDialog}) => {
  const {dispatch, useSelector} = useStore();
  const {isLoading} = useSelector('auth');
  const {COLORS} = useColors();
  const [isDialogVisible, setDialogVisible] = useDialog;

  const _handleLogout = () => {
    setDialogVisible(false);
    dispatch({type: LOGOUT_ACCOUNT});
  };

  const _closeModal = () => setDialogVisible(false);

  return (
    <Modal isVisible={isDialogVisible} onBackdropPress={_closeModal}>
      <Block alignCenter radius={24} paddingHorizontal={12} paddingBottom={24} backgroundColor="secondary_background">
        <Block absolute top={-100}>
          <Image source={IMAGES.splash_logo} square={180} />
        </Block>
        <Text center size={24} marginTop={80} marginBottom={32} type="semibold">
          Don’t you say goodbye..
        </Text>
        <Block row>
          <Block alignCenter>
            <Image source={IMAGES.logout_icon_left} round={57} />
            <GradientButton
              title="Oh, my bad.."
              backgroundColor={['#FAFAFA', '#FAFAFA']}
              textColor="primary"
              style={{
                width: BUTTON_WIDTH,
                borderWidth: getSize.s(1),
                borderColor: COLORS.primary,
                borderRadius: getSize.s(9),
                marginTop: getSize.m(16),
              }}
              onPress={_closeModal}
            />
          </Block>
          <Block width={6} />
          <Block alignCenter>
            <Image source={IMAGES.logout_icon_right} round={57} />
            <GradientButton
              disabled={isLoading}
              title="Yes, I'll be back"
              style={{
                width: BUTTON_WIDTH,
                borderWidth: getSize.s(0),
                borderColor: COLORS.secondary_background,
                borderRadius: getSize.s(9),
                marginTop: getSize.m(16),
              }}
              onPress={_handleLogout}
            />
          </Block>
        </Block>
      </Block>
    </Modal>
  );
};

export default LogoutDialog;
