import {Block, Header} from '@components';
import React from 'react';

const EditProfile: React.FC = () => {
  return (
    <Block flex backgroundColor="background">
      <Header canGoBack title="Edit Profile" />
    </Block>
  );
};

export default EditProfile;
