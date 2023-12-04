import {useStore} from '@hooks';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {auth, common} from '@screens';
import React from 'react';
import BottomTabNavigation from './BottomTabNavigation';
import routes from './routes';
import {RootStackParamList} from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
  const {useSelector} = useStore();
  const {isAuth} = useSelector('auth');

  const initialRouteName = isAuth ? routes.BOTTOM_TAB : routes.LOGIN_SCREEN;

  return (
    <Stack.Navigator initialRouteName={initialRouteName} screenOptions={{headerShown: false}}>
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
        <Stack.Screen name={routes.EDIT_PROFILE_SCREEN} component={common[routes.EDIT_PROFILE_SCREEN]} />
        <Stack.Screen
          name={routes.GADGETS_CUSTOMIZATION_SCREEN}
          component={common[routes.GADGETS_CUSTOMIZATION_SCREEN]}
        />
        <Stack.Screen name={routes.CREATE_MILESTONE_SCREEN} component={common[routes.CREATE_MILESTONE_SCREEN]} />
        <Stack.Screen name={routes.EDIT_MILESTONE_SCREEN} component={common[routes.EDIT_MILESTONE_SCREEN]} />
        <Stack.Screen name={routes.SUGGEST_SCREEN} component={common[routes.SUGGEST_SCREEN]} />
        <Stack.Screen name={routes.FEEDBACK_SUBMIT_SCREEN} component={common[routes.FEEDBACK_SUBMIT_SCREEN]} />
        <Stack.Screen name={routes.CREATE_MOMENT_SCREEN} component={common[routes.CREATE_MOMENT_SCREEN]} />
        <Stack.Screen name={routes.EDIT_MOMENT_SCREEN} component={common[routes.EDIT_MOMENT_SCREEN]} />
        <Stack.Screen name={routes.RECALL_SCREEN} component={common[routes.RECALL_SCREEN]} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default RootStack;
