import {Block, Header} from '@components';
import {HeaderProps} from '@components/common/Header';
import {useColors} from '@hooks';
import {getSize} from '@utils/responsive';
import React from 'react';
import {UIActivityIndicator} from 'react-native-indicators';

interface CustomHeader extends HeaderProps {
  isLoading: boolean;
}

const CustomHeader: React.FC<CustomHeader> = ({isLoading, ...rest}) => {
  const {COLORS} = useColors();

  return (
    <Block>
      <Header {...rest} />
      <Block square={50} absolute right={0} bottom={0}>
        {isLoading && <UIActivityIndicator size={getSize.s(18)} color={COLORS.text} />}
      </Block>
    </Block>
  );
};

export default CustomHeader;
