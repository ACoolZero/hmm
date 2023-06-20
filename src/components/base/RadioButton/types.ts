export interface RadioButtonProps {
  data?: ItemType[];
  selected?: boolean;
  setSelected?: any;
  onPress?: (e: any) => void;
  containerStyle?: any;
  itemStyle?: any;
  labelStyle?: any;
  unCheckColor?: string;
  checkedColor?: string;
}

export interface ItemType {
  label: string;
  value: any;
}
