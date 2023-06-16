import {IMAGES} from '@assets';
import {Block, GradientText, Image} from '@components';
import {width} from '@utils/responsive';
import React from 'react';

const LOGO_SIZE = width * 0.18;

const Header: React.FC<{content: String}> = ({content}) => {
  return (
    <Block>
      <Image source={IMAGES.logo} square={LOGO_SIZE} />
      <GradientText xl marginTop={12} type="bold">
        {content}
      </GradientText>
    </Block>
  );
};

export default Header;
