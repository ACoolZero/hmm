import {Block, FormContainer, Header, Text} from '@components';
import React from 'react';
import {StyleSheet} from 'react-native';

const DataProtection: React.FC = () => {
  return (
    <Block flex paddingBottom={60} backgroundColor="background">
      <Header canGoBack title="Data Protection" />
      <FormContainer>
        <Block padding={16}>
          <Text style={styles.customFont}>How we store and process your data ?</Text>
          <Text style={styles.customFont}>
            Here we store on a public cloud Then we process it in side VN country Sometimes we take you anonymous data
            to get insight for the app.
          </Text>
          <Text style={styles.customFont}>
            Together with a team of authors, Mike writes about various destinations in Africa, Asia, Oceania, Europe,
            Middle East and North America and targets quite a wide audience by providing versatile guides that you can
            filter by destination or trip type (active, city break, etc.).
          </Text>
          <Text marginTop={16} style={styles.customFont}>
            Effective Date: July 01, 2023
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
