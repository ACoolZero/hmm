import {Block, EmptyList, MomentCard, Text} from '@components';
import {useColors} from '@hooks';
import {IMoment} from '@screens/Bottom/Moments/types';
import useMoments from '@screens/Bottom/Moments/useMoments';
import {getSize} from '@utils/responsive';
import React, {useRef, useState} from 'react';
import {Animated, DeviceEventEmitter, ListRenderItem, RefreshControl} from 'react-native';
import Category from '../Category';
import styles from './styles';

const Newsfeed: React.FC = () => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const {momentsList, isLoading, fetchData} = useMoments();
  const {COLORS} = useColors();
  const [scrollEnabled, setScrollEnabled] = useState(true);

  const _renderHeader = () => {
    return (
      <Animated.View style={styles.header(animatedValue)}>
        <Block height={110} backgroundColor="secondary_background">
          <Text size={36} type="semibold">
            Moments
          </Text>
          <Category />
        </Block>
      </Animated.View>
    );
  };

  const _renderEmpty = () => <EmptyList containerStyle={{marginTop: getSize.m(16)}} />;

  const _renderItem: ListRenderItem<IMoment> = ({item, index}) => <MomentCard item={item} index={index} />;

  const _onRefresh = () => {
    fetchData();
  };

  DeviceEventEmitter.addListener('onDragging', payload => {
    setScrollEnabled(!payload);
  });

  return (
    <Animated.FlatList
      scrollEnabled={scrollEnabled}
      data={momentsList}
      keyExtractor={(item: IMoment) => String(item.id)}
      renderItem={_renderItem}
      contentContainerStyle={styles.flatListcontentContainer}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={_renderHeader}
      ListEmptyComponent={_renderEmpty}
      stickyHeaderIndices={[0]}
      scrollEventThrottle={16}
      onScroll={Animated.event([{nativeEvent: {contentOffset: {y: animatedValue}}}], {useNativeDriver: false})}
      refreshControl={<RefreshControl refreshing={isLoading} onRefresh={_onRefresh} tintColor={COLORS.text} />}
    />
  );
};

export default Newsfeed;
