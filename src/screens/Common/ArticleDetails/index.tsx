import {ICONS} from '@assets';
import {Block, FormContainer, Header, Image, Rating, Text} from '@components';
import {useColors} from '@hooks';
import {RootStackParamList} from '@navigation/types';
import {RouteProp} from '@react-navigation/native';
import {width} from '@utils/responsive';
import React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';

interface ArticleDetailsProps {
  route: RouteProp<RootStackParamList, 'ARTICLE_DETAILS_SCREEN'>;
}

const ArticleDetails: React.FC<ArticleDetailsProps> = ({route}) => {
  const {details} = route.params;
  const {image, rating, short, content, title, views_count} = details;
  const {COLORS} = useColors();

  return (
    <Block flex backgroundColor="background">
      <Header canGoBack title={title} />
      <FormContainer>
        <ImageBackground source={image} style={{height: width * 0.5}}>
          <Block flex backgroundColor="#0000008f">
            <Block padding={16} absolute bottom={0}>
              <Text size={24} numberOfLines={3} type="bold" color="white" style={styles.customFont}>
                {short}
              </Text>
              <Block row alignCenter alignEnd width={width - 32} space="between">
                <Block row alignCenter marginTop={4}>
                  <Image source={ICONS.eye_open} tintColor={COLORS.white} square={24} />
                  <Text marginLeft={6} style={styles.customFont} color="white">
                    {views_count} views
                  </Text>
                </Block>
                <Rating value={rating} />
              </Block>
            </Block>
          </Block>
        </ImageBackground>
        <Block flex padding={16}>
          <Text size={18} color="article_text" style={styles.customFont}>
            {content}
          </Text>
          <Block padding={16}>
            <Block height={0.5} marginHorizontal={width * 0.1} marginBottom={16} backgroundColor="border" />
            <Block marginBottom={16}>
              <Text md center marginBottom={5} color="primary" type="semibold" style={styles.customFont}>
                Hi,
              </Text>
              <Text md center color="primary" type="semibold" style={styles.customFont}>
                how good is this post to you ?
              </Text>
            </Block>
            <Block radius={12} padding={8} borderWidth={1} borderColor="border">
              <Rating value={rating} size={32} />
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
