import React from 'react';
import * as Svg from 'react-native-svg';

interface DashedLineProps {
  height: number;
  width: number;
  color: string;
  orientation: 'vertical' | 'horizontal';
}

const DashedLine: React.FC<DashedLineProps> = ({height, width, color, orientation}) => {
  if (orientation === 'vertical') {
    return (
      <Svg.Svg height={height} width={width}>
        <Svg.Line stroke={color} strokeWidth={width} strokeDasharray="5, 4" x1="0" y1="0" x2="0" y2={height} />
      </Svg.Svg>
    );
  }
  return (
    <Svg.Svg height={height} width={width}>
      <Svg.Line stroke={color} strokeWidth={width} strokeDasharray="5, 4" x1="0" y1="1" x2={width} y2={height} />
    </Svg.Svg>
  );
};

export default DashedLine;
