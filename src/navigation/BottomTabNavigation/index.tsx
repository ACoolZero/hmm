import routes from '@navigation/routes';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {bottom} from '@screens';
import React from 'react';
import TabBar from './TabBar';

const Tab = createBottomTabNavigator();

const BottomTabNavigation: React.FC = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}} tabBar={props => <TabBar {...props} />}>
      <Tab.Screen name={routes.FAVOURITE_SCREEN} component={bottom[routes.FAVOURITE_SCREEN]} />
      <Tab.Screen name={routes.HOME_SCREEN} component={bottom[routes.HOME_SCREEN]} />
      <Tab.Screen name={routes.CHAT_SCREEN} component={bottom[routes.CHAT_SCREEN]} />
      <Tab.Screen name={routes.NOTIFICATION_SCREEN} component={bottom[routes.NOTIFICATION_SCREEN]} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
