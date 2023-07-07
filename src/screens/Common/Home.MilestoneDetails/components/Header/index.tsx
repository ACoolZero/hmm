import {ICONS, MILESTONE} from '@assets';
import {Block, Image, Text} from '@components';
import {useColors} from '@hooks';
import {goBack} from '@navigation/NavigationServices';
import React from 'react';
import {Pressable} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styles from './styles';

const Header: React.FC = () => {
  const {top} = useSafeAreaInsets();
  const {COLORS, randomBackgroundColor} = useColors();

  return (
    <Block shadow paddingTop={top} style={styles.container} backgroundColor="primary">
      <Block justifyCenter height={48} marginBottom={32}>
        <Text center numberOfLines={1} color="common_text" type="semibold">
          Milestones
        </Text>
        <Pressable style={styles.btnBack} onPress={goBack}>
          <Image source={ICONS.arrow_left} square={14} tintColor="common_text" />
        </Pressable>
      </Block>
      <Block radius={20} padding={16} backgroundColor="#FAFAFA" style={styles.shadow}>
        <Block row alignCenter space="between">
          <Block flex row alignCenter>
            <Block alignCenter justifyCenter radius={5} square={40} backgroundColor={randomBackgroundColor()}>
              <Image source={MILESTONE.milestone1} square={30} resizeMode="contain" />
            </Block>
            <Text flex marginLeft={12} type="semibold">
              New boy friend, yay !!
            </Text>
          </Block>
          <Block row alignCenter>
            <Text sm marginRight={6} color="#5C7887">
              May 2023
            </Text>
            <Block round={8} backgroundColor={COLORS.primary} />
          </Block>
        </Block>
        <Text sm marginVertical={12} color="#96A7AF">
          This is content from Linked Moment. Generally, it could fill up to 2 lines...
        </Text>
        <Block row alignCenter space="between">
          <Text sm color="primary" type="medium">
            Edit
          </Text>
          <Pressable>
            <Block row alignCenter>
              <Text sm marginRight={5} color="primary">
                Oh my memories...
              </Text>
              <Image source={ICONS.arrow_right} square={12} tintColor="primary" />
            </Block>
          </Pressable>
        </Block>
      </Block>
    </Block>
  );
};

export default Header;
