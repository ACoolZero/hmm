import {IMAGES} from '@assets';
import {Block, Image, Text} from '@components';
import {getSize} from '@utils/responsive';
import React, {useState} from 'react';
import {DeviceEventEmitter, StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const BACKGROUND_COLOR = {
  error: '#FF575F',
  warning: '#FF974A',
  success: '#3DD598',
  info: '#518EF8',
  default: '#3DD598',
};
const ICON_TYPE = {
  error: IMAGES.error,
  warning: IMAGES.warning,
  success: IMAGES.success,
  info: IMAGES.info,
  default: IMAGES.success,
};

export type MessageType = 'error' | 'warning' | 'success' | 'info' | 'default';
export interface MessageOptions {
  type?: MessageType;
  message: string;
  duration?: number;
}

interface ToastMessageProps {
  position: 'top' | 'bottom';
}

const ToastMessage: React.FC<ToastMessageProps> = ({position}) => {
  const {top, bottom} = useSafeAreaInsets();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [messageType, setMessageType] = useState<MessageType>('default');
  const [msg, setMsg] = useState<string>('');
  const [timer, setTimer] = useState<NodeJS.Timeout | null>();

  const positionStyle = {
    bottom: {bottom: bottom ? bottom : getSize.m(20)},
    top: {top},
  };

  DeviceEventEmitter.addListener('showToastMessage', payload => {
    timer && clearTimeout(timer);
    showToastMessage(payload);
  });

  const showToastMessage = ({type = 'default', message, duration = 3000}: MessageOptions) => {
    setIsVisible(true);
    setMessageType(type);
    setMsg(message);
    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, duration);
    setTimer(timeout);
  };

  if (!isVisible) return null;
  return (
    <Block backgroundColor={BACKGROUND_COLOR[messageType]} style={{...styles.container, ...positionStyle[position]}}>
      <Image source={ICON_TYPE[messageType]} square={24} resizeMode="contain" />
      <Text flex sm marginLeft={12} numberOfLines={1} color="white">
        {msg}
      </Text>
    </Block>
  );
};

export default ToastMessage;

export const showMessage = (arg: MessageOptions) => DeviceEventEmitter.emit('showToastMessage', {...arg});

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: getSize.s(48),
    borderRadius: getSize.s(12),
    marginHorizontal: getSize.m(16),
    paddingHorizontal: getSize.m(16),
    position: 'absolute',
    right: 0,
    left: 0,
  },
});
