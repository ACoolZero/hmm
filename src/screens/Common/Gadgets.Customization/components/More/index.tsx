import {IMAGES} from '@assets';
import {Block, GradientSwitch, Image, Text} from '@components';
import {useColors, useStore, useTranslation} from '@hooks';
import {SWITCH_THEME_MODE} from '@store/actions';
import React from 'react';

const More: React.FC = () => {
  const {dispatch, useSelector} = useStore();
  const {setColorScheme} = useColors();
  const {mode} = useSelector('theme');
  const {t} = useTranslation();

  const _toggleDarkMode = () => {
    dispatch({type: SWITCH_THEME_MODE, payload: {mode: mode === 'dark' ? 'light' : 'dark'}});
    setColorScheme(mode === 'dark' ? 'light' : 'dark');
  };

  return (
    <Block marginBottom={24}>
      <Text marginBottom={12} type="bold">
        {t('gadgets.customization.more.label')}
      </Text>
      <Block radius={12} backgroundColor="secondary_background">
        <Block row alignCenter padding={16} space="between">
          <Block row alignCenter>
            <Image source={IMAGES.theme_mode} square={32} />
            <Text marginLeft={12}>{t('gadgets.customization.more.dark_mode')}</Text>
          </Block>
          <GradientSwitch isOn={mode === 'dark'} onToggle={_toggleDarkMode} />
        </Block>
        <Block height={1} marginHorizontal={16} backgroundColor="#87A8B9" />
        <Block row alignCenter padding={16} space="between" opacity={0.5}>
          <Block row alignCenter>
            <Image source={IMAGES.sound_mode} square={32} />
            <Text marginLeft={12}>{t('gadgets.customization.more.sound_animation')}</Text>
          </Block>
          <GradientSwitch disabled />
        </Block>
        <Block height={1} marginHorizontal={16} backgroundColor="#87A8B9" />
        <Block row alignCenter padding={16} space="between" opacity={0.5}>
          <Block row alignCenter>
            <Image source={IMAGES.calendar_mode} square={32} />
            <Text marginLeft={12}>{t('gadgets.customization.more.plan_to_calendar')}</Text>
          </Block>
          <GradientSwitch disabled />
        </Block>
        <Block height={1} marginHorizontal={16} backgroundColor="#87A8B9" />
        <Block row alignCenter padding={16} space="between" opacity={0.5}>
          <Block row alignCenter>
            <Image source={IMAGES.record_mode} square={32} />
            <Text marginLeft={12}>{t('gadgets.customization.more.record_reminder')}</Text>
          </Block>
          <GradientSwitch disabled />
        </Block>
      </Block>
    </Block>
  );
};

export default More;
