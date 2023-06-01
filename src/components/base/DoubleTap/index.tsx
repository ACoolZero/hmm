import {sleep} from '@utils/date';
import React, {useEffect, useState} from 'react';
import {Pressable} from 'react-native';
import {DoubleTapProps} from './types';

const DoubleTap: React.FC<DoubleTapProps> = ({singleTap, doubleTap, delay = 300, children}) => {
  const [firstPress, setFirstPress] = useState<boolean>(true);
  const [lastTime, setLastTime] = useState<any>(new Date());
  const [timer, setTimer] = useState<any>(false);

  useEffect(() => {
    return () => timer && clearTimeout(timer);
  }, [timer]);

  const _onPress = () => {
    let now = new Date().getTime();
    if (firstPress) {
      setFirstPress(false);
      setTimer(
        sleep(delay).then(() => {
          singleTap ? singleTap() : null;
          setFirstPress(true);
          setTimer(false);
        }),
      );
      setLastTime(now);
    } else {
      if (now - lastTime < delay) {
        timer && clearTimeout(timer);
        doubleTap ? doubleTap() : null;
        setFirstPress(true);
      }
    }
  };

  return <Pressable onPress={_onPress}>{children}</Pressable>;
};

export default DoubleTap;
