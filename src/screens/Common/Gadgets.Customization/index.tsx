import {Block, Header} from '@components';
import React from 'react';

const Customization: React.FC = () => {
  return (
    <Block flex backgroundColor="background">
      <Header canGoBack title="Customization" />
    </Block>
  );
};

export default Customization;
