import React from 'react';
import {AirbnbRating, TapRatingProps} from 'react-native-ratings';

interface RatingProps extends TapRatingProps {
  value?: number;
  size?: number;
  isDisabled?: boolean;
}

const Rating: React.FC<RatingProps> = ({value = 0, size = 16, isDisabled = true, ...rest}) => {
  return (
    <AirbnbRating
      {...rest}
      size={size}
      isDisabled={isDisabled}
      showRating={false}
      defaultRating={value}
      selectedColor="#FFC53D"
      unSelectedColor="#9CA3AF"
    />
  );
};

export default Rating;
