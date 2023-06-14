/* eslint-disable react-native/no-inline-styles */
import {Block, LoadMore} from '@components';
import React, {forwardRef} from 'react';
import {FlatList, RefreshControl} from 'react-native';
import {ListWrapperProps} from './types';

const ListWrapper = forwardRef<any, ListWrapperProps>((props, ref) => {
  const {
    data = null,
    page = 1,
    renderItem,
    keyExtractor,
    isLoading = false,
    horizontal = false,
    EmptyComponent,
    HolderComponent,
    ItemSeparator = 0,
    onRefresh,
    onLoadMore,
    containerStyle,
    ...rest
  } = props;
  const refreshing = isLoading && page === 1;

  const _keyExtractor = (item: any, index: number) => {
    return keyExtractor ? keyExtractor(item, index) : String(index);
  };

  const _renderItem = (e: any) => renderItem(e);

  const _renderEmpty = () => (!!data && EmptyComponent ? <EmptyComponent /> : null);

  const _renderFooter = () => <Block height={50}>{isLoading && page > 1 && <LoadMore />}</Block>;

  const _renderItemSeparator = () => <Block height={ItemSeparator} />;

  if (isLoading && page === 1 && !data) {
    return HolderComponent ? <HolderComponent /> : null;
  }

  return (
    <Block flex style={containerStyle}>
      <FlatList
        {...rest}
        ref={ref}
        data={data}
        horizontal={horizontal}
        renderItem={_renderItem}
        keyExtractor={_keyExtractor}
        ListEmptyComponent={_renderEmpty}
        ListFooterComponent={_renderFooter}
        ItemSeparatorComponent={_renderItemSeparator}
        onEndReached={onLoadMore}
        onEndReachedThreshold={0.5}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}
        refreshControl={
          onRefresh && <RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor="#518EF8" />
        }
      />
    </Block>
  );
});

export default ListWrapper;
