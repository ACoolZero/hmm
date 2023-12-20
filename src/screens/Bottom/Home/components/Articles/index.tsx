import {ICONS} from '@assets';
import {ArticleCard, Block, Image, ListWrapper, Text} from '@components';
import {useColors} from '@hooks';
import {navigate} from '@navigation/NavigationServices';
import routes from '@navigation/routes';
import {EmotionChart, Milestones, Reaction, Status, Stories} from '@screens/Bottom/Home/components';
import {IArticle} from '@screens/Bottom/Home/types';
import useHome from '@screens/Bottom/Home/useHome';
import React, {memo, useEffect} from 'react';
import {ListRenderItem, TouchableOpacity} from 'react-native';
import {IPost} from './types';

const Articles: React.FC = () => {
  const {fetchData} = useHome();
  const {COLORS} = useColors();
  const {postsList} = useHome();

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const _renderItem: ListRenderItem<IPost> = ({item, index}) => <ArticleCard item={item} index={index} />;

  const _renderHeader = () => {
    return (
      <Block>
        <Stories />
        <Reaction />
        <Status />
        <EmotionChart />
        <Milestones />
        {!!postsList?.length && (
          <Block row alignCenter marginHorizontal={17} marginBottom={24} space="between">
            <Text size={24} type="bold">
              Reading list
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigate(routes.ARTICLE_VIEWED_SCREEN);
              }}>
              <Block row alignCenter>
                <Text sm marginRight={6} color="primary">
                  Viewed
                </Text>
                <Image source={ICONS.arrow_right} square={12} tintColor={COLORS.primary} />
              </Block>
            </TouchableOpacity>
          </Block>
        )}
      </Block>
    );
  };

  const _onRefresh = () => fetchData();

  return (
    <Block flex safeBottom>
      <ListWrapper
        data={postsList}
        keyExtractor={(item: IArticle) => String(item.id)}
        renderItem={_renderItem}
        ListHeaderComponent={_renderHeader}
        onRefresh={_onRefresh}
      />
    </Block>
  );
};

export default memo(Articles);
