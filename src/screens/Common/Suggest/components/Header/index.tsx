import {ICONS} from '@assets';
import {Block, Image, Text} from '@components';
import {goBack} from '@navigation/NavigationServices';
import React from 'react';
import {Pressable} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styles from './styles';
import {useTranslation} from '@hooks';

const Header: React.FC = () => {
  const {top} = useSafeAreaInsets();
  const {t} = useTranslation();

  return (
    <Block shadow paddingTop={top} style={styles.container} backgroundColor="#FF575F">
      <Block justifyCenter height={48} marginBottom={24}>
        <Text center numberOfLines={1} color="text" type="semibold">
          {t('suggest.header')}
        </Text>
        <Pressable style={styles.btnBack} onPress={goBack}>
          <Image source={ICONS.close} square={14} tintColor="text" />
        </Pressable>
      </Block>
    </Block>
  );
};

export default Header;
