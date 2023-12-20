import {Block, Text} from '@components';
import {useColors, useStore} from '@hooks';
import {IMomentTag} from '@screens/Bottom/Moments/types';
import useMoments from '@screens/Bottom/Moments/useMoments';
import {GET_MOMENTS_LIST} from '@store/actions';
import {getSize, width} from '@utils/responsive';
import React, {useEffect} from 'react';
import {ScrollView, StyleSheet, TouchableOpacity} from 'react-native';

let selectedId = '';

const Category: React.FC = () => {
  const {dispatch} = useStore();
  const {COLORS} = useColors();
  const {momentTags} = useMoments();

  useEffect(() => {
    if (!momentTags) selectedId = '';
  }, [momentTags]);

  const _renderCategory = (item: IMomentTag, index: number) => {
    const {id, taggingId, tagging, tintColor} = item;
    let selectedItem;
    if (selectedId) {
      selectedItem = taggingId === selectedId;
    } else {
      selectedItem = index === 0;
    }

    const backgroundColor = selectedItem ? (tintColor ? tintColor : COLORS.primary) : COLORS.background;
    const color = selectedItem ? COLORS.white : COLORS.light_text;

    const _filterMoments = () => {
      selectedId = taggingId;
      dispatch({type: GET_MOMENTS_LIST, payload: {taggingId}});
    };

    return (
      <TouchableOpacity key={id} onPress={_filterMoments}>
        <Block paddingHorizontal={12} backgroundColor={backgroundColor} style={styles.category}>
          <Text sm color={color} type="semibold">
            {tagging}
          </Text>
        </Block>
      </TouchableOpacity>
    );
  };

  return (
    <Block width={width} marginVertical={12} backgroundColor="secondary_background">
      <ScrollView horizontal bounces={false} showsHorizontalScrollIndicator={false}>
        <Block row alignCenter gap={10}>
          {momentTags?.map(_renderCategory)}
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
