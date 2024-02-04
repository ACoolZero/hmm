import {Block, EmptyList, MomentCard, Text} from '@components';
import {useColors, useTranslation} from '@hooks';
import {IMoment} from '@screens/Bottom/Moments/types';
import useMoments from '@screens/Bottom/Moments/useMoments';
import {getSize} from '@utils/responsive';
import React, {useRef} from 'react';
import {Animated, ListRenderItem, RefreshControl} from 'react-native';
import Category from '../Category';
import styles from './styles';

const Newsfeed: React.FC = () => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const {momentsList, isLoading, fetchData} = useMoments();
  const {COLORS} = useColors();
  const {t} = useTranslation();

  const _renderHeader = () => {
    return (
      <Animated.View style={styles.header(animatedValue)}>
        <Block height={110} backgroundColor="secondary_background">
          <Text size={36} type="semibold">
            {t('moments.header')}
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

  return (
    <Animated.FlatList
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
