import {getSize} from '@utils/responsive';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {IconProps} from './types';

const Icons = {
  FontAwesome,
  FontAwesome5,
  AntDesign,
  Feather,
  MaterialIcons,
  MaterialCommunityIcons,
  EvilIcons,
  Fontisto,
  Octicons,
  Ionicons,
  Entypo,
  SimpleLineIcons,
};

export type IconType = keyof typeof Icons;

export const getIconComponent = (componentName: IconType) => {
  if (!Icons[componentName]) {
    return null;
  }

  return Icons[componentName];
};

const Icon: React.FC<IconProps> = ({type, name, size = 22, color = '#000000'}) => {
  const IconComponent = getIconComponent(type);

  if (!IconComponent) {
    return null;
  }

  return <IconComponent name={name} size={getSize.s(size)} color={color} />;
};

export default Icon;
