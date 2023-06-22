import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {auth, common} from '@screens';
import React from 'react';
import BottomTabNavigation from './BottomTabNavigation';
import routes from './routes';
import {RootStackParamList} from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
  return (
    <Stack.Navigator initialRouteName={routes.LOGIN_SCREEN} screenOptions={{headerShown: false}}>
      {/** Authentication flow */}
      <Stack.Group>
        <Stack.Screen name={routes.LOGIN_SCREEN} component={auth[routes.LOGIN_SCREEN]} />
        <Stack.Screen name={routes.REGISTER_STEP1_SCREEN} component={auth[routes.REGISTER_STEP1_SCREEN]} />
        <Stack.Screen name={routes.REGISTER_STEP2_SCREEN} component={auth[routes.REGISTER_STEP2_SCREEN]} />
        <Stack.Screen name={routes.REGISTER_STEP3_SCREEN} component={auth[routes.REGISTER_STEP3_SCREEN]} />
        <Stack.Screen name={routes.REGISTER_STEP4_SCREEN} component={auth[routes.REGISTER_STEP4_SCREEN]} />
        <Stack.Screen name={routes.REGISTER_STEP5_SCREEN} component={auth[routes.REGISTER_STEP5_SCREEN]} />
        <Stack.Screen
          name={routes.FORGOT_PASSWORD_STEP1_SCREEN}
          component={auth[routes.FORGOT_PASSWORD_STEP1_SCREEN]}
        />
        <Stack.Screen
          name={routes.FORGOT_PASSWORD_STEP2_SCREEN}
          component={auth[routes.FORGOT_PASSWORD_STEP2_SCREEN]}
        />
        <Stack.Screen
          name={routes.FORGOT_PASSWORD_STEP3_SCREEN}
          component={auth[routes.FORGOT_PASSWORD_STEP3_SCREEN]}
        />
        <Stack.Screen
          name={routes.FORGOT_PASSWORD_STEP4_SCREEN}
          component={auth[routes.FORGOT_PASSWORD_STEP4_SCREEN]}
        />
      </Stack.Group>
      <Stack.Screen name={routes.BOTTOM_TAB} component={BottomTabNavigation} />
      {/** Screens are disabled swipe back action */}
      <Stack.Group screenOptions={{gestureEnabled: false}}>
        {/**
         *
         */}
      </Stack.Group>
      {/** Modal screens */}
      {/* <Stack.Group screenOptions={{presentation: 'modal'}}></Stack.Group> */}
      {/** Common screens */}
      <Stack.Group>
        <Stack.Screen name={routes.ARTICLE_DETAILS_SCREEN} component={common[routes.ARTICLE_DETAILS_SCREEN]} />
        <Stack.Screen name={routes.MILESTONE_DETAILS_SCREEN} component={common[routes.MILESTONE_DETAILS_SCREEN]} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default RootStack;
