import {ModalProps as RNModalProps} from 'react-native';

export interface ModalProps extends RNModalProps {
  isVisible?: boolean;
  animated?: boolean;
  position?: 'center' | 'bottom';
  onBackdropPress?: () => void;
  onRequestClose?: () => void;
  children?: any;
}
