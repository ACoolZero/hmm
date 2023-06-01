import {Block, Text} from '@components';
import {useStore, useTranslation} from '@hooks';
import React from 'react';

const Login = () => {
  const {t} = useTranslation();
  const {dispatch, useSelector} = useStore();

  return (
    <Block flex backgroundColor="primary">
      <Text />
    </Block>
  );
};

export default Login;
