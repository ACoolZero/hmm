import {useEffect} from 'react';
import {BackHandler} from 'react-native';

interface BackHandlerProps {
  enabled?: boolean;
  callback?: () => void;
}

const useBackHandler = ({enabled, callback}: BackHandlerProps) => {
  useEffect(() => {
    const backHandler = () => {
      callback && callback();
      return true;
    };

    if (enabled) {
      BackHandler.addEventListener('hardwareBackPress', backHandler);
    } else {
      BackHandler.removeEventListener('hardwareBackPress', backHandler);
    }

    return () => BackHandler.removeEventListener('hardwareBackPress', backHandler);
  }, [enabled, callback]);
};

export default useBackHandler;
