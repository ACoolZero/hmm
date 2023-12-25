import {ArticleCard, Block, Header, ListWrapper} from '@components';
import {useStore} from '@hooks';
import {IPost} from '@screens/Bottom/Home/components/Articles/types';
import {IArticle} from '@screens/Bottom/Home/types';
import {GET_VIEWED_POSTS} from '@store/actions';
import React, {useCallback, useEffect} from 'react';
import {ListRenderItem} from 'react-native';

const ArticleViewed: React.FC = () => {
  const {dispatch, useSelector} = useStore();
  const {data: viewedPostsList} = useSelector('viewedPostsList');

  const fetchData = useCallback(() => {
    dispatch({type: GET_VIEWED_POSTS});
  }, [dispatch]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const _renderItem: ListRenderItem<IPost> = ({item, index}) => <ArticleCard item={item} index={index} />;

  return (
    <Block flex backgroundColor="background">
      <Header canGoBack title="Viewed" />
      <Block flex paddingVertical={16}>
        <ListWrapper
          data={viewedPostsList}
          keyExtractor={(item: IArticle) => String(item.id)}
          renderItem={_renderItem}
        />
      </Block>
    </Block>
  );
};

export default ArticleViewed;
