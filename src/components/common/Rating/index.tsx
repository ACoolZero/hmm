import React from 'react';
import {AirbnbRating, TapRatingProps} from 'react-native-ratings';

interface RatingProps extends TapRatingProps {
  value: number;
  size?: number;
}

const Rating: React.FC<RatingProps> = ({value, size = 16, ...rest}) => {
  return (
    <AirbnbRating
      {...rest}
      size={size}
      isDisabled
      showRating={false}
      defaultRating={value}
      selectedColor="#FFC53D"
      unSelectedColor="#9CA3AF"
    />
  );
};

export default Rating;
