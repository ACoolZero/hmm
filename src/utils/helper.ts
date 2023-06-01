import en from 'dayjs/locale/en';
import vi from 'dayjs/locale/vi';
import {Platform} from 'react-native';

export const LOCALE = {vi, en};

/**
 * @description Checking platform
 */
export const isIos = Platform.OS === 'ios';

/**
 * @description Remove null values from an Object
 */
export const cleanObject = (obj: any) => {
  if (obj) {
    let temp = {...obj};
    for (let prop in temp) {
      if (!temp[prop]) {
        delete temp[prop];
      }
    }
    return temp;
  }
};

/**
 * @description Remove vietnamese accent
 */
export const removeAccent = (str: string) => {
  const from = 'àáãảạăằắẳẵặâầấẩẫậèéẻẽẹêềếểễệđùúủũụưừứửữựòóỏõọôồốổỗộơờớởỡợìíỉĩịäëïîöüûñçýỳỹỵỷ';
  const to = 'aaaaaaaaaaaaaaaaaeeeeeeeeeeeduuuuuuuuuuuoooooooooooooooooiiiiiaeiiouuncyyyyy';

  for (let i = 0; i < from.length; i++) {
    str = str?.replace(RegExp(from[i], 'gi'), to[i]);
  }

  str = str
    ?.toLowerCase()
    .trim()
    .replace(/[^a-z0-9-]/g, '-')
    .replace(/-+/g, '-');

  return str;
};

/**
 * @description Strip HTML tags
 */
export const stripHTMLTags = (html: any) => {
  return html?.replace(/(<([^>]+)>)/gi, '');
};
