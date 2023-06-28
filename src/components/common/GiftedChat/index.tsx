import {ICONS} from '@assets';
import {Block, Image, LazyImage, Text} from '@components';
import {useColors, useStore, useTranslation} from '@hooks';
import {LOCALE, isIos} from '@utils/helper';
import {getSize, width} from '@utils/responsive';
import dayjs from 'dayjs';
import React from 'react';
import {LayoutAnimation, Pressable} from 'react-native';
import {
  Bubble,
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
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styles from './styles';

LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

const GiftedChat: React.FC<any> = ({userId, openBottomMenu, ...rest}) => {
  const {t} = useTranslation();
  const {useSelector} = useStore();
  const {COLORS} = useColors();
  const {bottom} = useSafeAreaInsets();
  const {locale} = useSelector('general');

  /**
   * Custom message bubble
   */
  const _renderBubble = (props: Bubble) => (
    <Bubble
      {...props}
      wrapperStyle={{
        left: styles.wrapperStyle(props),
        right: styles.wrapperStyle(props),
      }}
    />
  );

  /**
   * Custom message container
   */
  const _renderMessage = (props: MessageProps<any>) => (
    <Block>
      <Message {...props} />
      {props.currentMessage.hasTimestamp && (
        <Text style={styles.timeTextStyle(props.position)}>
          {dayjs(props.currentMessage.createdAt).format('HH:mm')}
        </Text>
      )}
    </Block>
  );

  /**
   * Custom message text
   */
  const _renderMessageText = (props: MessageTextProps<any>) => {
    const {action, text} = props.currentMessage;
    return (
      <Pressable onPress={() => {}} onLongPress={() => action !== 'REMOVED' && openBottomMenu(props.currentMessage)}>
        {action === 'REMOVED' ? (
          <Text marginHorizontal={10} marginVertical={5} color="gray_400">
            {t('conversation.recall_message')}
          </Text>
        ) : (
          <Block marginHorizontal={10} marginVertical={5}>
            <Text color="white">{text}</Text>
            {action === 'UPDATED' && (
              <Block row alignCenter marginTop={3}>
                <Image source={ICONS.edit} square={8} tintColor="white" />
                <Text size={9} marginLeft={3} color="white">
                  Edited
                </Text>
              </Block>
            )}
          </Block>
        )}
      </Pressable>
    );
  };

  /**
   * Custom message image
   */
  const _renderMessageImage = (props: MessageImageProps<any>) => {
    const {action, image} = props.currentMessage;
    return (
      <Pressable onPress={() => {}} onLongPress={() => action !== 'REMOVED' && openBottomMenu(props.currentMessage)}>
        {action === 'REMOVED' ? (
          <Text marginHorizontal={13} marginVertical={5} color="gray_400">
            {t('conversation.recall_message')}
          </Text>
        ) : (
          <LazyImage scalable source={image} width={width * 0.5} style={styles.messageImageStyle} />
        )}
      </Pressable>
    );
  };

  /**
   * Custom time inside a message
   */
  const _renderTime = () => <Block />;

  /**
   * Custom message composer container
   */
  const _renderInputToolbar = (props: InputToolbarProps<any>) => (
    <InputToolbar
      {...props}
      containerStyle={{backgroundColor: COLORS.light_background, paddingBottom: 30}}
      primaryStyle={{...styles.inputToolbarStyle, backgroundColor: COLORS.light_background}}
    />
  );

  /**
   * Custom text input message composer
   */
  const _renderComposer = (props: ComposerProps) => (
    <Block flex radius={32} paddingHorizontal={5} backgroundColor="background">
      <Composer
        {...props}
        textInputStyle={{...styles.textInputStyle, color: COLORS.text}}
        textInputProps={{allowFontScaling: false}}
      />
    </Block>
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
  const _renderSend = (props: SendProps<any>) => (
    <Pressable onPress={() => props.text.trim().length && props.onSend({text: props.text.trim()}, true)}>
      <Block alignCenter justifyCenter square={40} marginHorizontal={10}>
        <Image source={ICONS.send} square={26} />
      </Block>
    </Pressable>
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

  return (
    <Block flex backgroundColor="background">
      <RNGiftedChat
        {...rest}
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
        listViewProps={{marginBottom: getSize.m(bottom + 30)}}
        renderLoadEarlier={_renderLoadEarlier}
        lightboxProps={{underlayColor: COLORS.blue_100}}
        keyboardShouldPersistTaps="handled"
        bottomOffset={isIos ? 16 : -16}
        onLongPress={() => {}}
      />
    </Block>
  );
};

export default GiftedChat;
