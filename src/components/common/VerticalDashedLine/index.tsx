/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import * as Svg from 'react-native-svg';

interface VerticalDashedLineProps {
  height: number;
  width: number;
  color: string;
}

const VerticalDashedLine: React.FC<VerticalDashedLineProps> = ({height, width, color}) => {
  return (
    <Svg.Svg height={height} width={width} style={{alignSelf: 'center'}}>
      <Svg.Line stroke={color} strokeWidth={width} strokeDasharray="5, 4" x1="0" y1="0" x2="0" y2={height} />
    </Svg.Svg>
  );
};

export default VerticalDashedLine;
