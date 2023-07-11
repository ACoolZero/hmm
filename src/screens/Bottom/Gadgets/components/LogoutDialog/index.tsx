import {IMAGES} from '@assets';
import {Block, GradientButton, Image, Modal, Text} from '@components';
import {useColors} from '@hooks';
import {getSize, width} from '@utils/responsive';
import React from 'react';

const BUTTON_WIDTH = (width - 16 - 32 - 32) / 2;

interface LogoutDialogProps {
  useLogoutDialog: any;
}

const LogoutDialog: React.FC<LogoutDialogProps> = ({useLogoutDialog}) => {
  const [isDialogVisible, setDialogVisible] = useLogoutDialog;
  const {COLORS} = useColors();

  return (
    <Modal isVisible={isDialogVisible} onBackdropPress={() => setDialogVisible(false)}>
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
              onPress={() => setDialogVisible(false)}
            />
          </Block>
          <Block width={6} />
          <Block alignCenter>
            <Image source={IMAGES.logout_icon_right} round={57} />
            <GradientButton
              title="Yes, I'll be back"
              style={{
                width: BUTTON_WIDTH,
                borderWidth: getSize.s(0),
                borderColor: COLORS.secondary_background,
                borderRadius: getSize.s(9),
                marginTop: getSize.m(16),
              }}
              onPress={() => setDialogVisible(false)}
            />
          </Block>
        </Block>
      </Block>
    </Modal>
  );
};

export default LogoutDialog;
