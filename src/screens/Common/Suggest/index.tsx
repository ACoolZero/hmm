/* eslint-disable react-native/no-inline-styles */
import {ICONS, IMAGES} from '@assets';
import {Block, GradientButton, Image, Text, TextInput} from '@components';
import {useColors, useTranslation} from '@hooks';
import {isIos} from '@utils/helper';
import {getSize, height, width} from '@utils/responsive';
import React, {useState} from 'react';
import {Pressable, StatusBar, StyleSheet} from 'react-native';
import Header from './components/Header';
import SuccessDialog from './components/SuccessDialog';

const IMAGE_BACKGROUND_WIDTH = width - 64;
const IMAGE_BACKGROUND_HEIGHT = IMAGE_BACKGROUND_WIDTH * 0.78;

const Suggest: React.FC = () => {
  const {COLORS} = useColors();
  const [isDialogVisible, setDialogVisible] = useState<boolean>(false);
  const {t} = useTranslation();

  return (
    <Block flex backgroundColor="background">
      <StatusBar backgroundColor="#FF575F" barStyle="dark-content" />
      <Header />
      <Block shadow style={styles.container} backgroundColor="secondary_background" overflow="hidden">
        <Block marginBottom={28}>
          <Text marginBottom={24} type="semibold">
            {t('suggest.question')}
          </Text>
          <TextInput
            multiline
            inputStyle={{...styles.multilineInputStyle, backgroundColor: COLORS.background}}
            containerInputStyle={styles.containerInputStyle}
            color={COLORS.sub_text}
            value={t('suggest.input_placeholder')}
            height={120}
            style={{
              flex: 1,
              height: getSize.s(120),
              fontSize: getSize.m(16),
              color: COLORS.sub_text,
              textAlignVertical: 'top',
              fontWeight: '600',
            }}
          />
          <Pressable>
            <Block row alignCenter justifyCenter borderWidth={1} style={styles.btnAddPhoto}>
              <Block alignCenter justifyCenter round={32} marginRight={8} backgroundColor="card_background_one">
                <Image source={ICONS.camera} square={20} tintColor={COLORS.background} resizeMode="contain" />
              </Block>
              <Text sm>{t('suggest.add_photos')}</Text>
            </Block>
          </Pressable>
        </Block>
        <Block flex>
          <Image
            source={IMAGES.suggest_background}
            width={IMAGE_BACKGROUND_WIDTH}
            height={IMAGE_BACKGROUND_HEIGHT}
            resizeMode="stretch"
          />
        </Block>
      </Block>
      <Block
        safeBottom
        paddingTop={8}
        paddingHorizontal={16}
        borderTopWidth={1}
        borderColor="#87A8B9"
        backgroundColor="secondary_background">
        <GradientButton title={t('button.share')} onPress={() => setDialogVisible(true)} />
      </Block>
      <SuccessDialog useDialog={[isDialogVisible, setDialogVisible]} />
    </Block>
  );
};

export default Suggest;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: -height * 0.15,
    marginBottom: getSize.m(32),
    marginHorizontal: getSize.m(16),
    borderRadius: getSize.s(24),
    paddingHorizontal: getSize.m(16),
    paddingTop: getSize.m(24),
    justifyContent: 'space-between',
  },
  containerInputStyle: {
    paddingHorizontal: 0,
    marginBottom: getSize.m(24),
  },
  multilineInputStyle: {
    alignItems: 'flex-start',
    height: getSize.s(120),
    borderWidth: getSize.s(0),
    paddingHorizontal: getSize.m(16),
    paddingTop: isIos ? getSize.m(8) : 0,
  },
  btnAddPhoto: {
    borderRadius: getSize.s(8),
    borderColor: '#87A8B980',
    borderStyle: 'dashed',
    height: getSize.s(90),
  },
});
