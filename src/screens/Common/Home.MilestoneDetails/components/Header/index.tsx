import {ICONS} from '@assets';
import {Block, Image, Text} from '@components';
import {useColors, useStore, useTranslation} from '@hooks';
import {goBack, navigate} from '@navigation/NavigationServices';
import routes from '@navigation/routes';
import {IMilestone} from '@screens/Bottom/Home/types';
import {width} from '@utils/responsive';
import dayjs from 'dayjs';
import React from 'react';
import {Pressable, TouchableOpacity} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styles from './styles';

const Header: React.FC<{selectedMileStone: IMilestone}> = ({selectedMileStone}) => {
  const {t} = useTranslation();
  const {useSelector} = useStore();
  const {data: userMomentsList} = useSelector('userMomentsList');
  const {top} = useSafeAreaInsets();
  const {COLORS, randomBackgroundColor} = useColors();
  const {id, icon, content, milestoneTime, story, momentId} = selectedMileStone;

  return (
    <Block shadow style={styles.containerBorder} backgroundColor="#FF974A">
      <Block shadow paddingTop={top} style={styles.container} width={width} backgroundColor="milestone_header">
        <Block justifyCenter height={48} marginBottom={24}>
          <Text center numberOfLines={1} color="text" type="semibold">
            {t('home.milestones.header')}
          </Text>
          <Pressable style={styles.btnBack} onPress={goBack}>
            <Image source={ICONS.arrow_left} square={14} tintColor="text" />
          </Pressable>
        </Block>
        <Block radius={20} padding={16} backgroundColor="background" style={styles.shadow}>
          <Block row alignCenter space="between">
            <Block flex row alignCenter>
              <Block alignCenter justifyCenter radius={5} square={40} backgroundColor={randomBackgroundColor()}>
                <Text md>{icon}</Text>
              </Block>
              <Text flex marginHorizontal={12} type="semibold" numberOfLines={1} ellipsizeMode="tail">
                {content}
              </Text>
            </Block>
            <Block row alignCenter>
              <Text sm marginRight={6} color="#5C7887">
                {dayjs(milestoneTime).format('DD/MM/YYYY')}
              </Text>
              <Block round={8} backgroundColor={COLORS.primary} />
            </Block>
          </Block>
          <Text sm marginVertical={12} color="#96A7AF" numberOfLines={2} ellipsizeMode="tail">
            {story}
          </Text>
          <Block row alignCenter space="between">
            <TouchableOpacity
              onPress={() => {
                navigate(routes.EDIT_MILESTONE_SCREEN, {milestoneId: id});
              }}>
              <Text sm color="primary" type="medium">
                {t('button.edit')}
              </Text>
            </TouchableOpacity>
            {!!momentId && userMomentsList?.length > 0 && (
              <TouchableOpacity
                onPress={() => {
                  navigate(routes.MOMENT_DETAILS_SCREEN, {momentId});
                }}>
                <Block row alignCenter>
                  <Text sm marginRight={5} color="primary">
                    {t('home.milestones.recall_moment')}
                  </Text>
                  <Image source={ICONS.arrow_right} square={12} tintColor="primary" />
                </Block>
              </TouchableOpacity>
            )}
          </Block>
        </Block>
      </Block>
    </Block>
  );
};

export default Header;
