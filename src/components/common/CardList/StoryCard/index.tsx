import {Block, Text} from '@components';
import {navigate} from '@navigation/NavigationServices';
import routes from '@navigation/routes';
import {getSize} from '@utils/responsive';
import React, {memo} from 'react';
import {ImageBackground, Pressable} from 'react-native';
import styles, {STORY_HEIGHT, STORY_WIDTH} from './styles';

const StoryCard: React.FC<any> = ({item}) => {
  const {media, content} = item;

  return (
    <Pressable
      onPress={() => {
        navigate(routes.RECALL_SCREEN);
      }}>
      <Block shadow radius={20} style={styles.container} backgroundColor="background">
        <ImageBackground
          source={{uri: media}}
          imageStyle={{borderRadius: getSize.s(20)}}
          style={{height: STORY_HEIGHT, width: STORY_WIDTH}}>
          <Block flex radius={20} backgroundColor="#0000002f">
            <Block padding={16} absolute bottom={0}>
              <Text type="medium" color="white" numberOfLines={2}>
                {content}
              </Text>
            </Block>
          </Block>
        </ImageBackground>
      </Block>
    </Pressable>
  );
};

export default memo(StoryCard);
