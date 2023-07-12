import {Block, Image, Text} from '@components';
import {useTranslation} from '@hooks';
import LottieView from 'lottie-react-native';
import React from 'react';
import {ViewStyle} from 'react-native';
import styles from './styles';

interface EmptyListProps {
  icon?: any;
  lottie?: any;
  content?: string;
  containerStyle?: ViewStyle;
}

const EmptyList: React.FC<EmptyListProps> = ({icon, lottie, content, containerStyle}) => {
  const {t} = useTranslation();

  return (
    <Block flex alignCenter justifyCenter style={containerStyle}>
      {icon && <Image source={icon} style={styles.icon} resizeMode="contain" />}
      {lottie && <LottieView loop autoPlay source={lottie} style={styles.lottie} />}
      <Text sm color="light_text">
        {content ? content : t('common.empty_list')}
      </Text>
    </Block>
  );
};

export default EmptyList;
