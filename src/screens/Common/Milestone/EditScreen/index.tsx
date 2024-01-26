/* eslint-disable react-native/no-inline-styles */
import {ICONS} from '@assets';
import {Block, EmojiKeyboard, GradientButton, Image, Loading, Text, TextInput} from '@components';
import {handleHitSlop} from '@components/base/shared';
import {useColors, useStore} from '@hooks';
import {RootStackParamList} from '@navigation/types';
import {RouteProp} from '@react-navigation/native';
import {GET_MILESTONE_DETAILS, UPDATE_MILESTONE} from '@store/actions';
import {getSize, height} from '@utils/responsive';
import dayjs from 'dayjs';
import React, {useEffect, useState} from 'react';
import {Pressable, ScrollView, StatusBar, StyleSheet, TouchableOpacity} from 'react-native';
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

  const [mileStone, setMileStone] = useState({
    content: '',
    icon: '',
    location: '',
    milestoneTime: '',
  });

  const isValid = Object.values(mileStone).every(value => value !== '');
  const [isIconInputVisible, setIconInputVisibility] = useState<boolean>(false);

  const _renderIconCalendar = () => <Image source={ICONS.calender} square={24} tintColor={COLORS.light_text} />;

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
      <StatusBar backgroundColor="#FF974A" barStyle="dark-content" />
      <Header title="Edit Milestone" />
      {isLoading ? (
        <Block flex />
      ) : (
        <Block shadow style={styles.container}>
          <ScrollView bounces={false} style={{...styles.content, backgroundColor: COLORS.secondary_background}}>
            <Text marginBottom={16} type="semibold">
              Your milestone
            </Text>
            <TextInput
              inputStyle={{backgroundColor: COLORS.background, borderWidth: 0}}
              containerInputStyle={styles.containerInputStyle}
              color={COLORS.light_text}
              defaultValue={mileStone.content}
              onChangeText={content => setMileStone({...mileStone, content})}
            />
            <Text marginBottom={16} type="semibold">
              Icon
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
                <Image source={ICONS.edit} square={24} tintColor={COLORS.light_text} />
              </TouchableOpacity>
            </Block>
            <Text marginBottom={16} type="semibold">
              Time
            </Text>
            <Pressable onPress={_toggleDatePicker}>
              <TextInput
                pointerEvents="none"
                inputStyle={{backgroundColor: COLORS.background, borderWidth: 0}}
                containerInputStyle={styles.containerInputStyle}
                color={COLORS.light_text}
                rightIcon={_renderIconCalendar}
                defaultValue={dayjs(mileStone.milestoneTime).format('DD/MM/YYYY')}
              />
            </Pressable>
            <Text marginBottom={16} type="semibold">
              Location
            </Text>
            <TextInput
              inputStyle={{backgroundColor: COLORS.background, borderWidth: 0}}
              containerInputStyle={{...styles.containerInputStyle, marginBottom: getSize.m(48)}}
              color={COLORS.light_text}
              defaultValue={mileStone.location}
              onChangeText={location => setMileStone({...mileStone, location})}
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
          title="Save"
          onPress={() => {
            dispatch({type: UPDATE_MILESTONE, payload: {milestoneId, data: mileStone}});
          }}
        />
      </Block>
      <DateTimePickerModal
        date={new Date()}
        mode="date"
        display="inline"
        themeVariant="light"
        confirmTextIOS="Đồng ý"
        cancelTextIOS="Đóng"
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
});
