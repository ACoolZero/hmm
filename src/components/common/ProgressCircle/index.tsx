import {Block} from '@components';
import {useColors} from '@hooks';
import {isIos} from '@utils/helper';
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
  if (percentage < 0) percentage = 0;
  if (percentage > 100) percentage = 100;
  const circumference = isIos ? 4 * (size - radius) : 4 * size - 2 * radius;
  const filledPercentage = percentage / 100;
  const dashOffset = circumference * (1 - filledPercentage);
  const contentSize = size - strokeWidth * 2;
  const {COLORS} = useColors();

  return (
    <Block>
      <Svg
        width={size}
        height={size}
        style={{transform: [{rotate: isIos ? '-90deg' : '90deg'}]}}
        stroke={color}
        strokeWidth={strokeWidth}>
        <Rect
          rx={isIos ? radius : 0.01}
          ry={isIos ? radius : size}
          x={strokeWidth}
          y={strokeWidth}
          width={contentSize}
          height={contentSize}
          stroke={color || COLORS.border}
          strokeWidth={strokeWidth}
          fill={backgroundColor}
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
          strokeLinecap="round"
        />
      </Svg>
      <Block square={contentSize} absolute top={strokeWidth} left={strokeWidth}>
        {children}
      </Block>
    </Block>
  );
};

export default ProgressCircle;
