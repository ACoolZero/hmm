import {ICONS} from '@assets';
import {Block, FormContainer, Header, Image, Rating, Text} from '@components';
import HTMLView from '@components/common/HTMLView';
import {useColors, useStore, useTranslation} from '@hooks';
import {RootStackParamList} from '@navigation/types';
import {RouteProp} from '@react-navigation/native';
import {RATING_POSTS} from '@store/actions';
import {width} from '@utils/responsive';
import React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';

interface ArticleDetailsProps {
  route: RouteProp<RootStackParamList, 'ARTICLE_DETAILS_SCREEN'>;
}

const ArticleDetails: React.FC<ArticleDetailsProps> = () => {
  // const {details} = route.params;
  const {dispatch, useSelector} = useStore();
  const {data: details} = useSelector('postDetails');
  const {COLORS} = useColors();
  const {t} = useTranslation();
  const {id, media, avgRating, rating, shortDesc, content, title, viewer} = details || {};

  const _ratingPost = (rating: number) => {
    dispatch({type: RATING_POSTS, payload: {id, rating}});
  };

  return (
    <Block flex backgroundColor="background">
      <Header canGoBack title={title} />
      <FormContainer>
        <ImageBackground source={{uri: media}} style={{height: width * 0.5}}>
          <Block flex backgroundColor="#0000008f">
            <Block padding={16} absolute bottom={0}>
              <Text size={24} numberOfLines={3} type="bold" color="white" style={styles.customFont}>
                {shortDesc}
              </Text>
              <Block row alignCenter alignEnd width={width - 32} space="between">
                <Block row alignCenter marginTop={4}>
                  <Image source={ICONS.eye_open} tintColor={COLORS.white} square={24} />
                  <Text marginLeft={6} style={styles.customFont} color="white">
                    {viewer} {t('home.articles.views')}
                  </Text>
                </Block>
                <Rating value={avgRating} />
              </Block>
            </Block>
          </Block>
        </ImageBackground>
        <Block flex padding={16}>
          <HTMLView html={content} />
          <Block padding={16}>
            <Block height={0.5} marginHorizontal={width * 0.1} marginBottom={16} backgroundColor="border" />
            <Block marginBottom={16}>
              <Text md center marginBottom={5} color="primary" type="semibold" style={styles.customFont}>
                {t('home.articles.rating.greeting')}
              </Text>
              <Text md center color="primary" type="semibold" style={styles.customFont}>
                {t('home.articles.rating.prompt')}
              </Text>
            </Block>
            <Block radius={12} padding={8} borderWidth={1} borderColor="border">
              <Rating value={rating} size={32} isDisabled={false} onFinishRating={_ratingPost} />
            </Block>
          </Block>
        </Block>
      </FormContainer>
    </Block>
  );
};

export default ArticleDetails;

const styles = StyleSheet.create({
  customFont: {
    fontFamily: 'Poppins-Regular',
  },
});
