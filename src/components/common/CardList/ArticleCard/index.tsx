import {ICONS} from '@assets';
import {Block, Image, Rating, Text} from '@components';
import {useColors} from '@hooks';
import {navigate} from '@navigation/NavigationServices';
import routes from '@navigation/routes';
import {IArticle} from '@screens/Bottom/Home/types';
import {getSize} from '@utils/responsive';
import React from 'react';
import {Pressable} from 'react-native';
import styles, {IMAGE_HEIGHT} from './styles';

interface ArticleCardProps {
  item: IArticle;
  index: number;
}

const ArticleCard: React.FC<ArticleCardProps> = ({item, index}) => {
  const {COLORS} = useColors();
  const {image, title, short, views_count, rating} = item;

  return (
    <Pressable
      onPress={() => {
        navigate(routes.ARTICLE_DETAILS_SCREEN, {details: item});
      }}>
      <Block
        shadow
        backgroundColor={index % 2 === 0 ? 'card_background_one' : 'card_background_two'}
        style={styles.container}>
        <Image source={image} style={{height: IMAGE_HEIGHT, borderRadius: getSize.s(10)}} />
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
