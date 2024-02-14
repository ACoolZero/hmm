import {useBackHandler} from '@hooks';
import {height} from '@utils/responsive';
import React, {useEffect, useRef, useState} from 'react';
import {Animated, Easing, Modal as RNModal, TouchableWithoutFeedback} from 'react-native';
import styles from './styles';
import {ModalProps} from './types';

const MODAL_ANIM_DURATION = 300;
const MODAL_BACKDROP_OPACITY = 0.6;

const Modal: React.FC<ModalProps> = ({
  isVisible,
  animated = false,
  position = 'center',
  onBackdropPress,
  onRequestClose,
  children,
  ...rest
}) => {
  const [modalShow, setModalShow] = useState(false);
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    animatedValue.stopAnimation();
    if (isVisible) {
      setModalShow(true);
      Animated.timing(animatedValue, {
        easing: Easing.inOut(Easing.quad),
        useNativeDriver: true,
        duration: MODAL_ANIM_DURATION,
        toValue: 1,
      }).start();
    } else {
      Animated.timing(animatedValue, {
        easing: Easing.inOut(Easing.quad),
        useNativeDriver: true,
        duration: MODAL_ANIM_DURATION,
        toValue: 0,
      }).start(() => {
        setModalShow(false);
      });
    }
  }, [animatedValue, isVisible]);

  useBackHandler({
    enabled: isVisible,
    callback: () => {
      onRequestClose && onRequestClose();
    },
  });

  const backdropAnimatedStyle = {
    opacity: animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: animated ? [0, MODAL_BACKDROP_OPACITY] : [MODAL_BACKDROP_OPACITY, MODAL_BACKDROP_OPACITY],
    }),
  };

  const contentAnimatedStyle =
    position === 'center'
      ? {
          transform: [
            {
              scale: animatedValue.interpolate({
                inputRange: [0, 1],
                outputRange: animated ? [0, 1] : [1, 1],
              }),
            },
          ],
        }
      : {
          transform: [
            {
              translateY: animatedValue.interpolate({
                inputRange: [0, 1],
                outputRange: [height, 0],
                extrapolate: 'clamp',
              }),
            },
          ],
        };

  return (
    <RNModal {...rest} transparent animationType="fade" onRequestClose={onRequestClose} visible={modalShow}>
      <TouchableWithoutFeedback onPress={onBackdropPress}>
        <Animated.View style={[styles.backdrop, backdropAnimatedStyle]} />
      </TouchableWithoutFeedback>
      {modalShow && (
        <Animated.View style={[styles.content(position), contentAnimatedStyle]} pointerEvents="box-none">
          {children}
        </Animated.View>
      )}
    </RNModal>
  );
};

export default Modal;
