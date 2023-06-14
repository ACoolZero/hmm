import {AlertDialog, NetWork} from '@components';
import {PortalProvider} from '@gorhom/portal';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StatusBar} from 'react-native';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import {navigationRef} from './NavigationServices';
import RootStack from './RootStack';

const RootNavigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <PortalProvider>
        <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
        <RootStack />
      </PortalProvider>
      <AlertDialog />
      <NetWork />
    </NavigationContainer>
  );
};

export default gestureHandlerRootHOC(RootNavigation);
