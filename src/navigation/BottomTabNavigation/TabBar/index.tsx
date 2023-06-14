/* eslint-disable react-native/no-inline-styles */
import {ICONS} from '@assets';
import {Block, Image} from '@components';
import routes from '@navigation/routes';
import React from 'react';
import {Pressable} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const TabBar: React.FC<any> = ({state, navigation}) => {
  const {bottom} = useSafeAreaInsets();
  const TAB_BAR_HEIGHT = bottom ? bottom : 20;

  return (
    <Block backgroundColor="#22343C">
      <Block row height={60 + TAB_BAR_HEIGHT} radius={32} paddingTop={24} backgroundColor="#30444E">
        {state.routes.map((route: any, index: number) => {
          const isFocused = state.index === index;
          const icons = {
            [routes.FEEDS_SCREEN]: 'bottom_feeds',
            [routes.HOME_SCREEN]: 'bottom_home',
            [routes.CHAT_SCREEN]: 'bottom_chat',
            [routes.GADGETS_SCREEN]: 'bottom_gadgets',
          };

          const _onSelectTab = () => {
            const event = navigation.emit({type: 'tabPress', target: route.key});
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate({name: route.name, merge: true});
            }
          };

          return (
            <Pressable key={index} onPress={_onSelectTab} style={{flex: 1, alignItems: 'center'}}>
              <Image
                square={24}
                source={ICONS[icons[route.name] as keyof typeof ICONS]}
                tintColor={isFocused ? '#78A9FD' : '#3C6F8D'}
                resizeMode="contain"
              />
            </Pressable>
          );
        })}
      </Block>
    </Block>
  );
};

export default TabBar;
