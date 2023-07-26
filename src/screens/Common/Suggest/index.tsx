import {Block} from '@components';
import React from 'react';
import {StatusBar} from 'react-native';
import Header from './components/Header';

const Suggest: React.FC = () => {
  return (
    <Block flex backgroundColor="background">
      <StatusBar backgroundColor="#FF575F" barStyle="dark-content" />
      <Header />
    </Block>
  );
};

export default Suggest;
