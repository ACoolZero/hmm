import {TextInputProps} from '@components/base/TextInput/types';
import {Control} from 'react-hook-form';

export interface FormInputProps extends TextInputProps {
  name: string;
  control: Control<any>;
  defaultValue?: string;
}
