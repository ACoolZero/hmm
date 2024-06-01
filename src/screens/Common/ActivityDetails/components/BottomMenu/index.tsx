import {IMAGES} from '@assets';
import {Block, BottomSheet, Image, Text} from '@components';
import {useColors, useTranslation} from '@hooks';
import {getSize} from '@utils/responsive';
import React from 'react';
import {TouchableOpacity} from 'react-native';

interface BottomMenuProps {
  isOpenBottom: boolean;
  setIsOpenBottom: any;
}

const BottomMenu: React.FC<BottomMenuProps> = ({isOpenBottom, setIsOpenBottom}) => {
  const {t} = useTranslation();
  const {COLORS} = useColors();

  return (
    <BottomSheet
      useBottomSheet={[isOpenBottom, setIsOpenBottom]}
      handleStyle={{...styles.handleStyle, backgroundColor: COLORS.sub_text}}
      containerStyle={styles.containerStyle}
      contentStyle={styles.contentStyle}>
      <TouchableOpacity disabled onPress={() => {}}>
        <Block row alignCenter paddingHorizontal={12} paddingVertical={16} opacity={0.4}>
          <Image source={IMAGES.moment_share} square={32} />
          <Text flex marginLeft={12} numberOfLines={1}>
            {t('moments.bottom_menu.share')}
          </Text>
        </Block>
      </TouchableOpacity>
      <Block height={1} marginHorizontal={13} backgroundColor="border" />
      <TouchableOpacity disabled onPress={() => {}}>
        <Block row alignCenter paddingHorizontal={12} paddingVertical={16} opacity={0.4}>
          <Image source={IMAGES.moment_report} square={32} />
          <Text flex marginLeft={12} numberOfLines={1}>
            {t('moments.bottom_menu.report')}
          </Text>
        </Block>
      </TouchableOpacity>
      <Block height={1} marginHorizontal={13} backgroundColor="border" />
      <TouchableOpacity disabled onPress={() => {}}>
        <Block row alignCenter paddingHorizontal={12} paddingVertical={16} opacity={0.4}>
          <Image source={IMAGES.moment_notice} square={32} />
          <Text flex marginLeft={12} numberOfLines={1}>
            {t('moments.bottom_menu.notice')}
          </Text>
        </Block>
      </TouchableOpacity>
    </BottomSheet>
  );
};

export default BottomMenu;

const styles = {
  containerStyle: {
    borderTopLeftRadius: getSize.s(25),
    borderTopRightRadius: getSize.s(25),
  },
  contentStyle: {
    borderTopLeftRadius: getSize.s(25),
    borderTopRightRadius: getSize.s(25),
  },
  handleStyle: {
    width: getSize.s(50),
    height: getSize.v(3),
    borderRadius: getSize.m(3),
    top: 30,
  },
};
