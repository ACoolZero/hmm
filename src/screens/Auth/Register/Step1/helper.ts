import {useState} from 'react';
import {getSize} from '@utils/responsive';
/**
 * @description Handle paddingBottom in FormContainer via onFocus and onBlur of Input
 */
export const usePaddingBottom = () => {
  const [paddingBottom, setPaddingBottom] = useState(0);

  const onFocus = (size: number) => {
    setPaddingBottom(getSize.m(size));
  };

  const onBlur = () => setPaddingBottom(0);

  return {paddingBottom, onFocus, onBlur};
};
