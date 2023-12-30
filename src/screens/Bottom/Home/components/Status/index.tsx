/* eslint-disable react-native/no-inline-styles */
import {ICONS} from '@assets';
import {Block, Image, Text, TextInput} from '@components';
import {handleHitSlop} from '@components/base/shared';
import {useColors} from '@hooks';
import useHome from '@screens/Bottom/Home/useHome';
import {UPDATE_STATUS, UPDATE_TAG} from '@store/actions';
import {getSize} from '@utils/responsive';
import React, {memo, useCallback, useEffect, useState} from 'react';
import {NativeSyntheticEvent, TextInputSubmitEditingEventData, TouchableOpacity} from 'react-native';

const StatusInputComponent: React.FC<any> = ({endEditing, setEndEditing}) => {
  const {dispatch} = useHome();
  const {COLORS} = useColors();

  const onSubmitEditing = useCallback(
    (e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => {
      if (e.nativeEvent.text) {
        setEndEditing(true);
        dispatch({type: UPDATE_STATUS, payload: {exactlyYouFeelText: e.nativeEvent.text}});
      }
    },
    [dispatch, setEndEditing],
  );

  return (
    <TextInput
      multiline
      disabled={endEditing}
      autoCapitalize="sentences"
      inputStyle={{
        flex: 1,
        backgroundColor: endEditing ? COLORS.background : COLORS.secondary_background,
        borderWidth: getSize.s(1),
        marginHorizontal: getSize.m(-3),
        borderRadius: getSize.s(12),
        borderColor: COLORS.border,
        marginVertical: getSize.m(12),
        height: getSize.s(100),
      }}
      height={100}
      color={COLORS.light_text}
      blurOnSubmit={true}
      returnKeyType="done"
      onSubmitEditing={onSubmitEditing}
    />
  );
};

const Status: React.FC = () => {
  const {COLORS} = useColors();
  const {userCurrentMood, tagsList, dispatch} = useHome();
  const [selectedTag, setSelectedTag] = useState<string[]>([]);
  const [endEditing, setEndEditing] = useState(false);

  const _renderTag: React.FC<any> = (item, index) => {
    const isSelected = selectedTag.includes(item);
    return (
      <TouchableOpacity
        key={index}
        onPress={() => {
          if (isSelected) {
            const temp = selectedTag.filter(i => i !== item);
            setSelectedTag(temp);
          } else {
            setSelectedTag(prevList => [...prevList, item]);
          }
        }}>
        <Block radius={8} paddingHorizontal={12} paddingVertical={8} backgroundColor="secondary_background">
          <Text color={isSelected ? '#FF9A0C' : COLORS.text}>{item}</Text>
        </Block>
      </TouchableOpacity>
    );
  };

  useEffect(() => {
    if (selectedTag.length) {
      dispatch({type: UPDATE_TAG, payload: {tagging: selectedTag.join(', ')}});
    }
  }, [dispatch, selectedTag]);

  if (!userCurrentMood) return null;
  return (
    <Block paddingHorizontal={16} marginBottom={24} backgroundColor="background">
      <Block row alignCenter paddingHorizontal={2} space="between">
        <Text type="semibold">How exactly you feel right now?</Text>
        {endEditing && (
          <TouchableOpacity
            hitSlop={handleHitSlop(5)}
            onPress={() => {
              setEndEditing(false);
            }}>
            <Image source={ICONS.edit} square={16} tintColor={COLORS.text} />
          </TouchableOpacity>
        )}
      </Block>
      <StatusInputComponent endEditing={endEditing} setEndEditing={setEndEditing} />
      <Block row wrap gap={12}>
        {tagsList?.map(_renderTag)}
      </Block>
    </Block>
  );
};

export default memo(Status);
