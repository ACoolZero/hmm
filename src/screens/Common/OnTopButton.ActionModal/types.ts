import {ViewStyle} from 'react-native';

export type ActionType = 'SUGGEST' | 'DISCOVER' | 'VOLUNTEER' | 'CUSTOMIZATION' | 'MOMENT' | 'MILSESTONE';

export interface ActionButtonProps {
  actiontype: ActionType;
  icon: number;
  iconSize?: number;
  title?: string;
  style?: ViewStyle;
  disabled?: boolean;
}
