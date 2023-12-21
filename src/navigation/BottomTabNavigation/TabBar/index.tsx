import {ICONS} from '@assets';
import {Block, Image} from '@components';
import routes from '@navigation/routes';
import {getSize} from '@utils/responsive';
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
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
    <Block paddingBottom={TAB_BAR_HEIGHT} backgroundColor="secondary_background">
      <Block
        height={60 + TAB_BAR_HEIGHT}
        style={[styles.container, styles.shadow]}
        backgroundColor="secondary_background">
        {state.routes.map((route: any, index: number) => {
          const isFocused = state.index === index;
          const icons = {
            [routes.MOMENTS_SCREEN]: 'bottom_moments',
            [routes.BOTTOM_HOME_STACK]: 'bottom_home',
            [routes.CHAT_SCREEN]: 'bottom_chat',
            [routes.BOTTOM_GADGETS_STACK]: 'bottom_gadgets',
          };

          const _onSelectTab = () => {
            const event = navigation.emit({type: 'tabPress', target: route.key});
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate({name: route.name, merge: true});
            }
          };

          if (isFocused) {
            return (
              <TouchableOpacity key={index} onPress={_onSelectTab} style={styles.btnTabBar}>
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
              </TouchableOpacity>
            );
          }
          return (
            <TouchableOpacity key={index} onPress={_onSelectTab} style={styles.btnTabBar}>
              <Image
                square={22}
                source={(ICONS as any)[icons[route.name as keyof typeof icons]]}
                resizeMode="contain"
              />
            </TouchableOpacity>
          );
        })}
      </Block>
    </Block>
  );
};

export default TabBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderTopLeftRadius: getSize.s(32),
    borderTopRightRadius: getSize.s(32),
    paddingTop: getSize.m(24),
    borderTopWidth: getSize.s(1),
    borderLeftWidth: getSize.s(0.3),
    borderRightWidth: getSize.s(0.3),
    borderColor: '#87A8B9',
    position: 'absolute',
    left: -1,
    right: -1,
    bottom: 0,
  },
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
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowColor: '#000000',
    elevation: 5,
  },
});
