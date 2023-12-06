import {Block, MomentCard, Text} from '@components';
import {useColors} from '@hooks';
import {IMoment} from '@screens/Bottom/Moments/types';
import useMoments from '@screens/Bottom/Moments/useMoments';
import React, {useRef} from 'react';
import {Animated, ListRenderItem, RefreshControl} from 'react-native';
import Category from '../Category';
import styles from './styles';

const Newsfeed: React.FC = () => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const {momentsList, isLoading, fetchData} = useMoments();
  const {COLORS} = useColors();

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

  const _renderItem: ListRenderItem<IMoment> = ({item, index}) => <MomentCard item={item} index={index} />;

  const _onRefresh = () => {
    fetchData();
  };

  return (
    <Animated.FlatList
      data={momentsList}
      keyExtractor={(item: IMoment) => String(item.id)}
      renderItem={_renderItem}
      contentContainerStyle={styles.flatListcontentContaine}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={_renderHeader}
      stickyHeaderIndices={[0]}
      scrollEventThrottle={16}
      onScroll={Animated.event([{nativeEvent: {contentOffset: {y: animatedValue}}}], {useNativeDriver: false})}
      refreshControl={<RefreshControl refreshing={isLoading} onRefresh={_onRefresh} tintColor={COLORS.text} />}
    />
  );
};

export default Newsfeed;
