import {TextInput} from '@components';
import React from 'react';
import {Controller} from 'react-hook-form';
import {FormInputProps} from './types';

const FormInput: React.FC<FormInputProps> = ({name, control, defaultValue = '', ...rest}) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({field: {onChange, value}, formState: {errors}}) => (
        <TextInput
          {...rest}
          value={String(value)}
          onChangeText={(text: string) => {
            onChange(text);
            rest.onChangeText && rest.onChangeText(text);
          }}
          isError={errors[name]}
          errorText={rest.errorText || errors[name]?.message}
        />
      )}
      defaultValue={defaultValue}
    />
  );
};

export default FormInput;
