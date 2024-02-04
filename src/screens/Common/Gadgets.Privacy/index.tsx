import {Block, FormContainer, Header, Text} from '@components';
import {useTranslation} from '@hooks';
import React from 'react';
import {StyleSheet} from 'react-native';

const Privacy: React.FC = () => {
  const {t} = useTranslation();

  return (
    <Block flex paddingBottom={60} backgroundColor="background">
      <Header canGoBack title={t('gadgets.FAQ/Feedback.privacy_agreement.label')} />
      <FormContainer>
        <Block padding={16}>
          <Text style={styles.customFont}>{t('gadgets.FAQ/Feedback.privacy_agreement.introduction')}</Text>
          <Text style={styles.customFont}>{t('gadgets.FAQ/Feedback.privacy_agreement.etc')}</Text>
          <Text marginTop={16} style={styles.customFont}>
            {t('gadgets.FAQ/Feedback.privacy_agreement.effective_date')}
          </Text>
        </Block>
      </FormContainer>
    </Block>
  );
};

export default Privacy;

const styles = StyleSheet.create({
  customFont: {
    fontFamily: 'Poppins-Regular',
    lineHeight: 26,
  },
});
