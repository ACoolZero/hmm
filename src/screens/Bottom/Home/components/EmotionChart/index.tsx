/* eslint-disable react-native/no-inline-styles */
import {Block, Text} from '@components';
import {width} from '@utils/responsive';
import React, {memo} from 'react';
import {LineChart} from 'react-native-gifted-charts';
import styles from './styles';

const EmotionChart: React.FC = () => {
  const data = [{value: 50}, {value: 80}, {value: 50}, {value: 30}, {value: 50}, {value: 80}, {value: 50}, {value: 30}];
  const data2 = [{value: 20}, {value: 50}, {value: 90}, {value: 60}, {value: 20}, {value: 90}, {value: 60}, {value: 5}];

  const _formattedData = (value: {value: number}[], type: 'data' | 'data2') => {
    const isDATA = type === 'data';
    const _renderDataPointLabel = (e: number) => (
      <Block backgroundColor={isDATA ? '#FFC542' : '#3DD598'} style={styles.labelContainer}>
        <Block style={{...styles.triangle, borderTopColor: isDATA ? '#FFC542' : '#3DD598'}} />
        <Text size={10} color="white">
          {e}
        </Text>
      </Block>
    );
    return value.map(elm => ({
      ...elm,
      ...{
        label: '',
        labelComponent: () => {},
        dataPointText: String(elm.value),
        dataPointLabelComponent: () => _renderDataPointLabel(elm.value),
      },
    }));
  };

  return (
    <Block flex radius={20} marginBottom={24} marginHorizontal={16} paddingTop={12} backgroundColor="light_background">
      <Block row alignCenter paddingHorizontal={16} marginBottom={16} space="between">
        <Text type="bold">Emotions flow</Text>
        <Block row>
          <Block row alignCenter marginRight={16}>
            <Block round={8} marginRight={8} backgroundColor="#3DD598" />
            <Text size={12}>You</Text>
          </Block>
          <Block row alignCenter>
            <Block round={8} marginRight={8} backgroundColor="#FFC542" />
            <Text size={12}>Your past</Text>
          </Block>
        </Block>
      </Block>
      <LineChart
        curved
        hideRules
        pressEnabled
        scrollToEnd
        hideYAxisText
        showTextOnPress
        isAnimated
        animateOnDataChange
        thickness={2}
        yAxisThickness={0}
        xAxisThickness={0}
        noOfSections={5}
        height={width * 0.3}
        focusedDataPointRadius={5}
        color="#FFC542"
        color2="#3DD598"
        dataPointsColor="#FFC542"
        dataPointsColor2="#3DD598"
        data={_formattedData(data, 'data')}
        data2={_formattedData(data2, 'data2')}
      />
    </Block>
  );
};

export default memo(EmotionChart);
