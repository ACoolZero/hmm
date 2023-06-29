import {ICONS} from '@assets';
import {Block, Image, LazyImage, Text} from '@components';
import {useColors, useStore, useTranslation} from '@hooks';
import {LOCALE, isIos} from '@utils/helper';
import {getSize, width} from '@utils/responsive';
import dayjs from 'dayjs';
import React from 'react';
import {LayoutAnimation, Pressable} from 'react-native';
import {
  Avatar,
  AvatarProps,
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
        left: {...styles.wrapperStyle(props), marginLeft: getSize.m(-8)},
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
      {props.currentMessage?.hasTimestamp && (
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
      containerStyle={{
        backgroundColor: COLORS.secondary_background,
        paddingBottom: getSize.m(30),
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
      <Pressable onPress={() => props.text?.trim().length && props.onSend?.({text: props.text.trim()}, true)}>
        <Block alignCenter justifyCenter square={40} marginHorizontal={10}>
          <Image source={ICONS.send} square={26} />
        </Block>
      </Pressable>
    ) : (
      <Block row alignCenter paddingHorizontal={6}>
        <Pressable onPress={() => {}}>
          <Block alignCenter justifyCenter square={48}>
            <Image source={ICONS.voice} square={26} />
          </Block>
        </Pressable>
        <Pressable onPress={() => {}}>
          <Block alignCenter justifyCenter square={48}>
            <Image source={ICONS.image} square={26} />
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
    <Avatar {...props} imageStyle={{left: {height: getSize.s(24), width: getSize.s(24)}}} />
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
        renderAvatar={_renderAvatar}
        lightboxProps={{underlayColor: COLORS.blue_100}}
        keyboardShouldPersistTaps="handled"
        bottomOffset={isIos ? 16 : -16}
        onLongPress={() => {}}
      />
    </Block>
  );
};

export default GiftedChat;
