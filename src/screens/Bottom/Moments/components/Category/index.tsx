import {Block, Text} from '@components';
import {useColors} from '@hooks';
import {getSize} from '@utils/responsive';
import React, {useState} from 'react';
import {Pressable, ScrollView, StyleSheet} from 'react-native';
import {DATA} from './data';

const Category: React.FC = () => {
  const {COLORS} = useColors();
  const [selectedId, setSelectedId] = useState<number>(1);

  const _renderCategory = (item: any) => {
    const {id, title, tintColor} = item;
    const selectedItem = id === selectedId;
    const backgroundColor = selectedItem ? (tintColor ? tintColor : COLORS.primary) : COLORS.background;
    const color = selectedItem ? COLORS.white : COLORS.light_text;
    return (
      <Pressable key={id} onPress={() => setSelectedId(id)}>
        <Block paddingHorizontal={12} backgroundColor={backgroundColor} style={styles.category}>
          <Text sm color={color} type="semibold">
            {title}
          </Text>
        </Block>
      </Pressable>
    );
  };

  return (
    <Block marginVertical={12} backgroundColor="secondary_background">
      <ScrollView horizontal bounces={false} showsHorizontalScrollIndicator={false}>
        <Block row alignCenter gap={10}>
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
