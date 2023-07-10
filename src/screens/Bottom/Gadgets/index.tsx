import {ICONS} from '@assets';
import {Block, FormContainer, Image, Text} from '@components';
import {useColors, useTranslation} from '@hooks';
import React from 'react';
import {Pressable} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {GadgetsHeader, GadgetsMenu} from './components';
import styles from './styles';

const Gadgets = () => {
  const {t} = useTranslation();
  const {top} = useSafeAreaInsets();
  const {COLORS} = useColors();

  return (
    <Block flex>
      <Block height={top} backgroundColor="secondary_background" style={styles.shadow} />
      <Block flex backgroundColor="background">
        <FormContainer>
          <GadgetsHeader />
          <GadgetsMenu />
          <Pressable onPress={() => {}} style={{...styles.btnLogout, borderColor: COLORS.light_text}}>
            <Image source={ICONS.logout} square={30} />
            <Text marginLeft={12}>{t('gadgets.logout')}</Text>
          </Pressable>
        </FormContainer>
      </Block>
    </Block>
  );
};

export default Gadgets;
