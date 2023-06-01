import {ICONS} from '@assets';
import {Block, Image, Text} from '@components';
import {Portal} from '@gorhom/portal';
import React, {useEffect, useRef} from 'react';
import {Keyboard, Pressable} from 'react-native';
import {Modalize} from 'react-native-modalize';
import styles from './styles';
import {BottomSheetProps} from './types';

const BottomSheet: React.FC<BottomSheetProps> = ({title, useBottomSheet, children, onCallback, ...rest}) => {
  const [isOpenBottom, setIsOpenBottom] = useBottomSheet;
  const modalizeRef = useRef<any>(null);

  useEffect(() => {
    if (isOpenBottom) {
      Keyboard.dismiss();
      modalizeRef.current?.open();
    } else {
      modalizeRef.current?.close();
    }
  }, [isOpenBottom]);

  const _closeBottomSheet = () => {
    setIsOpenBottom(false);
    onCallback && onCallback();
  };

  return (
    <Portal>
      <Modalize {...rest} ref={modalizeRef} onClose={_closeBottomSheet} adjustToContentHeight={true}>
        {title && (
          <Block justifyCenter height={50} paddingHorizontal={16} borderBottomWidth={0.5} borderColor="border">
            <Text center type="medium">
              {title}
            </Text>
            <Pressable onPress={_closeBottomSheet} style={styles.btnCloseBottomSheet}>
              <Block alignCenter justifyCenter round={20} backgroundColor="gray_400">
                <Image source={ICONS.close} square={8} tintColor="white" />
              </Block>
            </Pressable>
          </Block>
        )}
        <Block safeBottom paddingHorizontal={16} paddingTop={16}>
          {children}
        </Block>
      </Modalize>
    </Portal>
  );
};

export default BottomSheet;
