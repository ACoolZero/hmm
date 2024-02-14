import {ICONS, IMAGES} from '@assets';
import {Block, Image, Text} from '@components';
import {useStore} from '@hooks';
import {navigate} from '@navigation/NavigationServices';
import routes from '@navigation/routes';
import {BlurView} from '@react-native-community/blur';
import {getSize} from '@utils/responsive';
import React, {useState} from 'react';
import {DeviceEventEmitter, TouchableOpacity} from 'react-native';
import styles from './styles';
import {ActionButtonProps} from './types';

const ActionModal: React.FC = () => {
  const {useSelector} = useStore();
  const {userInfo} = useSelector('auth');
  const [isVisible, setIsVisible] = useState<boolean>(false);

  DeviceEventEmitter.addListener('showActionModal', () => {
    setIsVisible(true);
  });

  const _renderActionButton: React.FC<ActionButtonProps> = ({
    actiontype,
    icon,
    iconSize = 50,
    title,
    style,
    disabled = false,
  }) => {
    return (
      <TouchableOpacity
        disabled={disabled}
        onPress={() => {
          setIsVisible(false);
          switch (actiontype) {
            case 'SUGGEST':
              navigate(routes.SUGGEST_SCREEN);
              break;
            case 'DISCOVER':
              break;
            case 'MOODNOW':
              DeviceEventEmitter.emit('showMoodNowModal');
              break;
            case 'CUSTOMIZATION':
              navigate(routes.GADGETS_CUSTOMIZATION_SCREEN);
              break;
            case 'MOMENT':
              navigate(routes.CREATE_MOMENT_SCREEN);
              break;
            case 'MILSESTONE':
              navigate(routes.CREATE_MILESTONE_SCREEN);
              break;
            default:
              break;
          }
        }}>
        <Block alignCenter marginBottom={30} style={style} opacity={actiontype === 'MOODNOW' ? 0.7 : 1}>
          <Image source={icon} square={iconSize} resizeMode="contain" />
          <Text marginTop={8} color="#FAFAFA" type="medium">
            {title}
          </Text>
        </Block>
      </TouchableOpacity>
    );
  };

  if (!isVisible) return null;
  return (
    <TouchableOpacity style={styles.container} onPress={() => setIsVisible(false)}>
      <BlurView style={styles.container} blurType="dark" blurAmount={16} />
      <Block safeBottom flex row alignEnd>
        <Block flex alignEnd justifyCenter height={300}>
          {_renderActionButton({
            actiontype: 'MILSESTONE',
            icon: IMAGES.milestone,
            title: 'Milestone',
            style: {marginRight: getSize.m(8)},
          })}
          {_renderActionButton({actiontype: 'MOMENT', icon: IMAGES.moment, title: 'Moment'})}
        </Block>
        <Block flex alignCenter justifyCenter height={350}>
          {_renderActionButton({
            actiontype: 'SUGGEST',
            icon: IMAGES.suggest,
            title: 'Suggest',
            style: {marginBottom: 0},
          })}
          <Block alignCenter marginVertical={30}>
            <Block square={75} style={styles.btnAvatar}>
              <Image source={{uri: userInfo?.avatar}} square={60} style={{borderRadius: getSize.s(24)}} />
            </Block>
            <TouchableOpacity style={styles.btnClose} onPress={() => setIsVisible(false)}>
              <Image source={ICONS.close} square={12} tintColor="white" />
            </TouchableOpacity>
          </Block>
          {_renderActionButton({
            actiontype: 'CUSTOMIZATION',
            icon: IMAGES.customization,
            iconSize: getSize.s(25),
            style: {marginBottom: 0},
          })}
        </Block>
        <Block flex alignStart justifyCenter height={300}>
          {_renderActionButton({
            actiontype: 'DISCOVER',
            icon: IMAGES.discover,
            title: 'Discover',
            style: {marginLeft: getSize.m(8)},
          })}
          {_renderActionButton({actiontype: 'MOODNOW', icon: IMAGES.moodnow, title: 'Mood Now'})}
        </Block>
      </Block>
    </TouchableOpacity>
  );
};

export default ActionModal;
