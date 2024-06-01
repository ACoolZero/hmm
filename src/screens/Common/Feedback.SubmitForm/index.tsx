/* eslint-disable react-native/no-inline-styles */
import {ICONS} from '@assets';
import {Block, FormContainer, GradientButton, Header, Image, LazyImage, Loading, Text, TextInput} from '@components';
import {useColors, useMediaPicker, useStore, useTranslation} from '@hooks';
import {SEND_FEEDBACK, UPLOAD_FILE} from '@store/actions';
import {getSize, width} from '@utils/responsive';
import React, {useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import styles from './styles';

const FeedbackSubmitForm: React.FC = () => {
  const {dispatch, useSelector} = useStore();
  const {isLoading: isUploading} = useSelector('uploadFile');
  const {isLoading: isSending} = useSelector('feedback');
  const {COLORS} = useColors();
  const {picture, openPicker} = useMediaPicker({cropping: false});
  const [feedback, setFeedback] = useState({content: '', attachment: ''});
  const {t} = useTranslation();

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
          setFeedback(oldValue => ({...oldValue, attachment: file.filePath}));
        },
      });
    }
  }, [dispatch, picture]);

  const _onSubmit = () => dispatch({type: SEND_FEEDBACK, payload: feedback});

  return (
    <Block flex backgroundColor="background">
      <Header canGoBack title={t('gadgets.FAQ/Feedback.feedback.label')} />
      <FormContainer>
        <Block radius={24} margin={16} paddingHorizontal={16} paddingTop={24} backgroundColor="secondary_background">
          <Text md type="semibold">
            {t('gadgets.FAQ/Feedback.feedback.prompt')}
          </Text>
          <TextInput
            multiline
            inputStyle={{...styles.multilineInputStyle, backgroundColor: COLORS.background}}
            height={120}
            style={{
              flex: 1,
              height: getSize.s(120),
              fontSize: getSize.m(16),
              color: COLORS.sub_text,
              textAlignVertical: 'top',
              fontWeight: '600',
            }}
            onChangeText={(content: string) => setFeedback(oldValue => ({...oldValue, content}))}
          />
          <Block row alignCenter marginBottom={24}>
            <Block alignCenter justifyCenter round={20} borderWidth={2} marginRight={8} borderColor="primary">
              <Block round={10} backgroundColor="primary" />
            </Block>
            <Text sm color="sub_text">
              {t('gadgets.FAQ/Feedback.feedback.logs')}
            </Text>
          </Block>
          <TouchableOpacity onPress={openPicker}>
            <Block row alignCenter justifyCenter borderColor={COLORS.sub_text} style={styles.btnAddScreenshot}>
              <Block alignCenter justifyCenter round={32} marginRight={8} backgroundColor={COLORS.card_background_one}>
                <Image source={ICONS.camera} square={18} tintColor={COLORS.sub_text} resizeMode="contain" />
              </Block>
              <Text sm color="sub_text">
                {t('gadgets.FAQ/Feedback.feedback.add_screenshots')}
              </Text>
            </Block>
          </TouchableOpacity>
          <Block padding={24} overflow="hidden">
            {(picture as any)?.path && <LazyImage source={(picture as any).path} square={width * 0.3} />}
          </Block>
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
          isValid={!!feedback.content}
          disabled={isUploading}
          title={t('gadgets.FAQ/Feedback.feedback.submit')}
          onPress={_onSubmit}
        />
      </Block>
      <Loading visible={isUploading || isSending} />
    </Block>
  );
};

export default FeedbackSubmitForm;
