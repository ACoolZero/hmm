import {Block} from '@components';
import React from 'react';
import WebView from 'react-native-webview';
import {WebViewProps} from './types';

const WEBView: React.FC<WebViewProps> = ({source, style, scrollEnabled = true, ...rest}) => {
  return (
    <Block flex style={style}>
      <WebView
        {...rest}
        androidLayerType="hardware"
        allowsFullscreenVideo={true}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        scrollEnabled={scrollEnabled}
        startInLoadingState={true}
        scalesPageToFit={true}
        useWebKit={true}
        originWhitelist={['*']}
        source={{uri: source}}
        injectedJavaScript="window.ReactNativeWebView.postMessage(document.body.scrollHeight)"
      />
    </Block>
  );
};

export default WEBView;

/**
const fileUri = Platform.select({
  ios: 'Inter-Regular.ttf',
  android: 'file:///android_asset/fonts/Inter-Regular.ttf',
});

const styles = `<style type="text/css">
  @font-face {
    font-family: 'Inter-Regular';
    src: local('Inter-Regular'), url('${fileUri}') format("truetype");
  }
  * {
    font-size: 14px;
    text-align: justify;
    line-height: 1.5;
    font-family: Inter-Regular !important;
  }
  body {
    margin: 0 !important;
    padding: 0 !important;
  }
  img {
    display: block;
    width: 100%;
    height: auto;
    padding: 0;
    margin: 10px auto;
    border-radius: 10px;
  }
  p, figure {
    padding: 0;
    margin: 0;
  }
</style>`;
*/
