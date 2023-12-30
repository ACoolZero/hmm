import {ICONS} from '@assets';
import {Block, FormContainer, Image, Text} from '@components';
import {useColors, useTranslation} from '@hooks';
import React, {useState} from 'react';
import {DeviceEventEmitter, Pressable} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {GadgetsHeader, GadgetsMenu, LogoutDialog} from './components';
import styles from './styles';

const Gadgets: React.FC = () => {
  const {t} = useTranslation();
  const {top} = useSafeAreaInsets();
  const {COLORS} = useColors();
  const [isDialogVisible, setDialogVisible] = useState<boolean>(false);
  const [scrollEnabled, setScrollEnabled] = useState(true);

  DeviceEventEmitter.addListener('onDragging', payload => {
    setScrollEnabled(!payload);
  });

  return (
    <Block flex>
      <Block height={top} backgroundColor="secondary_background" style={styles.shadow} />
      <Block flex backgroundColor="background">
        <FormContainer scrollEnabled={scrollEnabled}>
          <GadgetsHeader />
          <GadgetsMenu />
          <Pressable
            onPress={() => setDialogVisible(true)}
            style={{...styles.btnLogout, borderColor: COLORS.light_text}}>
            <Image source={ICONS.logout} square={30} />
            <Text marginLeft={12}>{t('gadgets.logout')}</Text>
          </Pressable>
        </FormContainer>
      </Block>
      <LogoutDialog useDialog={[isDialogVisible, setDialogVisible]} />
    </Block>
  );
};

export default Gadgets;
