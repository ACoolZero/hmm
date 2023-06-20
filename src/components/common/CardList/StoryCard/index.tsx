import {Block, Text} from '@components';
import {width} from '@utils/responsive';
import React from 'react';
import {ImageBackground, Pressable} from 'react-native';

const STORY_WIDTH = width * 0.35;
const STORY_HEIGHT = STORY_WIDTH * 1.4;

const StoryCard: React.FC<any> = ({item}) => {
  const {image, title} = item;

  return (
    <Pressable onPress={() => {}}>
      <Block radius={20} backgroundColor="background" marginLeft={16} overflow="hidden">
        <ImageBackground source={image} style={{height: STORY_HEIGHT, width: STORY_WIDTH}}>
          <Block flex backgroundColor="#0000002f">
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
