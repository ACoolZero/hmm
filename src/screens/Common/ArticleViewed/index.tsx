import {ArticleCard, Block, Header, ListWrapper} from '@components';
import {useStore, useTranslation} from '@hooks';
import {IPost} from '@screens/Bottom/Home/components/Articles/types';
import {IArticle} from '@screens/Bottom/Home/types';
import {GET_VIEWED_POSTS} from '@store/actions';
import React, {useCallback, useEffect} from 'react';
import {ListRenderItem} from 'react-native';

const ArticleViewed: React.FC = () => {
  const {dispatch, useSelector} = useStore();
  const {isAuth} = useSelector('auth');

  const {data: viewedPostsList} = useSelector('viewedPostsList');
  const {t} = useTranslation();

  const fetchData = useCallback(() => {
    dispatch({type: GET_VIEWED_POSTS});
  }, [dispatch]);

  useEffect(() => {
    if (isAuth)
      fetchData();
  }, [fetchData]);

  const _renderItem: ListRenderItem<IPost> = ({item, index}) => <ArticleCard item={item} index={index} />;

  return (
    <Block flex backgroundColor="background">
      <Header canGoBack title={t('home.articles.viewed')} />
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
