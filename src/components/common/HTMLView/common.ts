import {defaultSystemFonts} from 'react-native-render-html';
import styles from './styles';

export const IGNORED_TAGS = ['iframe', 'script'];
export const IGNORED_STYLES = ['fontSize', 'fontFamily'];

export const TAGS_STYLES = {
  p: styles.paragraph,
  h1: styles.heading,
  h2: styles.heading,
  h3: styles.heading,
  h4: styles.heading,
  h5: styles.heading,
  h6: styles.heading,
  ul: styles.ul,
  li: styles.li,
  strong: styles.strong,
  a: styles.a,
  figure: styles.figure,
  img: styles.img,
  figcaption: styles.figcaption,
  blockquote: styles.blockquote,
};

export const SYSTEM_FONTS = [
  ...defaultSystemFonts,
  'Poppins-Regular',
  'Poppins-Medium',
  'Poppins-SemiBold',
  'Poppins-Bold',
];
