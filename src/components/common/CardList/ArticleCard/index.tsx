import {ICONS} from '@assets';
import {Block, Image, Text} from '@components';
import {useColors} from '@hooks';
import {navigate} from '@navigation/NavigationServices';
import routes from '@navigation/routes';
import {getSize, width} from '@utils/responsive';
import React from 'react';
import {Pressable} from 'react-native';

const STORY_HEIGHT = width * 0.5;

const ArticleCard: React.FC<any> = ({item}) => {
  const {COLORS} = useColors();
  const {image, title, short, views_count, rating} = item;

  return (
    <Pressable
      onPress={() => {
        navigate(routes.ARTICLE_DETAILS_SCREEN, {item});
      }}>
      <Block
        radius={20}
        padding={16}
        marginBottom={16}
        marginHorizontal={16}
        backgroundColor="light_background"
        overflow="hidden">
        <Image source={image} style={{height: STORY_HEIGHT}} />
        <Block marginTop={24}>
          <Text md type="semibold">
            {title}
          </Text>
          <Text marginVertical={12} color="rgba(255, 255, 255, 0.6)">
            {short}
          </Text>
          <Block row alignCenter>
            <Image source={ICONS.eye_open} tintColor={COLORS.white} square={getSize.m(24)} />
            <Text marginLeft={6}>{views_count} views</Text>
          </Block>
        </Block>
      </Block>
    </Pressable>
  );
};

export default ArticleCard;
