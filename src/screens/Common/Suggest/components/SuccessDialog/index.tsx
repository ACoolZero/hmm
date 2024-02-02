import {IMAGES} from '@assets';
import {Block, GradientButton, Image, Modal, Text} from '@components';
import {useTranslation} from '@hooks';
import {width} from '@utils/responsive';
import React from 'react';

interface SuccessDialogProps {
  useDialog: any;
}

const SuccessDialog: React.FC<SuccessDialogProps> = ({useDialog}) => {
  const [isDialogVisible, setDialogVisible] = useDialog;
  const {t} = useTranslation();

  return (
    <Modal isVisible={isDialogVisible} onBackdropPress={() => setDialogVisible(false)}>
      <Block alignCenter radius={24} paddingHorizontal={12} paddingBottom={24} backgroundColor="secondary_background">
        <Block absolute top={-100}>
          <Image source={IMAGES.suggest_dialog_icon} square={180} resizeMode="contain" />
        </Block>
        <Text center size={24} marginTop={80} marginBottom={32} type="semibold">
          {t('suggest.thank')}
        </Text>
        <GradientButton
          title={t('suggest.okay')}
          style={{
            width: width - 80,
          }}
          onPress={() => setDialogVisible(false)}
        />
      </Block>
    </Modal>
  );
};

export default SuccessDialog;
