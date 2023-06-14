import {Block} from '@components';
import {getSize} from '@utils/responsive';
import React from 'react';
import {UIActivityIndicator} from 'react-native-indicators';
import {LoadMoreProps} from './types';

const LoadMore: React.FC<LoadMoreProps> = ({size = 20, color = '#93C5FD'}) => {
  return (
    <Block marginVertical={20}>
      <UIActivityIndicator size={getSize.s(size)} color={color} />
    </Block>
  );
};

export default LoadMore;
