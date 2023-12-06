import {Block, Button, Modal, Text} from '@components';
import {useStore, useTranslation} from '@hooks';
import {HIDE_ALERT} from '@store/actions';
import {width} from '@utils/responsive';
import React from 'react';
import styles from './styles';

const AlertDialog: React.FC = () => {
  const {t} = useTranslation();
  const {dispatch, useSelector} = useStore();
  const {isShowAlert, title, message, cancelText, submitText, cancelable, canBackdropPress, onCancel, onSubmit} =
    useSelector('alert');

  const _onBackdropPress = () => canBackdropPress && dispatch({type: HIDE_ALERT});

  const _handleCancel = () => {
    onCancel && onCancel();
    dispatch({type: HIDE_ALERT});
  };

  const _handleSubmit = () => {
    onSubmit();
    dispatch({type: HIDE_ALERT});
  };

  return (
    <Modal isVisible={isShowAlert} onBackdropPress={_onBackdropPress}>
      <Block radius={8} paddingHorizontal={16} paddingVertical={20} backgroundColor="secondary_background">
        <Text md center type="semibold">
          {title || t('common.notification')}
        </Text>
        <Text center marginVertical={24}>
          {message || null}
        </Text>
        <Block row space="between">
          {cancelable && (
            <Button
              width={(width - 96) / 2}
              title={cancelText || t('common.cancel')}
              textColor="primary"
              backgroundColor="gray_100"
              containerStyle={styles.commonStyles}
              onPress={_handleCancel}
            />
          )}
          <Button
            title={submitText || t('common.submit')}
            width={cancelable ? (width - 96) * 0.5 : width - 80}
            containerStyle={styles.commonStyles}
            onPress={() => (onSubmit ? _handleSubmit() : _handleCancel())}
            textColor="white"
          />
        </Block>
      </Block>
    </Modal>
  );
};

export default AlertDialog;
