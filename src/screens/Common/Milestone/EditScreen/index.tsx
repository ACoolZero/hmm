/* eslint-disable react-native/no-inline-styles */
import {ICONS, MILESTONE} from '@assets';
import {Block, FormContainer, GradientButton, Image, Text, TextInput} from '@components';
import {useColors} from '@hooks';
import {getSize, height} from '@utils/responsive';
import React from 'react';
import {Pressable, StatusBar, StyleSheet} from 'react-native';
import Header from '../components/Header';

const EditScreen: React.FC = () => {
  const {COLORS} = useColors();

  const _renderIconCalendar = () => <Image source={ICONS.calender} square={24} tintColor={COLORS.light_text} />;

  return (
    <Block flex backgroundColor="background">
      <StatusBar backgroundColor="#FF974A" barStyle="dark-content" />
      <Header title="Edit Milestone" />
      <FormContainer style={styles.container}>
        <Block
          shadow
          radius={24}
          marginBottom={32}
          paddingTop={24}
          paddingHorizontal={16}
          backgroundColor="secondary_background">
          <Text marginBottom={16} type="semibold">
            Your milestone
          </Text>
          <TextInput
            inputStyle={{backgroundColor: COLORS.background, borderWidth: 0}}
            containerInputStyle={styles.containerInputStyle}
            color={COLORS.light_text}
            value="I was just born ^^"
          />
          <Text marginBottom={16} type="semibold">
            Icon
          </Text>
          <Block row alignCenter marginBottom={24}>
            <Block
              alignCenter
              justifyCenter
              radius={8}
              square={86}
              marginRight={24}
              backgroundColor={COLORS.background}>
              <Image source={MILESTONE.milestone1} square={44} resizeMode="contain" />
            </Block>
            <Pressable>
              <Image source={ICONS.edit} square={24} tintColor={COLORS.light_text} />
            </Pressable>
          </Block>
          <Text marginBottom={16} type="semibold">
            Time
          </Text>
          <TextInput
            pointerEvents="none"
            inputStyle={{backgroundColor: COLORS.background, borderWidth: 0}}
            containerInputStyle={styles.containerInputStyle}
            color={COLORS.light_text}
            rightIcon={_renderIconCalendar}
            value="03/06/2023"
          />
          <Text marginBottom={16} type="semibold">
            Location
          </Text>
          <TextInput
            inputStyle={{backgroundColor: COLORS.background, borderWidth: 0}}
            containerInputStyle={styles.containerInputStyle}
            color={COLORS.light_text}
            value="Hanoi, Vietnam"
          />
        </Block>
      </FormContainer>
      <Block
        safeBottom
        paddingTop={8}
        paddingHorizontal={16}
        borderTopWidth={1}
        borderColor="#87A8B9"
        backgroundColor="secondary_background">
        <GradientButton title="Save" onPress={() => {}} />
      </Block>
    </Block>
  );
};

export default EditScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: getSize.m(16),
    marginTop: -height * 0.16,
  },
  containerInputStyle: {
    paddingHorizontal: 0,
    marginBottom: getSize.m(24),
  },
});
