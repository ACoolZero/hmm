import {ICONS} from '@assets';
import {Block, GradientButton, Header, Image, LazyImage, Loading, Text, TextInput} from '@components';
import {useColors, useMediaPicker, useStore} from '@hooks';
import {RootStackParamList} from '@navigation/types';
import {RouteProp} from '@react-navigation/native';
import {CREATE_MOMENT, UPLOAD_FILE} from '@store/actions';
import {getSize, height} from '@utils/responsive';
import React, {useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {AccessModeType} from '../types';
import styles, {ICON_HOLDER_SIZE, IMAGE_HEIGHT, IMAGE_WIDTH} from './styles';

interface CreateMomentProps {
  route: RouteProp<RootStackParamList, 'CREATE_MOMENT_SCREEN'>;
}

const CreateMoment: React.FC<CreateMomentProps> = ({route}) => {
  const {dispatch, useSelector} = useStore();
  const {isLoading: isCreate} = useSelector('createMoment');
  const {isLoading} = useSelector('uploadFile');
  const {milestoneId} = route.params || {};
  const {COLORS} = useColors();
  const [accessMode, setAccessMode] = useState<AccessModeType>('PUBLIC');
  const {picture, openPicker} = useMediaPicker({cropping: false});
  const [moment, setMoment] = useState({
    media: '',
    content: '',
    accessMode: accessMode,
  });
  const isValid = Object.values(moment).every(value => value !== '');

  useEffect(() => {
    if (picture) {
      const form = new FormData();
      form.append('file', {
        uri: (picture as any).path,
        name: (picture as any).path.split('/').pop(),
        type: (picture as any).mime,
      });
      dispatch({
        type: UPLOAD_FILE,
        payload: form,
        callback: (file: {filePath: string}) => {
          setMoment(oldValue => ({...oldValue, media: file.filePath}));
        },
      });
    }
  }, [dispatch, picture]);

  const _createMoment = () => {
    if (milestoneId) {
      dispatch({type: CREATE_MOMENT, payload: {moment: {...moment, milestoneId}}});
    } else {
      dispatch({type: CREATE_MOMENT, payload: {moment}});
    }
  };

  return (
    <Block flex backgroundColor={COLORS.secondary_background}>
      <Header canGoBack title="Create Moment" />
      <Block height={height - 250}>
        <TouchableOpacity onPress={openPicker}>
          <Block row alignCenter height={40} paddingHorizontal={12} backgroundColor="primary" space="between">
            <Text color="#D4EAF5">Choose a photo</Text>
            <Image source={ICONS.arrow_right} square={18} tintColor="#D4EAF5" />
          </Block>
        </TouchableOpacity>
        <Block flex shadow justifyCenter padding={16}>
          {(picture as any)?.path ? (
            <LazyImage
              source={(picture as any).path}
              width={IMAGE_WIDTH}
              height={IMAGE_HEIGHT}
              style={{borderRadius: getSize.s(24)}}
            />
          ) : (
            <TouchableOpacity onPress={openPicker}>
              <Block alignCenter justifyCenter>
                <Image source={ICONS.image_holder} square={ICON_HOLDER_SIZE} tintColor="#D1D5DB" />
              </Block>
            </TouchableOpacity>
          )}
        </Block>
      </Block>
      <Block height={230} absolute bottom={0} left={0} right={0} backgroundColor={COLORS.background}>
        <Block
          shadow
          safeBottom
          paddingHorizontal={12}
          paddingVertical={16}
          borderTopWidth={1}
          borderColor={COLORS.light_text}>
          <TextInput
            placeholder="How does this photo mean to you?"
            inputStyle={{backgroundColor: COLORS.secondary_background, borderColor: COLORS.background}}
            containerInputStyle={styles.containerInputStyle}
            maxLength={99}
            onChangeText={content => setMoment({...moment, content})}
          />
          <Block alignEnd marginTop={8}>
            <Text sm color={COLORS.light_text}>
              {moment.content.length}/99
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
                  borderColor={accessMode === 'PUBLIC' ? COLORS.primary : COLORS.light_text}>
                  <Block
                    round={10}
                    backgroundColor={accessMode === 'PUBLIC' ? COLORS.primary : COLORS.secondary_background}
                  />
                </Block>
                <Text sm type="medium">
                  Public
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
                  borderColor={accessMode === 'PRIVATE' ? COLORS.primary : COLORS.light_text}>
                  <Block
                    round={10}
                    backgroundColor={accessMode === 'PRIVATE' ? COLORS.primary : COLORS.secondary_background}
                  />
                </Block>
                <Text sm type="medium">
                  Private
                </Text>
              </Block>
            </TouchableOpacity>
          </Block>
          <GradientButton
            title="Save"
            isValid={isValid}
            disabled={isLoading}
            onPress={() => {
              _createMoment();
            }}
          />
        </Block>
        <Loading visible={isLoading || isCreate} />
      </Block>
    </Block>
  );
};

export default CreateMoment;
