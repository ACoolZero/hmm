import {Block, FormContainer, GradientButton, Header} from '@components';
import {goBack} from '@navigation/NavigationServices';
import React from 'react';
import {ChatColor, Language, Moods, More} from './components';

const Customization: React.FC = () => {
  return (
    <Block flex backgroundColor="background">
      <Header canGoBack title="Customization" />
      <FormContainer>
        <Block flex padding={16}>
          <Moods />
          <ChatColor />
          <Language />
          <More />
        </Block>
      </FormContainer>
      <Block
        safeBottom
        paddingTop={8}
        paddingHorizontal={16}
        borderTopWidth={1}
        borderColor="#87A8B9"
        backgroundColor="secondary_background">
        <GradientButton
          title="Save"
          onPress={() => {
            goBack();
          }}
        />
      </Block>
    </Block>
  );
};

export default Customization;
