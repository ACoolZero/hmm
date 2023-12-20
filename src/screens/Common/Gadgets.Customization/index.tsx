import {Block, FormContainer, GradientButton, Header} from '@components';
import {useStore} from '@hooks';
import {IReaction} from '@screens/Bottom/Home/types';
import {GET_CUSTOMIZATION, UPDATE_CONFIG_MOOD} from '@store/actions';
import React, {useEffect} from 'react';
import {ChatColor, Language, Moods, More} from './components';

const Customization: React.FC = () => {
  const {dispatch, useSelector} = useStore();
  const {data: configMood} = useSelector('configMood');

  useEffect(() => {
    dispatch({type: GET_CUSTOMIZATION});
  }, [dispatch]);

  const _onSubmit = () => {
    dispatch({type: UPDATE_CONFIG_MOOD, payload: {moodIds: configMood.map((elm: IReaction) => elm.id)}});
  };

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
        <GradientButton title="Save" onPress={_onSubmit} />
      </Block>
    </Block>
  );
};

export default Customization;
