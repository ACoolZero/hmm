import routes from '@navigation/routes';
// import {BottomTabBarProps, createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {bottom, common} from '@screens';
import React from 'react';
import TabBar from './TabBar';
import {RootStackParamList} from '@navigation/types';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// const Tab = createBottomTabNavigator();
const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator<RootStackParamList>();

const BottomTabNavigation: React.FC = () => {
  // const _renderCustomTabBar = (props: BottomTabBarProps) => <TabBar {...props} />;

  return (
    <Tab.Navigator
      initialRouteName={routes.BOTTOM_HOME_STACK}
      // screenOptions={{headerShown: false}}
      // tabBar={_renderCustomTabBar}>
      tabBarPosition='bottom'
      tabBar={(props) => <TabBar {...props} />}      
      >
      <Tab.Screen name={routes.MOMENTS_SCREEN} component={bottom[routes.MOMENTS_SCREEN]} />
      <Tab.Screen name={routes.BOTTOM_HOME_STACK} component={HomeStack} />
      <Tab.Screen name={routes.CHAT_SCREEN} component={bottom[routes.CHAT_SCREEN]} />
      <Tab.Screen name={routes.BOTTOM_GADGETS_STACK} component={GadgetsStack} />
    </Tab.Navigator>
  );
};

const HomeStack: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false, animation: 'slide_from_right' }}>
      <Stack.Screen name={routes.HOME_SCREEN} component={bottom[routes.HOME_SCREEN]} />
      <Stack.Screen name={routes.MILESTONE_DETAILS_SCREEN} component={common[routes.MILESTONE_DETAILS_SCREEN]} />
      <Stack.Screen name={routes.ARTICLE_VIEWED_SCREEN} component={common[routes.ARTICLE_VIEWED_SCREEN]} />
      <Stack.Screen name={routes.MOMENT_DETAILS_SCREEN} component={common[routes.MOMENT_DETAILS_SCREEN] as any} />
    </Stack.Navigator>
  );
};

const GadgetsStack: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false, animation: 'slide_from_right'}}>
      <Stack.Screen name={routes.GADGETS_SCREEN} component={bottom[routes.GADGETS_SCREEN]} />
      <Stack.Screen name={routes.GADGETS_APPS_SCREEN} component={common[routes.GADGETS_APPS_SCREEN]} />
      <Stack.Screen name={routes.GADGETS_MOOD_HISTORY_SCREEN} component={common[routes.GADGETS_MOOD_HISTORY_SCREEN]} />
      <Stack.Screen name={routes.GADGETS_FEEDBACK_SCREEN} component={common[routes.GADGETS_FEEDBACK_SCREEN]} />
      <Stack.Screen name={routes.GADGETS_FAQ_SCREEN} component={common[routes.GADGETS_FAQ_SCREEN]} />
      <Stack.Screen name={routes.GADGETS_PRIVACY_SCREEN} component={common[routes.GADGETS_PRIVACY_SCREEN]} />
      <Stack.Screen name={routes.GADGETS_DATA_PROTECTION_SCREEN} component={common[routes.GADGETS_DATA_PROTECTION_SCREEN]} />
    </Stack.Navigator>
  );
};

export default BottomTabNavigation;
