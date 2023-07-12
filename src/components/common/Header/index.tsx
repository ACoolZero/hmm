import {ICONS} from '@assets';
import {Block, Image, Text} from '@components';
import {goBack, reset} from '@navigation/NavigationServices';
import routes from '@navigation/routes';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Pressable} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styles from './styles';

interface HeaderProps {
  canGoBack?: boolean;
  title?: string;
  onGoBack?: () => void;
}

const Header: React.FC<HeaderProps> = ({canGoBack, title, onGoBack}) => {
  const {top} = useSafeAreaInsets();
  const navigation = useNavigation();

  const _handleGoBack = () => (onGoBack ? onGoBack() : navigation.canGoBack() ? goBack() : reset(routes.BOTTOM_TAB));

  return (
    <Block shadow alignCenter justifyCenter paddingTop={top} height={top + 50} backgroundColor="secondary_background">
      {(canGoBack || onGoBack) && (
        <Pressable onPress={_handleGoBack} style={styles.btnBack}>
          <Image source={ICONS.arrow_left} style={styles.iconBack} tintColor="text" />
        </Pressable>
      )}
      <Text center numberOfLines={1} color="text" type="semibold">
        {title}
      </Text>
    </Block>
  );
};

export default Header;
