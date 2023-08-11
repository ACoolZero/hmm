import {Block, MomentCard, Text} from '@components';
import {IMOMENT} from '@screens/Bottom/Moments/types';
import React, {useRef} from 'react';
import {Animated, ListRenderItem} from 'react-native';
import Category from '../Category';
import {DATA} from './data';
import styles from './styles';

const Newsfeed: React.FC = () => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  const _renderHeader = () => {
    return (
      <Animated.View style={styles.header(animatedValue)}>
        <Block height={102} backgroundColor="secondary_background">
          <Text size={36} type="semibold">
            Moments
          </Text>
          <Category />
        </Block>
      </Animated.View>
    );
  };

  const _renderItem: ListRenderItem<IMOMENT> = ({item, index}) => <MomentCard item={item} index={index} />;

  return (
    <Animated.FlatList
      data={DATA}
      keyExtractor={(item: IMOMENT) => String(item.id)}
      renderItem={_renderItem}
      contentContainerStyle={styles.flatListcontentContaine}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={_renderHeader}
      stickyHeaderIndices={[0]}
      scrollEventThrottle={16}
      onScroll={Animated.event([{nativeEvent: {contentOffset: {y: animatedValue}}}], {useNativeDriver: false})}
    />
  );
};

export default Newsfeed;
