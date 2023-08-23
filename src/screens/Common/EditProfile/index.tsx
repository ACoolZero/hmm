/* eslint-disable react-native/no-inline-styles */
import {ICONS, IMAGES} from '@assets';
import {Block, FormContainer, GradientButton, Header, Image, Text, TextInput} from '@components';
import {useColors} from '@hooks';
import {goBack} from '@navigation/NavigationServices';
import {getSize} from '@utils/responsive';
import React, {useState} from 'react';
import {Pressable} from 'react-native';
import styles from './styles';

type GenderType = 'Male' | 'Female';

const EditProfile: React.FC = () => {
  const {COLORS} = useColors();
  const [gender, setGender] = useState<GenderType>('Male');

  const _renderGender = (value: GenderType) => (
    <Pressable onPress={() => setGender(value)}>
      <Block row alignCenter justifyCenter height={48} paddingHorizontal={16} space="between">
        <Text type="semibold" color={gender === value ? COLORS.primary : COLORS.light_text}>
          {value}
        </Text>
        <Block alignCenter justifyCenter height={36}>
          <Block
            alignCenter
            justifyCenter
            round={20}
            borderWidth={2}
            borderColor={gender === value ? COLORS.primary : COLORS.light_text}>
            <Block round={10} backgroundColor={gender === value ? COLORS.primary : COLORS.secondary_background} />
          </Block>
        </Block>
      </Block>
    </Pressable>
  );

  return (
    <Block flex backgroundColor="background">
      <Header canGoBack title="Edit Profile" />
      <FormContainer>
        <Block paddingHorizontal={16} paddingVertical={24}>
          <Pressable onPress={() => {}}>
            <Block alignSelf="center">
              <Image source={IMAGES.avatar} round={80} />
              <Block round={24} backgroundColor={COLORS.secondary_background} style={styles.btnCamera}>
                <Image source={ICONS.camera} square={16} tintColor={COLORS.light_text} resizeMode="contain" />
              </Block>
            </Block>
          </Pressable>
          <Block paddingTop={16}>
            <TextInput
              label="Your name"
              value="Alice Smith"
              inputStyle={{backgroundColor: COLORS.secondary_background, borderWidth: 0}}
              containerInputStyle={styles.containerInputStyle}
              color={COLORS.light_text}
            />
            <Block paddingHorizontal={3} style={styles.containerInputStyle}>
              <Text sm marginBottom={8}>
                Phone number
              </Text>
              <Block row alignCenter>
                <Block
                  row
                  alignCenter
                  marginRight={8}
                  backgroundColor={COLORS.secondary_background}
                  style={styles.phoneInputStyle}>
                  <Text marginRight={12} color={COLORS.light_text} type="semibold">
                    +84
                  </Text>
                  <Image source={ICONS.arrow_down} square={10} tintColor={COLORS.light_text} />
                </Block>
                <Block flex justifyCenter backgroundColor={COLORS.secondary_background} style={styles.phoneInputStyle}>
                  <Text color={COLORS.light_text} numberOfLines={1} type="semibold">
                    23 456 7890
                  </Text>
                </Block>
              </Block>
            </Block>
            <TextInput
              label="Email"
              value="mailto:alicesmith.work@mail.com"
              inputStyle={{backgroundColor: COLORS.secondary_background, borderWidth: 0}}
              containerInputStyle={styles.containerInputStyle}
              color={COLORS.light_text}
            />
            <Block paddingHorizontal={3} style={styles.containerInputStyle}>
              <Text sm marginBottom={8}>
                Gender
              </Text>
              <Block radius={8} backgroundColor={COLORS.secondary_background}>
                {_renderGender('Male')}
                <Block height={1} backgroundColor={COLORS.light_text} />
                {_renderGender('Female')}
              </Block>
            </Block>
            <Text sm marginBottom={8} marginLeft={3}>
              Slogan
            </Text>
            <TextInput
              multiline
              value="Sometimes, it’s better to smile 🤡 than to explain why you’re sad 🥹"
              inputStyle={{...styles.multilineInputStyle, backgroundColor: COLORS.secondary_background}}
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
          </Block>
        </Block>
      </FormContainer>
      <Block
        safeBottom
        paddingTop={8}
        paddingHorizontal={16}
        borderTopWidth={1}
        borderColor="#87A8B9"
        backgroundColor="secondary_background">
        <GradientButton
          title="Save"
          onPress={() => {
            goBack();
          }}
        />
      </Block>
    </Block>
  );
};

export default EditProfile;
