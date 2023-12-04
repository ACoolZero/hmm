import {ICONS} from '@assets';
import {Block, Image, Rating, Text} from '@components';
import {useColors, useStore} from '@hooks';
import {navigate} from '@navigation/NavigationServices';
import routes from '@navigation/routes';
import {IPost} from '@screens/Bottom/Home/components/Articles/types';
import {GET_POSTS_DETAILS} from '@store/actions';
import {getSize} from '@utils/responsive';
import React, {memo} from 'react';
import {Pressable} from 'react-native';
import styles, {IMAGE_HEIGHT} from './styles';

interface ArticleCardProps {
  item: IPost;
  index: number;
}

const ArticleCard: React.FC<ArticleCardProps> = ({item, index}) => {
  const {dispatch} = useStore();
  const {COLORS} = useColors();
  const {id, media, title, shortDesc, viewer, avgRating} = item;

  return (
    <Pressable
      onPress={() => {
        navigate(routes.ARTICLE_DETAILS_SCREEN, {details: item});
        dispatch({type: GET_POSTS_DETAILS, payload: {id}});
      }}>
      <Block
        shadow
        backgroundColor={index % 2 === 0 ? 'card_background_one' : 'card_background_two'}
        style={styles.container}>
        <Image source={{uri: media}} style={{height: IMAGE_HEIGHT, borderRadius: getSize.s(10)}} />
        <Block marginTop={24}>
          <Text md type="semibold">
            {title}
          </Text>
          <Text marginVertical={12} color="light_text">
            {shortDesc}
          </Text>
          <Block row alignCenter space="between">
            <Block row alignCenter>
              <Image source={ICONS.eye_open} tintColor={COLORS.text} square={24} />
              <Text marginLeft={6}>{viewer} views</Text>
            </Block>
            <Rating value={avgRating} />
          </Block>
        </Block>
      </Block>
    </Pressable>
  );
};

export default memo(ArticleCard);
