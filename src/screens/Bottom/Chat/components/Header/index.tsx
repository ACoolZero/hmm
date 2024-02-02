import {ICONS} from '@assets';
import {Block, GradientSwitch, Image, Text} from '@components';
import {useTranslation} from '@hooks';
import {getSize} from '@utils/responsive';
import React, {useCallback, useState} from 'react';
import {StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const Header: React.FC = () => {
  const {top} = useSafeAreaInsets();
  const [isEnabledSwitch, setEnabledSwitch] = useState(true);
  const {t} = useTranslation();

  const _toggleSwitch = useCallback(() => {
    setEnabledSwitch(oldValue => !oldValue);
  }, []);

  return (
    <Block marginBottom={1} backgroundColor="secondary_background">
      <Block
        paddingTop={top}
        height={top + getSize.v(48)}
        backgroundColor="secondary_background"
        style={styles.container}>
        <Block row alignCenter>
          <Image source={ICONS.bot} round={46} />
          <Text marginLeft={8} type="semibold">
            {t('conversation.bot_name')}
          </Text>
        </Block>
        <Block row alignCenter>
          <Text sm marginRight={8}>
            {t('conversation.chat_mode')}
          </Text>
          <GradientSwitch isOn={isEnabledSwitch} onToggle={_toggleSwitch} />
        </Block>
      </Block>
    </Block>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: getSize.m(16),
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
  },
});
