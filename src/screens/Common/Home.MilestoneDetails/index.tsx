import {Block, ListWrapper, MilestoneCardTwo} from '@components';
import {DATA} from '@screens/Bottom/Home/components/Milestones/data';
import {IMilestone} from '@screens/Bottom/Home/types';
import React from 'react';
import {ListRenderItem} from 'react-native';
import Header from './components/Header';

const MilestoneDetails: React.FC = () => {
  const _renderItem: ListRenderItem<IMilestone> = ({item}) => <MilestoneCardTwo item={item} />;

  return (
    <Block flex backgroundColor="background">
      <Header />
      <Block flex padding={16}>
        <ListWrapper data={DATA} keyExtractor={(item: IMilestone) => String(item.id)} renderItem={_renderItem} />
      </Block>
    </Block>
  );
};

export default MilestoneDetails;
