import i18n from '@i18n';
import {showMessage} from 'react-native-flash-message';

interface ToastProps {
  message?: string;
  description: string;
}

export const SuccessToast = ({message, description}: ToastProps) => {
  showMessage({
    message: message || i18n.t('common.notification'),
    description,
    type: 'success',
  });
};

export const WarningToast = ({message, description}: ToastProps) => {
  showMessage({
    message: message || i18n.t('common.notification'),
    description,
    type: 'warning',
  });
};

export const ErrorToast = ({message, description}: ToastProps) => {
  showMessage({
    message: message || i18n.t('common.notification'),
    description,
    type: 'danger',
  });
};
