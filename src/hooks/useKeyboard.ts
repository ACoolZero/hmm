import {useEffect, useState} from 'react';
import {Keyboard, LayoutAnimation} from 'react-native';

const useKeyboard = () => {
  LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  const [keyboardHeight, setKeyboardHeight] = useState(0);

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', e => {
      setKeyboardHeight(e.endCoordinates.height);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardHeight(0);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return {keyboardHeight};
};

export default useKeyboard;
