import {Block, Header, ListWrapper, MilestoneCard} from '@components';
import {DATA} from '@screens/Bottom/Home/components/Milestones/data';
import {IMilestone} from '@screens/Bottom/Home/types';
import React from 'react';
import {ListRenderItem} from 'react-native';

const MilestoneDetails: React.FC = () => {
  const _renderItem: ListRenderItem<IMilestone> = ({item, index}) => {
    const isLastItem = index === DATA?.length - 1;
    return <MilestoneCard item={item} isLastItem={isLastItem} />;
  };

  return (
    <Block flex backgroundColor="background">
      <Header canGoBack title="Milestones" />
      <Block flex padding={16}>
        <ListWrapper data={DATA} keyExtractor={(item: IMilestone) => String(item.id)} renderItem={_renderItem} />
      </Block>
    </Block>
  );
};

export default MilestoneDetails;
