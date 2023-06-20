import {ICONS} from '@assets';
import {Block, Image} from '@components';
import routes from '@navigation/routes';
import {getSize} from '@utils/responsive';
import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface TabBarProps {
  state: any;
  navigation: any;
}

const TabBar: React.FC<TabBarProps> = ({state, navigation}) => {
  const {bottom} = useSafeAreaInsets();
  const TAB_BAR_HEIGHT = bottom ? bottom : 20;

  return (
    <Block backgroundColor="background">
      <Block
        row
        radius={32}
        paddingTop={24}
        height={60 + TAB_BAR_HEIGHT}
        backgroundColor="light_background"
        style={{...styles.shadow}}>
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

          if (isFocused) {
            return (
              <Pressable key={index} onPress={_onSelectTab} style={styles.btnTabBar}>
                <Image
                  square={22}
                  source={(ICONS as any)[icons[route.name as keyof typeof icons] + '_selected']}
                  resizeMode="contain"
                />
                <LinearGradient
                  colors={['#78A9FD', '#23B7EB']}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  style={styles.indicator}
                />
              </Pressable>
            );
          }
          return (
            <Pressable key={index} onPress={_onSelectTab} style={styles.btnTabBar}>
              <Image
                square={22}
                source={(ICONS as any)[icons[route.name as keyof typeof icons]]}
                tintColor="bottom_tabbar_color"
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

const styles = StyleSheet.create({
  btnTabBar: {
    flex: 1,
    alignItems: 'center',
  },
  indicator: {
    height: getSize.s(2),
    width: getSize.s(12),
    borderRadius: getSize.s(12),
    marginTop: getSize.m(5),
  },
  shadow: {
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.8,
    shadowRadius: 8,
    shadowColor: 'rgba(4, 35, 49, 0.5)',
  },
});
