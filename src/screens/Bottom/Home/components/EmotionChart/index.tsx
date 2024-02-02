/* eslint-disable react-native/no-inline-styles */
import {Block, Text} from '@components';
import {useColors, useTranslation} from '@hooks';
import useHome from '@screens/Bottom/Home/useHome';
import {width} from '@utils/responsive';
import dayjs from 'dayjs';
import React, {memo} from 'react';
import {LineChart} from 'react-native-gifted-charts';
import styles from './styles';

const EmotionChart: React.FC = () => {
  const {COLORS} = useColors();
  const {emotionScore} = useHome();
  const {t, i18n} = useTranslation();
  dayjs.locale(i18n.language);

  const _formattedData = (value: {value: number; date: string}[], type: 'current' | 'past') => {
    const isPast = type === 'past';
    const _renderDataPointLabel = (e: number) => (
      <Block backgroundColor={isPast ? '#FFC542' : '#3DD598'} style={styles.labelContainer}>
        <Block style={{...styles.triangle, borderTopColor: isPast ? '#FFC542' : '#3DD598'}} />
        <Text size={10} color="white">
          {e}
        </Text>
      </Block>
    );

    const _renderLabel = (date: string) => (
      <Block marginBottom={12}>
        <Text center size={9}>
          {dayjs(date).format('ddd')}
        </Text>
      </Block>
    );

    return value.map(elm => ({
      ...elm,
      ...{
        label: '',
        labelComponent: () => _renderLabel(elm.date),
        dataPointText: String(elm.value),
        dataPointLabelComponent: () => _renderDataPointLabel(elm.value),
        showXAxisIndex: false,
      },
    }));
  };

  return (
    <Block flex backgroundColor="background">
      <Block
        shadow
        radius={20}
        marginBottom={36}
        marginHorizontal={16}
        paddingTop={12}
        backgroundColor="secondary_background">
        <Block row alignCenter paddingHorizontal={16} marginBottom={16} space="between">
          <Text type="bold">{t('home.emotion_chart.label')}</Text>
          <Block row>
            <Block row alignCenter marginRight={16}>
              <Block round={8} marginRight={8} backgroundColor="#3DD598" />
              <Text size={12}>{t('home.emotion_chart.you')}</Text>
            </Block>
            <Block row alignCenter>
              <Block round={8} marginRight={8} backgroundColor="#FFC542" />
              <Text size={12}>{t('home.emotion_chart.your_past')}</Text>
            </Block>
          </Block>
        </Block>
        <LineChart
          curved
          hideRules
          focusEnabled
          scrollToEnd
          hideYAxisText
          showTextOnFocus
          animateOnDataChange
          thickness={2}
          yAxisThickness={0}
          xAxisThickness={0}
          noOfSections={5}
          height={width * 0.3}
          focusedDataPointRadius={5}
          minValue={0}
          maxValue={100}
          color="#FFC542"
          color2="#3DD598"
          dataPointsColor="#FFC542"
          dataPointsColor2="#3DD598"
          data={_formattedData(emotionScore?.past || [], 'past')}
          data2={_formattedData(emotionScore?.current || [], 'current')}
          showStripOnFocus
          stripColor={COLORS.border}
          stripWidth={1}
        />
      </Block>
    </Block>
  );
};

export default memo(EmotionChart);
