import {Block, Text} from '@components';
import {useColors} from '@hooks';
import {getSize} from '@utils/responsive';
import React from 'react';
import {Pressable, ScrollView, StyleSheet} from 'react-native';
import {DATA} from './data';

const Category: React.FC = () => {
  const {COLORS} = useColors();

  const _renderCategory = (item: any) => {
    const {id, title, tintColor} = item;
    const isFirstItem = id === 1;

    if (isFirstItem) {
      return (
        <Pressable key={id}>
          <Block paddingHorizontal={12} backgroundColor={COLORS.primary} style={styles.category}>
            <Text sm color={COLORS.white} type="semibold">
              {title}
            </Text>
          </Block>
        </Pressable>
      );
    }
    return (
      <Pressable key={id}>
        <Block paddingHorizontal={12} backgroundColor={COLORS.background} style={styles.category}>
          <Text sm color={COLORS.light_text} type="semibold">
            {title}
          </Text>
        </Block>
      </Pressable>
    );
  };

  return (
    <Block marginVertical={12}>
      <ScrollView horizontal bounces={false} showsHorizontalScrollIndicator={false}>
        <Block row alignCenter marginLeft={16} gap={10}>
          {DATA.map(_renderCategory)}
        </Block>
      </ScrollView>
    </Block>
  );
};

export default Category;

const styles = StyleSheet.create({
  category: {
    alignItems: 'center',
    justifyContent: 'center',
    height: getSize.s(32),
    borderRadius: getSize.s(8),
  },
});
