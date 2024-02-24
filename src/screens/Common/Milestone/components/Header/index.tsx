import {ICONS} from '@assets';
import {Block, Image, Text} from '@components';
import {goBack} from '@navigation/NavigationServices';
import React from 'react';
import {Pressable} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styles from './styles';
import {width} from '@utils/responsive';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({title}) => {
  const {top} = useSafeAreaInsets();

  return (
    <Block shadow style={styles.containerBorder} backgroundColor="#FF974A">
      <Block shadow paddingTop={top} style={styles.container} width={width} backgroundColor="milestone_header">
        <Block justifyCenter height={48} marginBottom={24}>
          <Text center numberOfLines={1} color="text" type="semibold">
            {title}
          </Text>
          <Pressable style={styles.btnBack} onPress={goBack}>
            <Image source={ICONS.close} square={14} tintColor="text" />
          </Pressable>
        </Block>
      </Block>
    </Block>
  );
};

export default Header;
