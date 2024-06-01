/* eslint-disable react-native/no-inline-styles */
import {ICONS} from '@assets';
import {Block, EmojiKeyboard, GradientButton, Image, Loading, Text, TextInput} from '@components';
import {handleHitSlop} from '@components/base/shared';
import {useColors, useStore, useTranslation} from '@hooks';
import {RootStackParamList} from '@navigation/types';
import {RouteProp} from '@react-navigation/native';
import {GET_MILESTONE_DETAILS, UPDATE_MILESTONE} from '@store/actions';
import {sleep} from '@utils/date';
import {isIos} from '@utils/helper';
import {getSize, height} from '@utils/responsive';
import dayjs from 'dayjs';
import React, {createRef, useEffect, useState} from 'react';
import {KeyboardAvoidingView, Pressable, ScrollView, StatusBar, StyleSheet, TouchableOpacity} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Header from '../components/Header';

interface EditScreenProps {
  route: RouteProp<RootStackParamList, 'EDIT_MILESTONE_SCREEN'>;
}

const EditScreen: React.FC<EditScreenProps> = ({route}) => {
  const {dispatch, useSelector} = useStore();
  const {milestoneId} = route.params;
  const {COLORS} = useColors();
  const [isDatePickerVisible, setDatePickerVisibility] = useState<boolean>(false);
  const {data: milestoneDetails, isLoading} = useSelector('milestoneDetails');
  const {isLoading: isUpdating} = useSelector('updateMilestone');
  const {t} = useTranslation();
  const scrollViewRef = createRef<ScrollView>();

  const [mileStone, setMileStone] = useState({
    title: '',
    icon: '',
    location: '',
    story: '',
    milestoneTime: '',
  });

  const isValid = Object.values(mileStone).every(value => value !== '');
  const [isIconInputVisible, setIconInputVisibility] = useState<boolean>(false);

  const _renderIconCalendar = () => <Image source={ICONS.calender} square={24} tintColor={COLORS.sub_text} />;

  const _toggleDatePicker = () => setDatePickerVisibility(!isDatePickerVisible);
  const _handleDateConfirm = (e: Date) => {
    setMileStone({...mileStone, milestoneTime: dayjs(e).format('YYYY-MM-DD HH:mm:ss.SSS')});
    _toggleDatePicker();
  };

  const _toggleIconInput = () => setIconInputVisibility(!isIconInputVisible);

  useEffect(() => {
    dispatch({type: GET_MILESTONE_DETAILS, payload: {milestoneId}});
  }, [dispatch, milestoneId]);

  useEffect(() => {
    if (milestoneDetails) setMileStone(milestoneDetails);
  }, [milestoneDetails]);

  return (
    <Block flex backgroundColor="background">
      <StatusBar backgroundColor={COLORS.milestone_header} />
      <Header title={t('milestone.edit.header')} />
      <KeyboardAvoidingView style={{flex: 1}} behavior={isIos ? 'padding' : 'height'}>
        {isLoading ? (
          <Block flex />
        ) : (
          <Block shadow style={styles.container}>
            <ScrollView
              ref={scrollViewRef}
              bounces={false}
              showsVerticalScrollIndicator={false}
              style={{...styles.content, backgroundColor: COLORS.secondary_background}}>
              <Text marginBottom={16} type="semibold">
                {t('milestone.your_milestone')}
              </Text>
              <TextInput
                inputStyle={{backgroundColor: COLORS.background, borderWidth: 0}}
                containerInputStyle={styles.containerInputStyle}
                color={COLORS.sub_text}
                defaultValue={mileStone.title}
                onFocus={() => scrollViewRef.current?.scrollTo({y: 0, animated: true})}
                onChangeText={title => setMileStone({...mileStone, title})}
              />
              <Text marginBottom={16} type="semibold">
                {t('milestone.icon')}
              </Text>
              <Block row alignCenter marginBottom={24}>
                <EmojiKeyboard
                  open={isIconInputVisible}
                  onClose={_toggleIconInput}
                  onEmojiSelected={metadata => {
                    const icon: string = metadata.emoji;
                    setMileStone({...mileStone, icon});
                  }}
                />
                <Block
                  alignCenter
                  justifyCenter
                  radius={8}
                  backgroundColor={COLORS.background}
                  square={86}
                  marginRight={24}
                  marginLeft={-3}>
                  <Text size={36}>{mileStone?.icon}</Text>
                </Block>
                <TouchableOpacity hitSlop={handleHitSlop(5)} onPress={_toggleIconInput}>
                  <Image source={ICONS.edit} square={24} tintColor={COLORS.sub_text} />
                </TouchableOpacity>
              </Block>
              <Text marginBottom={16} type="semibold">
                {t('milestone.time')}
              </Text>
              <Pressable onPress={_toggleDatePicker}>
                <TextInput
                  pointerEvents="none"
                  inputStyle={{backgroundColor: COLORS.background, borderWidth: 0}}
                  containerInputStyle={styles.containerInputStyle}
                  color={COLORS.sub_text}
                  rightIcon={_renderIconCalendar}
                  defaultValue={dayjs(mileStone.milestoneTime).format('DD/MM/YYYY')}
                />
              </Pressable>
              <Text marginBottom={16} type="semibold">
                {t('milestone.location')}
              </Text>
              <TextInput
                inputStyle={{backgroundColor: COLORS.background, borderWidth: 0}}
                containerInputStyle={{...styles.containerInputStyle}}
                color={COLORS.sub_text}
                defaultValue={mileStone.location}
                onFocus={() =>
                  sleep(100).then(() => scrollViewRef.current?.scrollTo({y: getSize.m(300), animated: true}))
                }
                onChangeText={location => setMileStone({...mileStone, location})}
              />
              <Text marginBottom={16} type="semibold">
                {t('milestone.your_story')}
              </Text>
              <TextInput
                multiline
                inputStyle={{...styles.multilineInputStyle, backgroundColor: COLORS.background, borderWidth: 0}}
                containerInputStyle={{marginBottom: getSize.m(48)}}
                style={{
                  flex: 1,
                  height: getSize.s(140),
                  fontSize: getSize.m(16),
                  fontWeight: '600',
                  textAlignVertical: 'top',
                  color: COLORS.sub_text,
                }}
                defaultValue={mileStone.story}
                onFocus={() => sleep(100).then(() => scrollViewRef.current?.scrollToEnd({animated: true}))}
                onChangeText={story => setMileStone({...mileStone, story})}
              />
            </ScrollView>
          </Block>
        )}
        <Block
          safeBottom
          paddingTop={8}
          paddingHorizontal={16}
          borderTopWidth={1}
          borderColor="#87A8B9"
          backgroundColor="secondary_background">
          <GradientButton
            isValid={isValid}
            disabled={isLoading}
            title={t('button.save')}
            onPress={() => {
              dispatch({type: UPDATE_MILESTONE, payload: {milestoneId, data: mileStone}});
            }}
          />
        </Block>
      </KeyboardAvoidingView>
      <DateTimePickerModal
        date={new Date()}
        mode="date"
        display="inline"
        themeVariant="light"
        confirmTextIOS={t('button.confirm')}
        cancelTextIOS={t('button.close')}
        isDarkModeEnabled={false}
        isVisible={isDatePickerVisible}
        onConfirm={_handleDateConfirm}
        onCancel={_toggleDatePicker}
      />
      <Loading visible={isLoading || isUpdating} />
    </Block>
  );
};

export default EditScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: -height * 0.15,
    paddingHorizontal: getSize.m(16),
    marginBottom: getSize.m(16),
  },
  content: {
    borderRadius: getSize.s(24),
    paddingHorizontal: getSize.m(16),
    paddingTop: getSize.m(24),
    flexGrow: 0,
  },
  containerInputStyle: {
    paddingHorizontal: 0,
    marginBottom: getSize.m(24),
  },
  multilineInputStyle: {
    alignItems: isIos ? 'flex-start' : 'center',
    height: isIos ? getSize.s(160) : getSize.s(150),
    paddingTop: isIos ? getSize.m(10) : 0,
  },
});
