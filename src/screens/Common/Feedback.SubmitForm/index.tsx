/* eslint-disable react-native/no-inline-styles */
import {ICONS} from '@assets';
import {Block, Header, Image, Text, TextInput} from '@components';
import {useColors} from '@hooks';
import {getSize} from '@utils/responsive';
import React from 'react';
import styles from './styles';

const FeedbackSubmitForm: React.FC = () => {
  const {COLORS} = useColors();

  return (
    <Block flex backgroundColor="background">
      <Header canGoBack title="Feedback" />
      <Block
        radius={24}
        margin={16}
        paddingHorizontal={16}
        paddingTop={24}
        paddingBottom={32}
        backgroundColor="secondary_background">
        <Text md type="semibold">
          Something went wrong ?
        </Text>
        <TextInput
          multiline
          value="We are nothing without you, thank you for the contribution."
          inputStyle={{...styles.multilineInputStyle, backgroundColor: COLORS.background}}
          height={120}
          style={{
            flex: 1,
            height: getSize.s(120),
            fontSize: getSize.m(16),
            color: COLORS.light_text,
            textAlignVertical: 'top',
            fontWeight: '600',
          }}
        />
        <Block row alignCenter marginBottom={24}>
          <Block alignCenter justifyCenter round={20} borderWidth={2} marginRight={8} borderColor="primary">
            <Block round={10} backgroundColor="primary" />
          </Block>
          <Text sm color="light_text">
            Including logs
          </Text>
        </Block>
        <Block row alignCenter justifyCenter borderColor={COLORS.light_text} style={styles.btnAddScreenshot}>
          <Block alignCenter justifyCenter round={32} marginRight={8} backgroundColor={COLORS.card_background_one}>
            <Image source={ICONS.camera} square={18} tintColor={COLORS.light_text} resizeMode="contain" />
          </Block>
          <Text sm color="light_text">
            Add screenshots
          </Text>
        </Block>
      </Block>
    </Block>
  );
};

export default FeedbackSubmitForm;
