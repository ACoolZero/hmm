import {Block, ListWrapper, MilestoneCardTwo} from '@components';
import {useStore} from '@hooks';
import {IMilestone} from '@screens/Bottom/Home/types';
import {GET_MILESTONES} from '@store/actions';
import React, {useEffect, useState} from 'react';
import {ListRenderItem, StatusBar} from 'react-native';
import Header from './components/Header';

const MilestoneDetails: React.FC = () => {
  const {dispatch, useSelector} = useStore();
  const {data: milestoneList} = useSelector('milestoneList');
  const [selectedMileStone, setSelectedMileStone] = useState<IMilestone>(milestoneList[0]);

  const _renderItem: ListRenderItem<IMilestone> = ({item}) => (
    <MilestoneCardTwo item={item} selectedId={selectedMileStone.id} onPress={() => setSelectedMileStone(item)} />
  );

  useEffect(() => {
    const item = milestoneList?.find((elm: IMilestone) => elm.id === selectedMileStone.id);
    setSelectedMileStone(item);
  }, [milestoneList, selectedMileStone]);

  useEffect(() => {
    dispatch({type: GET_MILESTONES});
  }, [dispatch]);

  return (
    <Block flex backgroundColor="background">
      <StatusBar backgroundColor="primary" barStyle="dark-content" />
      <Header selectedMileStone={selectedMileStone} />
      <Block flex padding={16}>
        <ListWrapper
          data={milestoneList}
          keyExtractor={(item: IMilestone) => String(item.id)}
          renderItem={_renderItem}
        />
      </Block>
    </Block>
  );
};

export default MilestoneDetails;
