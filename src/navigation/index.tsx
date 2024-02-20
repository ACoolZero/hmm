import {AlertDialog, NetWork} from '@components';
import {PortalProvider} from '@gorhom/portal';
import {useColors, useStore} from '@hooks';
import {NavigationContainer} from '@react-navigation/native';
import {GET_CURRENT_USER} from '@store/actions';
import React, {useEffect, useState} from 'react';
import {Linking, StatusBar} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import {navigate, navigationRef} from './NavigationServices';
import RootStack from './RootStack';
import linking from './deepLinkConfig';
import routes from './routes';
import {sleep} from '@utils/date';
import {isIos} from '@utils/helper';

const RootNavigation = () => {
  const {dispatch, useSelector} = useStore();
  const {COLORS} = useColors();
  const {isAuth} = useSelector('auth');
  const [deepLinkUrl, setDeepLinkUrl] = useState<string | null>(null);

  useEffect(() => {
    if (isAuth) dispatch({type: GET_CURRENT_USER});
  }, [dispatch, isAuth]);

  useEffect(() => {
    const handleInitialUrl = async () => {
      const url = await Linking.getInitialURL();
      if (url) setDeepLinkUrl(url);
    };

    if (isAuth && deepLinkUrl) {
      const deepLinkUrlComponents = deepLinkUrl.split('://');
      const momentId = deepLinkUrlComponents[1];
      momentId && sleep(isIos ? 1 : 500).then(() => navigate(routes.MOMENT_DETAILS_SCREEN, {momentId}));
    }

    handleInitialUrl();
  }, [deepLinkUrl, isAuth]);

  return (
    <NavigationContainer linking={linking} ref={navigationRef} onReady={() => RNBootSplash.hide()}>
      <PortalProvider>
        <StatusBar backgroundColor={COLORS.background} barStyle="dark-content" />
        <RootStack />
      </PortalProvider>
      <AlertDialog />
      <NetWork />
    </NavigationContainer>
  );
};

export default gestureHandlerRootHOC(RootNavigation);
