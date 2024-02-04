import {Block, FormContainer, Header, Text} from '@components';
import {useTranslation} from '@hooks';
import React from 'react';
import {StyleSheet} from 'react-native';

const DataProtection: React.FC = () => {
  const {t} = useTranslation();

  return (
    <Block flex paddingBottom={60} backgroundColor="background">
      <Header canGoBack title={t('gadgets.FAQ/Feedback.data_protection.label')} />
      <FormContainer>
        <Block padding={16}>
          <Text style={styles.customFont}>{t('gadgets.FAQ/Feedback.data_protection.how_to_store_data')}</Text>
          <Text style={styles.customFont}>{t('gadgets.FAQ/Feedback.data_protection.way_to_store_data')}</Text>
          <Text style={styles.customFont}>{t('gadgets.FAQ/Feedback.data_protection.etc')} </Text>
          <Text marginTop={16} style={styles.customFont}>
            {t('gadgets.FAQ/Feedback.data_protection.effective_date')}
          </Text>
        </Block>
      </FormContainer>
    </Block>
  );
};

export default DataProtection;

const styles = StyleSheet.create({
  customFont: {
    fontFamily: 'Poppins-Regular',
    lineHeight: 26,
  },
});
