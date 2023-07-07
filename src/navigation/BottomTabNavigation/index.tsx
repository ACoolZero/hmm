import routes from '@navigation/routes';
import {BottomTabBarProps, createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {bottom, common} from '@screens';
import React from 'react';
import TabBar from './TabBar';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const BottomTabNavigation: React.FC = () => {
  const _renderCustomTabBar = (props: BottomTabBarProps) => <TabBar {...props} />;

  return (
    <Tab.Navigator
      initialRouteName={routes.BOTTOM_HOME_STACK}
      screenOptions={{headerShown: false}}
      tabBar={_renderCustomTabBar}>
      <Tab.Screen name={routes.FEEDS_SCREEN} component={bottom[routes.FEEDS_SCREEN]} />
      <Tab.Screen name={routes.BOTTOM_HOME_STACK} component={HomeStack} />
      <Tab.Screen name={routes.CHAT_SCREEN} component={bottom[routes.CHAT_SCREEN]} />
      <Tab.Screen name={routes.GADGETS_SCREEN} component={bottom[routes.GADGETS_SCREEN]} />
    </Tab.Navigator>
  );
};

const HomeStack: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={routes.HOME_SCREEN} component={bottom[routes.HOME_SCREEN]} />
      <Stack.Screen name={routes.MILESTONE_DETAILS_SCREEN} component={common[routes.MILESTONE_DETAILS_SCREEN]} />
    </Stack.Navigator>
  );
};

export default BottomTabNavigation;
