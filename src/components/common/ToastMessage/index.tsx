import {IMAGES} from '@assets';
import {Block, Image, Text} from '@components';
import {getSize} from '@utils/responsive';
import React, {useEffect, useState} from 'react';
import {DeviceEventEmitter, StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const BACKGROUND_COLOR = {
  success: '#3DD598',
  info: '#558EF9',
  warning: '#FF974A',
  error: '#FF575F',
};
const ICON_TYPE = {
  success: IMAGES.success,
  info: IMAGES.info,
  warning: IMAGES.warning,
  error: IMAGES.error,
};

export type MessageType = 'success' | 'info' | 'warning' | 'error';
export type MessageOptions = {
  type?: MessageType;
  message: string;
  duration?: number;
};

interface ToastMessageProps {
  position: 'top' | 'bottom';
}

let timer: NodeJS.Timeout;

const ToastMessage: React.FC<ToastMessageProps> = ({position}) => {
  const {top, bottom} = useSafeAreaInsets();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [messageType, setMessageType] = useState<MessageType>('success');
  const [msg, setMsg] = useState<string>('');

  const positionStyle = {
    bottom: {bottom: bottom ? bottom : getSize.m(20)},
    top: {top},
  };

  DeviceEventEmitter.addListener('showToastMessage', payload => {
    timer && clearTimeout(timer);
    _showToastMessage(payload);
  });

  DeviceEventEmitter.addListener('hideToastMessage', () => {
    timer && clearTimeout(timer);
    setIsVisible(false);
  });

  const _showToastMessage = ({type = 'success', message, duration = 2000}: MessageOptions) => {
    setIsVisible(true);
    setMessageType(type);
    setMsg(message);
    timer = setTimeout(() => {
      setIsVisible(false);
    }, duration);
  };

  useEffect(() => {
    return () => {
      timer && clearTimeout(timer);
      DeviceEventEmitter.removeAllListeners();
    };
  }, []);

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

export const hideMessage = () => DeviceEventEmitter.emit('hideToastMessage');

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
