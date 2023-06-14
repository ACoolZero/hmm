import routes from '@navigation/routes';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {bottom} from '@screens';
import React from 'react';
import TabBar from './TabBar';

const Tab = createBottomTabNavigator();

const BottomTabNavigation: React.FC = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}} tabBar={props => <TabBar {...props} />}>
      <Tab.Screen name={routes.FEEDS_SCREEN} component={bottom[routes.FEEDS_SCREEN]} />
      <Tab.Screen name={routes.HOME_SCREEN} component={bottom[routes.HOME_SCREEN]} />
      <Tab.Screen name={routes.CHAT_SCREEN} component={bottom[routes.CHAT_SCREEN]} />
      <Tab.Screen name={routes.GADGETS_SCREEN} component={bottom[routes.GADGETS_SCREEN]} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
