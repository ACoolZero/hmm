import {ICONS} from '@assets';
import {Block, Image, LazyImage, Text} from '@components';
import {showMessage} from '@components/common/ToastMessage';
import {useColors, useMediaPicker, useStore, useTranslation} from '@hooks';
import {LOCALE} from '@utils/helper';
import {getSize, width} from '@utils/responsive';
import React, { useEffect, useState } from 'react';
import {Keyboard, LayoutAnimation, Pressable, TouchableOpacity} from 'react-native';
import {
  Avatar,
  AvatarProps,
  Bubble,
  BubbleProps,
  Composer,
  ComposerProps,
  InputToolbar,
  InputToolbarProps,
  Message,
  MessageImageProps,
  MessageProps,
  MessageTextProps,
  GiftedChat as RNGiftedChat,
  SendProps,
} from 'react-native-gifted-chat';
import {UIActivityIndicator} from 'react-native-indicators';
import styles from './styles';
import { AppConfig } from '@utils/constants';

LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);

const GiftedChat: React.FC<any> = ({userId, chatColor, messages, ...rest}) => {
  const {t} = useTranslation();
  const {useSelector} = useStore();
  const {openCamera, openMultiPicker} = useMediaPicker({cropping: false});
  const {COLORS} = useColors();
  const {locale} = useSelector('general');
  const {isTyping} = useSelector('messages');

  if (__DEV__ && AppConfig.DEBUG_LOGGING_ENABLED) {
    console.debug("messages in GiftedChat", messages);
  }
  
  /**
   * Custom message bubble
   */
  const _renderBubble = (props: BubbleProps<any>) => {
    if (__DEV__ && AppConfig.DEBUG_LOGGING_ENABLED) {
      console.debug("_renderBubble");
    }
    
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          left: {
            ...styles.wrapperStyle,
            backgroundColor: COLORS.secondary_background,
          },
          right: {
            ...styles.wrapperStyle,
            backgroundColor: chatColor,
          },
        }}
      />
    );
  };

  /**
   * Custom message container
   */
  // const _renderMessage = (props: MessageProps<any>) => {<Message {...props} />;

  const _renderMessage = (props: MessageProps<any>) => {
    if (__DEV__ && AppConfig.DEBUG_LOGGING_ENABLED) {
      console.debug("_renderMessage (current): ", props.currentMessage);
    }
    return <Message {...props} />;
  };

  /**
   * Custom message text
   */
  const _renderMessageText = (props: MessageTextProps<any>) => {
    const {
      currentMessage: {text},
      position,
    } = props;
    if (__DEV__ && AppConfig.DEBUG_LOGGING_ENABLED) {
      console.debug("_renderMessageText: ", text);
    }
    return (
      <Pressable onPress={() => {}} onLongPress={() => {}}>
        <Block marginHorizontal={10} marginVertical={5}>
          <Text color={position === 'left' ? 'text' : '#213138'}>{text}</Text>
        </Block>
      </Pressable>
    );
  };

  /**
   * Custom message image
   */
  const _renderMessageImage = (props: MessageImageProps<any>) => {
    const {image} = props.currentMessage;
    return (
      <Pressable onPress={() => {}} onLongPress={() => {}}>
        <LazyImage source={image} width={width * 0.5} style={styles.messageImageStyle} />
      </Pressable>
    );
  };

  /**
   * Custom time inside a message
   */
  const _renderTime = () => <Block />;


  const [toolbarPadding, setToolbarPadding] = useState(60); // Default padding

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', _keyboardDidShow);
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', _keyboardDidHide);

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);
  
  const _keyboardDidShow = () => {
    setToolbarPadding(15); // Reduce padding when keyboard is shown
  };

  const _keyboardDidHide = () => {
    setToolbarPadding(60); // Reset padding when keyboard is hidden
  };
  
  /**
   * Custom message composer container
   */
  const _renderInputToolbar = (props: InputToolbarProps<any>) => (
    <InputToolbar
      {...props}
      containerStyle={{
        backgroundColor: COLORS.secondary_background,
        // paddingBottom: getSize.m(30),
        paddingBottom: toolbarPadding,
      }}
      primaryStyle={{...styles.inputToolbarStyle, backgroundColor: COLORS.secondary_background}}
    />
  );


  /**
   * Custom text input message composer
   */
  const _renderComposer = (props: ComposerProps) => (
    <Composer
      {...props}
      textInputStyle={{...styles.textInputStyle, color: COLORS.text, backgroundColor: COLORS.background}}
      textInputProps={{allowFontScaling: false}}
    />
  );

  /**
   * Custom action button on the left of the message composer
   */
  const _renderActions = () => <Block />;

  /**
   * Callback when the Action button is pressed
   */
  const _onPressActionButton = () => {};

  /**
   * Custom send button
   */
  const _renderSend = (props: SendProps<any>) =>
    props.text ? (
      <Pressable
        onPress={() => props.text?.trim().length && props.onSend?.({text: props.text.trim()}, true)}
        disabled={isTyping}>
        <Block opacity={isTyping ? 0.3 : 1} alignCenter justifyCenter square={48} marginHorizontal={10}>
          <Image source={ICONS.send} square={26} />
        </Block>
      </Pressable>
    ) : (
      <Block row alignCenter paddingHorizontal={6} opacity={0.3}>
        <TouchableOpacity
          onPress={() => {
            showMessage({type: 'info', message: 'Chức năng đang phát triển'});
          }}>
          <Block alignCenter justifyCenter square={48}>
            <Image source={ICONS.voice} square={26} resizeMode="contain" />
          </Block>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            showMessage({type: 'info', message: 'Chức năng đang phát triển'});
          }}>
          <Block alignCenter justifyCenter square={48}>
            <Image source={ICONS.camera} square={26} resizeMode="contain" />
          </Block>
        </TouchableOpacity>
        <Pressable
          onPress={() => {
            showMessage({type: 'info', message: 'Chức năng đang phát triển'});
          }}>
          <Block alignCenter justifyCenter square={48}>
            <Image source={ICONS.image} square={26} resizeMode="contain" />
          </Block>
        </Pressable>
      </Block>
    );

  /**
   * Custom Scroll To Bottom Component container
   */
  const _scrollToBottomComponent = () => <Image source={ICONS.arrow_down} square={20} tintColor="gray_700" />;

  /**
   * Custom "Load earlier messages" button
   */
  const _renderLoadEarlier = () => (
    <Block marginTop={10}>
      <UIActivityIndicator size={getSize.s(20)} color={COLORS.gray_300} />
    </Block>
  );

  /**
   * Custom message avatar; set to null to not render any avatar for the message
   */
  const _renderAvatar = (props: AvatarProps<any>) => (
    <Avatar
      {...props}
      imageStyle={{left: {height: getSize.s(32), width: getSize.s(32)}}}
      containerStyle={{left: {marginRight: 0}}}
    />
  );

  return (
    <RNGiftedChat
      {...rest}
      messages={messages}
      infiniteScroll
      alwaysShowSend
      scrollToBottom
      locale={LOCALE[locale as keyof typeof LOCALE].name}
      user={{_id: userId}}
      placeholder={t('conversation.send_input_holder')}
      renderBubble={_renderBubble}
      renderMessage={_renderMessage}
      renderMessageText={_renderMessageText}
      renderMessageImage={_renderMessageImage}
      renderTime={_renderTime}
      renderInputToolbar={_renderInputToolbar}
      renderComposer={_renderComposer}
      renderActions={_renderActions}
      onPressActionButton={_onPressActionButton}
      renderSend={_renderSend}
      scrollToBottomComponent={_scrollToBottomComponent}
      listViewProps={{marginBottom: getSize.m(10)}} //{{marginBottom: isIos ? getSize.m(50) : getSize.m(70)}}
      renderLoadEarlier={_renderLoadEarlier}
      renderAvatar={_renderAvatar}
      lightboxProps={{underlayColor: COLORS.blue_100}}
      keyboardShouldPersistTaps="handled"
      // bottomOffset={getSize.m(24)}
      onLongPress={() => {}}
      shouldUpdateMessage={() => false}
    />
  );
};

export default GiftedChat;
