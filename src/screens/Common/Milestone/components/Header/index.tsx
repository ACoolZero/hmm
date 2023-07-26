import {ICONS} from '@assets';
import {Block, Image, Text} from '@components';
import {goBack} from '@navigation/NavigationServices';
import React from 'react';
import {Pressable} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styles from './styles';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({title}) => {
  const {top} = useSafeAreaInsets();

  return (
    <Block shadow paddingTop={top} style={styles.container} backgroundColor="#FF974A">
      <Block justifyCenter height={48} marginBottom={24}>
        <Text center numberOfLines={1} color="common_text" type="semibold">
          {title}
        </Text>
        <Pressable style={styles.btnBack} onPress={goBack}>
          <Image source={ICONS.close} square={14} tintColor="common_text" />
        </Pressable>
      </Block>
    </Block>
  );
};

export default Header;
