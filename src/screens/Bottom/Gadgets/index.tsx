import {Block, Text} from '@components';
import {useColors, useStore} from '@hooks';
import {SWITCH_THEME_MODE} from '@store/actions';
import React from 'react';
import {Pressable} from 'react-native';

const Gadgets = () => {
  const {dispatch} = useStore();
  const {setColorScheme} = useColors();

  return (
    <Block flex backgroundColor="background" alignCenter justifyCenter>
      <Pressable
        onPress={() => {
          dispatch({type: SWITCH_THEME_MODE, payload: {mode: 'light'}});
          setColorScheme('light');
        }}>
        <Text>light</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          dispatch({type: SWITCH_THEME_MODE, payload: {mode: 'dark'}});
          setColorScheme('dark');
        }}>
        <Text>dark</Text>
      </Pressable>
    </Block>
  );
};

export default Gadgets;
