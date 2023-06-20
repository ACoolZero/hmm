import {ICONS} from '@assets';
import {Block, Image, Rating, Text} from '@components';
import {useColors} from '@hooks';
import {navigate} from '@navigation/NavigationServices';
import routes from '@navigation/routes';
import {IArticle} from '@screens/Bottom/Home/types';
import {width} from '@utils/responsive';
import React from 'react';
import {Pressable, StyleSheet} from 'react-native';

const STORY_HEIGHT = width * 0.5;

interface ArticleCardProps {
  item: IArticle;
  index: number;
}

const ArticleCard: React.FC<ArticleCardProps> = ({item, index}) => {
  const {COLORS} = useColors();
  const {image, title, short, views_count, rating} = item;

  return (
    <Pressable
      style={styles.shadow}
      onPress={() => {
        navigate(routes.ARTICLE_DETAILS_SCREEN, {details: item});
      }}>
      <Block
        radius={20}
        padding={16}
        marginBottom={16}
        marginHorizontal={16}
        backgroundColor={index % 2 === 0 ? 'card_background_one' : 'card_background_two'}
        overflow="hidden">
        <Image source={image} style={{height: STORY_HEIGHT}} />
        <Block marginTop={24}>
          <Text md type="semibold">
            {title}
          </Text>
          <Text marginVertical={12} color="light_text">
            {short}
          </Text>
          <Block row alignCenter space="between">
            <Block row alignCenter>
              <Image source={ICONS.eye_open} tintColor={COLORS.text} square={24} />
              <Text marginLeft={6}>{views_count} views</Text>
            </Block>
            <Rating value={rating} />
          </Block>
        </Block>
      </Block>
    </Pressable>
  );
};

export default ArticleCard;

const styles = StyleSheet.create({
  shadow: {
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    shadowColor: 'rgba(0, 0, 0, 0.16)',
  },
});
