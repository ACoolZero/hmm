import {Block, FormContainer, Header, Text} from '@components';
import React from 'react';
import {StyleSheet} from 'react-native';

const Privacy: React.FC = () => {
  return (
    <Block flex paddingBottom={60} backgroundColor="background">
      <Header canGoBack title="Privacy Agreement" />
      <FormContainer>
        <Block padding={16}>
          <Text style={styles.customFont}>
            Travel & Destinations is a travel resource designed to inspire people to travel the world and provide
            helpful tips and advice. It was created by Mike Clegg, a great traveler and photographer.
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

export default Privacy;

const styles = StyleSheet.create({
  customFont: {
    fontFamily: 'Poppins-Regular',
    lineHeight: 26,
  },
});
