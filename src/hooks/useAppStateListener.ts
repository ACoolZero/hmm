import {useCallback, useEffect, useRef} from 'react';
import {AppState, AppStateStatus} from 'react-native';

const useAppStateListener = ({callback}: {callback?: () => void}) => {
  const appState = useRef(AppState.currentState);

  const _handleAppStateChange = useCallback(
    (nextAppState: AppStateStatus) => {
      if (appState.current.match(/inactive|background/) && nextAppState === 'active') {
        callback && callback();
      }
      appState.current = nextAppState;
    },
    [callback],
  );

  useEffect(() => {
    const subscription = AppState.addEventListener('change', _handleAppStateChange);

    return () => subscription.remove();
  }, [_handleAppStateChange]);

  return {};
};

export default useAppStateListener;
