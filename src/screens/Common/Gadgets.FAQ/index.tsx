import {ICONS} from '@assets';
import {Block, FormContainer, Header, Image, Text} from '@components';
import {useColors} from '@hooks';
import React from 'react';
import {Pressable} from 'react-native';
import data, {IQuestion} from './data';

const Privacy: React.FC = () => {
  const {COLORS, randomTextColor} = useColors();

  const _renderItem = (item: IQuestion, index: number) => {
    const {id, title} = item;
    const isLastItem = index === data.length - 1;
    return (
      <Pressable key={id} onPress={() => {}}>
        <Block row alignCenter padding={16} space="between">
          <Block row alignCenter>
            <Block alignCenter justifyCenter radius={8} square={32} backgroundColor={randomTextColor()}>
              <Text sm>{index + 1}</Text>
            </Block>
            <Text marginLeft={12}>{title}</Text>
          </Block>
          <Image source={ICONS.arrow_right} square={14} tintColor="light_text" />
        </Block>
        {!isLastItem && <Block height={1} marginHorizontal={16} backgroundColor={COLORS.light_text} />}
      </Pressable>
    );
  };

  return (
    <Block flex paddingBottom={60} backgroundColor="background">
      <Header canGoBack title="FAQ" />
      <FormContainer>
        <Block margin={16} radius={12} backgroundColor="secondary_background">
          {data.map(_renderItem)}
        </Block>
      </FormContainer>
    </Block>
  );
};

export default Privacy;
