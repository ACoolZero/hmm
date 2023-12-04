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
            openCamera?.();
            setIsOpenBottom();
          }}>
          <Block radius={5} padding={12} marginBottom={12} backgroundColor="background">
            <Text>Chụp ảnh</Text>
          </Block>
        </Pressable>
        <Pressable
          onPress={() => {
            openPicker?.();
            setIsOpenBottom();
          }}>
          <Block radius={5} padding={12} backgroundColor="background">
            <Text>Chọn từ thư viện</Text>
          </Block>
        </Pressable>
      </Block>
    </BottomSheet>
  );
};

export default ImagePicker;
