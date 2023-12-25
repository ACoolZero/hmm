/* eslint-disable react-native/no-inline-styles */
import {ICONS} from '@assets';
import {Block, GradientButton, Image, Loading, Text, TextInput} from '@components';
import {handleHitSlop} from '@components/base/shared';
import {useColors, useStore} from '@hooks';
import {getSize, height} from '@utils/responsive';
import dayjs from 'dayjs';
import React, {useRef, useState} from 'react';
import {Pressable, TextInput as RNTextInput, ScrollView, StatusBar, StyleSheet, TouchableOpacity} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import ConfirmDialog from '../components/ConfirmDialog';
import Header from '../components/Header';

const CreateScreen: React.FC = () => {
  const {useSelector} = useStore();
  const {isLoading} = useSelector('createMilestone');
  const {COLORS} = useColors();
  const [isDialogVisible, setDialogVisible] = useState<boolean>(false);
  const [isDatePickerVisible, setDatePickerVisibility] = useState<boolean>(false);
  const [mileStone, setMileStone] = useState({
    content: '',
    icon: '',
    location: '',
    milestoneTime: dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss.SSS'),
  });
  const isValid = Object.values(mileStone).every(value => value !== '');
  const iconInputRef = useRef<any>();

  const _renderIconCalendar = () => <Image source={ICONS.calender} square={24} tintColor={COLORS.light_text} />;

  const _toggleDatePicker = () => setDatePickerVisibility(!isDatePickerVisible);
  const _handleDateConfirm = (e: Date) => {
    setMileStone({...mileStone, milestoneTime: dayjs(e).format('YYYY-MM-DD HH:mm:ss.SSS')});
    _toggleDatePicker();
  };

  const _toggleIconInput = () => iconInputRef.current?.focus();

  return (
    <Block flex backgroundColor="background">
      <StatusBar backgroundColor="#FF974A" barStyle="dark-content" />
      <Header title="Create Milestone" />
      <Block shadow style={styles.container}>
        <ScrollView bounces={false} style={{...styles.content, backgroundColor: COLORS.secondary_background}}>
          <Text marginBottom={16} type="semibold">
            Your milestone
          </Text>
          <TextInput
            inputStyle={{backgroundColor: COLORS.background, borderWidth: 0}}
            containerInputStyle={styles.containerInputStyle}
            color={COLORS.light_text}
            onChangeText={content => setMileStone({...mileStone, content})}
          />
          <Text marginBottom={16} type="semibold">
            Icon
          </Text>
          <Block row alignCenter marginBottom={24}>
            <RNTextInput
              ref={iconInputRef}
              maxLength={2}
              onChangeText={icon => setMileStone({...mileStone, icon})}
              style={{opacity: 0, position: 'absolute'}}
            />
            <Block
              alignCenter
              justifyCenter
              radius={8}
              backgroundColor={COLORS.background}
              square={86}
              marginRight={24}
              marginLeft={-3}>
              <Text size={36}>{mileStone.icon}</Text>
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
              value={dayjs(mileStone.milestoneTime).format('DD-MM-YYYY')}
            />
          </Pressable>
          <Text marginBottom={16} type="semibold">
            Location
          </Text>
          <TextInput
            inputStyle={{backgroundColor: COLORS.background, borderWidth: 0}}
            containerInputStyle={{...styles.containerInputStyle, marginBottom: getSize.m(48)}}
            color={COLORS.light_text}
            onChangeText={location => setMileStone({...mileStone, location})}
          />
        </ScrollView>
      </Block>
      <Block
        safeBottom
        paddingTop={8}
        paddingHorizontal={16}
        borderTopWidth={1}
        borderColor="#87A8B9"
        backgroundColor="secondary_background">
        <GradientButton isValid={isValid} title="Save" onPress={() => setDialogVisible(true)} />
      </Block>
      <ConfirmDialog useDialog={[isDialogVisible, setDialogVisible]} mileStone={mileStone} />
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
      <Loading visible={isLoading} />
    </Block>
  );
};

export default CreateScreen;

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
