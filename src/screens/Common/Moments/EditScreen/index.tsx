import {Block, GradientButton, Header, LazyImage, Text, TextInput} from '@components';
import {useColors, useStore, useTranslation} from '@hooks';
import {RootStackParamList} from '@navigation/types';
import {RouteProp} from '@react-navigation/native';
import {EDIT_MOMENT, GET_MOMENT_DETAILS} from '@store/actions';
import {getSize, width} from '@utils/responsive';
import React, {useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {AccessModeType} from '../types';
import styles from './styles';

interface EditScreenProps {
  route: RouteProp<RootStackParamList, 'EDIT_MOMENT_SCREEN'>;
}

const EditScreen: React.FC<EditScreenProps> = ({route}) => {
  const {dispatch, useSelector} = useStore();
  const {momentId} = route.params;
  const {data} = useSelector('momentDetails');
  const {COLORS} = useColors();
  const [accessMode, setAccessMode] = useState<AccessModeType>('PUBLIC');
  const [moment, setMoment] = useState({
    media: data?.media,
    content: data?.content,
    accessMode: accessMode,
  });
  const {t} = useTranslation();
  const isValid = Object.values(moment).every(value => value !== '');

  useEffect(() => {
    dispatch({
      type: GET_MOMENT_DETAILS,
      payload: {momentId},
      callback: (e: any) => {
        setMoment({
          media: e.media,
          content: e.content,
          accessMode: 'PUBLIC',
        });
      },
    });
  }, [dispatch, momentId]);

  const _handleUpdate = () => {
    dispatch({type: EDIT_MOMENT, payload: {momentId, moment}});
  };

  return (
    <Block flex backgroundColor={COLORS.secondary_background}>
      <Header canGoBack title={t('moment.edit.header')} />
      <Block flex shadow justifyCenter padding={16}>
        <LazyImage source={data?.media} square={width * 0.8} style={{borderRadius: getSize.s(24)}} />
      </Block>
      <Block
        shadow
        safeBottom
        paddingHorizontal={12}
        paddingVertical={16}
        backgroundColor={COLORS.background}
        borderTopWidth={1}
        borderColor={COLORS.sub_text}>
        <TextInput
          placeholder={t('moment.input_placeholder')}
          inputStyle={{backgroundColor: COLORS.secondary_background, borderColor: COLORS.background}}
          containerInputStyle={styles.containerInputStyle}
          maxLength={99}
          onChangeText={content => setMoment({...moment, content})}
          defaultValue={data?.content}
        />
        <Block alignEnd marginTop={8}>
          <Text sm color={COLORS.sub_text}>
            {moment?.content?.length}/99
          </Text>
        </Block>
        <Block row alignCenter marginTop={6} marginBottom={24} paddingHorizontal={5}>
          <TouchableOpacity
            onPress={() => {
              setAccessMode('PUBLIC');
              setMoment({...moment, accessMode: 'PUBLIC'});
            }}>
            <Block row alignCenter marginRight={32}>
              <Block
                alignCenter
                justifyCenter
                round={20}
                marginRight={10}
                borderWidth={2}
                borderColor={accessMode === 'PUBLIC' ? COLORS.primary : COLORS.sub_text}>
                <Block
                  round={10}
                  backgroundColor={accessMode === 'PUBLIC' ? COLORS.primary : COLORS.secondary_background}
                />
              </Block>
              <Text sm type="medium">
                {t('moment.public')}
              </Text>
            </Block>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setAccessMode('PRIVATE');
              setMoment({...moment, accessMode: 'PRIVATE'});
            }}>
            <Block row alignCenter>
              <Block
                alignCenter
                justifyCenter
                round={20}
                marginRight={10}
                borderWidth={2}
                borderColor={accessMode === 'PRIVATE' ? COLORS.primary : COLORS.sub_text}>
                <Block
                  round={10}
                  backgroundColor={accessMode === 'PRIVATE' ? COLORS.primary : COLORS.secondary_background}
                />
              </Block>
              <Text sm type="medium">
                {t('moment.private')}
              </Text>
            </Block>
          </TouchableOpacity>
        </Block>
        <GradientButton title={t('button.save')} isValid={isValid} onPress={_handleUpdate} />
      </Block>
    </Block>
  );
};

export default EditScreen;
