import {AlertDialog, NetWork} from '@components';
import {PortalProvider} from '@gorhom/portal';
import {useColors, useStore} from '@hooks';
import {NavigationContainer} from '@react-navigation/native';
import {GET_CURRENT_USER, SOCKET_CONNECT} from '@store/actions';
import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import {navigationRef} from './NavigationServices';
import RootStack from './RootStack';
import {linking} from './routes';
import useHome from '@screens/Bottom/Home/useHome';

const RootNavigation = () => {
  const {dispatch, useSelector} = useStore();
  const {COLORS} = useColors();
  const {isAuth} = useSelector('auth');
  const {mode} = useHome();

  const [retryCount, setRetryCount] = useState(0);
  const maxRetries = 3; // Set maximum number of retries
  const retryDelay = 300000; // Retry delay in milliseconds (5 minutes)

  useEffect(() => {
    if (isAuth) {
      handleAuth();
    }
  }, [dispatch, isAuth]);

  const handleAuth = async () => {
    try {
      dispatch({ type: GET_CURRENT_USER });
      dispatch({ type: SOCKET_CONNECT });
    } catch (error) {
      console.error("Error during authentication:", error);
      handleRetry();
    }
  };

  const handleRetry = () => {
    if (retryCount < maxRetries) {
      const timeout = setTimeout(() => {
        setRetryCount((prevCount) => prevCount + 1);
        handleAuth(); // Retry the authentication
      }, retryDelay);
      
      return () => clearTimeout(timeout); // Cleanup the timeout on component unmount
    } else {
      console.warn("Max retries reached. Please check your connection.");
    }
  };

  // Note: this is old code, before appling the retry logic
  // useEffect(() => {
  //   // fetchData();  // This line stayed here as a deadly caution! Uncomment this will cause autoload fetchData() every "miliseconds", leading to app misbehaviors. Don't!
  //   console.log("isAuth: ", isAuth);
  //   if (isAuth) {
  //     dispatch({type: GET_CURRENT_USER});
  //     dispatch({type: SOCKET_CONNECT});
  //     setRetryCount(0); // Reset retry count on successful authentication
  //   }
  // }, [dispatch, isAuth]);

  return (
    <NavigationContainer linking={linking} ref={navigationRef} onReady={() => RNBootSplash.hide()}>
      <PortalProvider>
        <StatusBar backgroundColor={COLORS.background} barStyle= {`${mode === 'dark' ? 'dark' : 'light'}-content`} />
        <RootStack />
      </PortalProvider>
      <AlertDialog />
      <NetWork />
    </NavigationContainer>
  );
};

export default gestureHandlerRootHOC(RootNavigation);
