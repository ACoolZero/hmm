import {isIos} from '@utils/helper';
import React from 'react';
import {KeyboardAvoidingView, ScrollView} from 'react-native';
import styles from './styles';
import {FormContainerProps} from './types';

const FormContainer: React.FC<FormContainerProps> = ({style = {}, children, ...rest}) => {
  return (
    <KeyboardAvoidingView style={{...style, ...styles.keyboardAvoiding}} behavior={isIos ? 'padding' : 'height'}>
      <ScrollView {...rest} bounces={false} showsVerticalScrollIndicator={false}>
        {children}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default FormContainer;
