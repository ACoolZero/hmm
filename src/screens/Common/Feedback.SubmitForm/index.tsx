import {Block, Header} from '@components';
import React from 'react';

const FeedbackSubmitForm: React.FC = () => {
  return (
    <Block flex backgroundColor="background">
      <Header canGoBack title="Feedback" />
    </Block>
  );
};

export default FeedbackSubmitForm;
