/* eslint-disable react-native/no-inline-styles */
import {Text} from '@components';
import {TextProps} from '@components/base/Text/types';
import MaskedView from '@react-native-masked-view/masked-view';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

interface GradientTextProps extends TextProps {
  colors?: string[];
}

const GradientText: React.FC<GradientTextProps> = ({colors = ['#23B7EB', '#78A9FD'], ...textProps}) => {
  return (
    <MaskedView maskElement={<Text {...textProps} />}>
      <LinearGradient colors={colors} start={{x: 0, y: 0}} end={{x: 1, y: 0}} style={{alignSelf: 'flex-start'}}>
        <Text {...textProps} style={{opacity: 0}} />
      </LinearGradient>
    </MaskedView>
  );
};

export default GradientText;
