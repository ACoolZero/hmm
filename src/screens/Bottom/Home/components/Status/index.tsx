/* eslint-disable react-native/no-inline-styles */
import {Block, Text, TextInput} from '@components';
import {useColors} from '@hooks';
import useHome from '@screens/Bottom/Home/useHome';
import {UPDATE_STATUS} from '@store/actions';
import {getSize} from '@utils/responsive';
import React, {memo, useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native';

const Status: React.FC = () => {
  const {COLORS} = useColors();
  const {userCurrentMood, tagsList, dispatch} = useHome();
  const [feeling, setFeeling] = useState<string>();

  const _renderTag: React.FC<{id: string; tag: string}> = item => {
    const {id, tag} = item;
    return (
      <TouchableOpacity key={id} onPress={() => {}}>
        <Block radius={12} paddingHorizontal={16} paddingVertical={12} backgroundColor="secondary_background">
          <Text sm>{tag}</Text>
        </Block>
      </TouchableOpacity>
    );
  };

  useEffect(() => {
    if (feeling) dispatch({type: UPDATE_STATUS, payload: {exactlyYouFeelText: feeling}});
  }, [dispatch, feeling]);

  if (!userCurrentMood) return null;
  return (
    <Block paddingHorizontal={16} marginBottom={24} backgroundColor="background">
      <Text type="semibold">How exactly you feel right now?</Text>
      <TextInput
        multiline
        disabled={!userCurrentMood}
        autoCapitalize="sentences"
        inputStyle={{
          flex: 1,
          backgroundColor: COLORS.secondary_background,
          borderWidth: getSize.s(1),
          marginHorizontal: getSize.m(-3),
          borderRadius: getSize.s(12),
          borderColor: COLORS.border,
          marginVertical: getSize.m(12),
          height: getSize.s(100),
        }}
        height={100}
        color={COLORS.light_text}
        onChangeText={e => setFeeling(e)}
      />
      <Block row wrap gap={12}>
        {tagsList?.map(_renderTag)}
      </Block>
    </Block>
  );
};

export default memo(Status);
