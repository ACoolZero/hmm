import {ICONS} from '@assets';
import {Block, Header, Image} from '@components';
import {handleHitSlop} from '@components/base/shared';
import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import BottomMenu from '../BottomMenu';
import styles from './styles';

const CustomHeader = ({...rest}) => {
  const [isOpenBottom, setIsOpenBottom] = useState(false);

  const _openBottomMenu = () => setIsOpenBottom(true);

  return (
    <Block>
      <Header {...rest} />
      <TouchableOpacity style={styles.btnMenu} hitSlop={handleHitSlop(5)} onPress={_openBottomMenu}>
        <Image source={ICONS.dots} square={28} tintColor="text" />
      </TouchableOpacity>
      <BottomMenu isOpenBottom={isOpenBottom} setIsOpenBottom={setIsOpenBottom} />
    </Block>
  );
};

export default CustomHeader;
