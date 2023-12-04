import {Block, BottomSheet, Text} from '@components';
import React from 'react';
import {Pressable} from 'react-native';

interface ImagePickerProps {
  title?: string;
  isOpenBottom: boolean;
  setIsOpenBottom: any;
  openPicker?: () => void;
  openCamera?: () => void;
}

const ImagePicker: React.FC<ImagePickerProps> = ({title, isOpenBottom, setIsOpenBottom, openPicker, openCamera}) => {
  return (
    <BottomSheet title={title} useBottomSheet={[isOpenBottom, setIsOpenBottom]}>
      <Block>
        <Pressable
          onPress={() => {
            openCamera && openCamera();
            setIsOpenBottom();
          }}>
          <Block radius={5} padding={12} marginBottom={12} backgroundColor="gray_100">
            <Text color="common_text">Chụp ảnh</Text>
          </Block>
        </Pressable>
        <Pressable
          onPress={() => {
            openPicker && openPicker();
            setIsOpenBottom();
          }}>
          <Block radius={5} padding={12} backgroundColor="gray_100">
            <Text color="common_text">Chọn từ thư viện</Text>
          </Block>
        </Pressable>
      </Block>
    </BottomSheet>
  );
};

export default ImagePicker;
