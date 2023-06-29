import Block from '@components/base/Block';
import React from 'react';
import {Rect, Svg} from 'react-native-svg';

interface ProgressCircleProps {
  percentage: number;
  size: number;
  color: string;
  radius?: number;
  strokeWidth?: number;
  backgroundColor?: string;
  children?: React.ReactNode;
}

const ProgressCircle: React.FC<ProgressCircleProps> = ({
  percentage,
  size,
  color,
  strokeWidth = 3,
  radius = 1,
  backgroundColor = 'transparent',
  children,
}) => {
  const circumference = size * 4;
  if (percentage < 0) percentage = 0;
  if (percentage > 100) percentage = 100;
  const filledPercentage = percentage / 100;
  const dashOffset = circumference * (1 - filledPercentage) + radius;
  const contentSize = size - strokeWidth * 2;

  return (
    <Block>
      <Block style={{transform: [{rotate: '-90deg'}]}} alignSelf="flex-start">
        <Svg width={size} height={size}>
          <Rect
            rx={radius}
            ry={radius}
            x={strokeWidth * 0.5}
            y={strokeWidth * 0.5}
            width={contentSize}
            height={contentSize}
            stroke={color}
            strokeWidth={strokeWidth}
            fill={backgroundColor}
            strokeDasharray={circumference}
            strokeDashoffset={dashOffset}
          />
        </Svg>
      </Block>
      <Block square={contentSize} absolute top={strokeWidth} left={strokeWidth * 0.5}>
        {children}
      </Block>
    </Block>
  );
};

export default ProgressCircle;
