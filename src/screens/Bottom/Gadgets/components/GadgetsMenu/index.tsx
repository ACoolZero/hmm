import {ICONS} from '@assets';
import {Block, Image, Text} from '@components';
import {navigate} from '@navigation/NavigationServices';
import React from 'react';
import {Pressable} from 'react-native';
import MENU, {IGadgetsMenu} from './data';

const GadgetsMenu: React.FC = () => {
  const _renderItem = (item: IGadgetsMenu, index: number) => {
    const {icon, label, route} = item;
    const isLastItem = index === MENU.length - 1;
    return (
      <Pressable key={item.id} onPress={() => navigate(route)}>
        <Block row alignCenter padding={16} space="between">
          <Block flex row alignCenter>
            <Image source={icon} square={32} />
            <Text flex marginLeft={12}>
              {label}
            </Text>
          </Block>
          <Block>
            <Image source={ICONS.arrow_right} square={14} tintColor="light_text" />
          </Block>
        </Block>
        {!isLastItem && <Block height={1} marginHorizontal={16} backgroundColor="#87A8B9" />}
      </Pressable>
    );
  };

  return (
    <Block radius={12} marginHorizontal={16} backgroundColor="secondary_background">
      {MENU.map(_renderItem)}
    </Block>
  );
};

export default GadgetsMenu;
