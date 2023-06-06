import {isIos} from '@utils/helper';
import {useCallback, useState} from 'react';
import ImagePicker, {Image} from 'react-native-image-crop-picker';

const COMPRESS_IMAGE_QUALITY = isIos ? 0.8 : 0.1;

const useMediaPicker = () => {
  const [picture, setPicture] = useState<any>(null);

  const openPicker = useCallback(() => {
    ImagePicker.openPicker({
      mediaType: 'photo',
      cropping: true,
      includeBase64: true,
      compressImageQuality: COMPRESS_IMAGE_QUALITY,
    }).then((image: Image) => {
      setPicture(image);
    });
  }, []);

  const openMultiPicker = useCallback(() => {
    ImagePicker.openPicker({
      mediaType: 'photo',
      multiple: true,
      compressImageQuality: COMPRESS_IMAGE_QUALITY,
    }).then((images: Image[]) => {
      setPicture(images);
    });
  }, []);

  const openCamera = useCallback(() => {
    ImagePicker.openCamera({
      cropping: true,
      includeBase64: true,
      compressImageQuality: COMPRESS_IMAGE_QUALITY,
    }).then((image: Image) => {
      setPicture(image);
    });
  }, []);

  const cleanMediaPicker = useCallback(() => {
    ImagePicker.clean().then(() => {
      setPicture(null);
    });
  }, []);

  return {picture, openPicker, openMultiPicker, openCamera, cleanMediaPicker};
};

export default useMediaPicker;
