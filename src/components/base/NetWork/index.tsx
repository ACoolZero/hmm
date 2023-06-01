import {Block, Text} from '@components';
import {useTranslation} from '@hooks';
import NetInfo from '@react-native-community/netinfo';
import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';

const NetWork: React.FC = () => {
  const {t} = useTranslation();
  const [isConnection, setIsConnection] = useState<boolean | null>(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnection(state.isConnected);
    });

    return unsubscribe;
  }, []);

  if (isConnection) {
    return null;
  }

  return (
    <Block
      safeBottom
      justifyEnd
      paddingHorizontal={16}
      paddingBottom={24}
      backgroundColor="rgba(0,0,0,0.2)"
      style={StyleSheet.absoluteFillObject}>
      <Block radius={6} paddingHorizontal={8} paddingVertical={12} backgroundColor="gray_800">
        <Text center color="white">
          {t('common.network_failure')}
        </Text>
      </Block>
    </Block>
  );
};

export default NetWork;
