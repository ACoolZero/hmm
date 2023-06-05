import {Text} from '@components';
import {TextProps} from '@components/base/Text/types';
import MaskedView from '@react-native-masked-view/masked-view';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

interface GradientTextProps extends TextProps {
  colors?: string[];
  children?: any;
}

const GradientText: React.FC<GradientTextProps> = ({children}) => {
  return (
    <MaskedView maskElement={<Text />}>
      <LinearGradient colors={['red', 'green']} start={{x: 0, y: 0}} end={{x: 1, y: 0}}>
        <Text style={{opacity: 0}}>{children}</Text>
      </LinearGradient>
    </MaskedView>
  );
};

export default GradientText;
