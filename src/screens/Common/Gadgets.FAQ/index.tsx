import {Block, FAQCard, FormContainer, Header} from '@components';
import {useColors, useTranslation} from '@hooks';
import React from 'react';
import data, {IQuestion} from './data';

const Privacy: React.FC = () => {
  const {randomTextColor} = useColors();
  const {t} = useTranslation();

  const _renderItem = (item: IQuestion, index: number) => (
    <FAQCard
      key={item.id}
      item={item}
      index={index}
      tintColor={randomTextColor()}
      isLastItem={index === data.length - 1}
    />
  );

  return (
    <Block flex paddingBottom={60} backgroundColor="background">
      <Header canGoBack title={t('gadgets.FAQ/Feedback.FAQ.label')} />
      <FormContainer>
        <Block margin={16} radius={12} backgroundColor="secondary_background">
          {data.map(_renderItem)}
        </Block>
      </FormContainer>
    </Block>
  );
};

export default Privacy;
