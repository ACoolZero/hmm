import {IMAGES} from '@assets';
import {Block, GradientSwitch, Image, Text} from '@components';
import {useColors, useStore} from '@hooks';
import {SWITCH_THEME_MODE} from '@store/actions';
import React from 'react';

const More: React.FC = () => {
  const {dispatch, useSelector} = useStore();
  const {setColorScheme} = useColors();
  const {mode} = useSelector('theme');

  const _toggleDarkMode = () => {
    dispatch({type: SWITCH_THEME_MODE, payload: {mode: mode === 'dark' ? 'light' : 'dark'}});
    setColorScheme(mode === 'dark' ? 'light' : 'dark');
  };

  return (
    <Block marginBottom={24}>
      <Text marginBottom={12} type="bold">
        More
      </Text>
      <Block radius={12} backgroundColor="secondary_background">
        <Block row alignCenter padding={16} space="between">
          <Block row alignCenter>
            <Image source={IMAGES.theme_mode} square={32} />
            <Text marginLeft={12}>Dark mode</Text>
          </Block>
          <GradientSwitch isOn={mode === 'dark'} onToggle={_toggleDarkMode} />
        </Block>
        <Block height={1} marginHorizontal={16} backgroundColor="#87A8B9" />
        <Block row alignCenter padding={16} space="between">
          <Block row alignCenter>
            <Image source={IMAGES.sound_mode} square={32} />
            <Text marginLeft={12}>Sound animation</Text>
          </Block>
          <GradientSwitch disabled />
        </Block>
        <Block height={1} marginHorizontal={16} backgroundColor="#87A8B9" />
        <Block row alignCenter padding={16} space="between">
          <Block row alignCenter>
            <Image source={IMAGES.calendar_mode} square={32} />
            <Text marginLeft={12}>Plan to Calendar</Text>
          </Block>
          <GradientSwitch disabled />
        </Block>
        <Block height={1} marginHorizontal={16} backgroundColor="#87A8B9" />
        <Block row alignCenter padding={16} space="between">
          <Block row alignCenter>
            <Image source={IMAGES.record_mode} square={32} />
            <Text marginLeft={12}>Record reminder</Text>
          </Block>
          <GradientSwitch disabled />
        </Block>
      </Block>
    </Block>
  );
};

export default More;
