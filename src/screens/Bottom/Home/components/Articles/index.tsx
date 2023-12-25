import {ICONS} from '@assets';
import {ArticleCard, Block, Image, Text} from '@components';
import {useColors} from '@hooks';
import {navigate} from '@navigation/NavigationServices';
import routes from '@navigation/routes';
import useHome from '@screens/Bottom/Home/useHome';
import React, {memo} from 'react';
import {TouchableOpacity} from 'react-native';
import {IPost} from './types';

const Articles: React.FC = () => {
  const {COLORS} = useColors();
  const {postsList} = useHome();

  const _renderItem = (item: IPost, index: number) => <ArticleCard key={item.id} item={item} index={index} />;

  return (
    <Block flex safeBottom>
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
      {postsList?.map(_renderItem)}
    </Block>
  );
};

export default memo(Articles);
