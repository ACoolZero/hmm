import React from 'react';
import {useWindowDimensions} from 'react-native';
import HTML from 'react-native-render-html';
import {IGNORED_TAGS, SYSTEM_FONTS, TAGS_STYLES} from './common';

const HTMLView = ({html, ...rest}: any) => {
  const {width} = useWindowDimensions();

  if (!html) return null;
  return (
    <HTML
      {...rest}
      source={{html}}
      contentWidth={width}
      ignoredDomTags={IGNORED_TAGS}
      tagsStyles={TAGS_STYLES}
      systemFonts={SYSTEM_FONTS}
    />
  );
};

export default HTMLView;
