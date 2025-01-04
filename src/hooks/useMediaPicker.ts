import {isIos} from '@utils/helper';
import {useCallback, useState} from 'react';
import ImagePicker, {Image, Video} from 'react-native-image-crop-picker';

const COMPRESS_IMAGE_QUALITY = isIos ? 0.8 : 1;

const useMediaPicker = ({cropping}: {cropping: boolean}) => {
  const [media, setMedia] = useState<Image | Image[] | Video | Video[]| null>(null);

  const openPicker: () => void = useCallback(() => {
    ImagePicker.openPicker({
      // mediaType: 'photo',
      cropping,
      includeBase64: true,
      compressImageQuality: COMPRESS_IMAGE_QUALITY,
    }).then((selection: Image | Video) => {
      setMedia(selection);
    });
  }, [cropping]);

  const openMultiPicker: () => void = useCallback(() => {
    ImagePicker.openPicker({
      // mediaType: 'photo',
      multiple: true,
      compressImageQuality: COMPRESS_IMAGE_QUALITY,
    }).then((selection: Image[] | Video[]) => {
      setMedia(selection);
    });
  }, []);

  const openCamera: () => void = useCallback(() => {
    ImagePicker.openCamera({
      cropping,
      includeBase64: true,
      compressImageQuality: COMPRESS_IMAGE_QUALITY,
    }).then((selection: Image | Video) => {
      setMedia(selection);
    });
  }, [cropping]);

  const cleanMediaPicker = useCallback(() => {
    ImagePicker.clean().then(() => {
      setMedia(null);
    });
  }, []);

  return {media, openPicker, openMultiPicker, openCamera, cleanMediaPicker};
};

export default useMediaPicker;
