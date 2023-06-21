import {Block, Text} from '@components';
import {getSize} from '@utils/responsive';
import React from 'react';
import {ImageBackground, Pressable} from 'react-native';
import styles, {STORY_HEIGHT, STORY_WIDTH} from './styles';

const StoryCard: React.FC<any> = ({item}) => {
  const {image, title} = item;

  return (
    <Pressable onPress={() => {}}>
      <Block shadow radius={20} style={styles.container}>
        <ImageBackground
          source={image}
          imageStyle={{borderRadius: getSize.s(20)}}
          style={{height: STORY_HEIGHT, width: STORY_WIDTH}}>
          <Block flex radius={20} backgroundColor="#0000002f">
            <Block padding={16} absolute bottom={0}>
              <Text type="medium" color="white">
                {title}
              </Text>
            </Block>
          </Block>
        </ImageBackground>
      </Block>
    </Pressable>
  );
};

export default StoryCard;
