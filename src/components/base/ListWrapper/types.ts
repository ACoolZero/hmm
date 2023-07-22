import {FlatListProps, ViewStyle} from 'react-native';

export interface ListWrapperProps extends FlatListProps<any> {
  data: any[];
  page?: number;
  renderItem: any;
  isLoading?: boolean;
  horizontal?: boolean;
  EmptyComponent?: any;
  HolderComponent?: any;
  ItemSeparator?: number;
  onRefresh?: () => void;
  onLoadMore?: () => void;
  containerStyle?: ViewStyle;
}
