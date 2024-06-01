/* eslint-disable react-native/no-inline-styles */
import {Block, LoadMore} from '@components';
import React, {forwardRef} from 'react';
import {FlatList, ListRenderItem, RefreshControl} from 'react-native';
import {ListWrapperProps} from './types';

const ListWrapper = forwardRef<any, ListWrapperProps>((props, ref) => {
  const {
    data = null,
    page = 1,
    renderItem,
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

  const _renderItem: ListRenderItem<any> = e => renderItem(e);

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
        ListEmptyComponent={_renderEmpty}
        ListFooterComponent={_renderFooter}
        ItemSeparatorComponent={_renderItemSeparator}
        onEndReached={onLoadMore}
        onEndReachedThreshold={0.5}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}
        refreshControl={
          onRefresh && <RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor="#1E90FF" />
        }
      />
    </Block>
  );
});

export default ListWrapper;
