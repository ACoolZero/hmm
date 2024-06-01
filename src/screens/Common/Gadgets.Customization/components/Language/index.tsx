import {Block, Text} from '@components';
import {useColors, useTranslation} from '@hooks';
import {width} from '@utils/responsive';
import React, {useState} from 'react';
import {Pressable} from 'react-native';

interface ILanguage {
  label: string;
  value: string;
}
const langs: ILanguage[] = [
  {label: 'Tiếng Việt', value: 'vi'},
  {label: 'English', value: 'en'},
];

const Language: React.FC = () => {
  const {t, i18n} = useTranslation();
  const {COLORS} = useColors();
  const [selected, setSelected] = useState<string>(i18n.language);

  const _renderItem = (item: ILanguage) => {
    const {value, label} = item;
    const isSelected = selected === value;

    return (
      <Pressable
        key={value}
        onPress={() => {
          setSelected(value);
          i18n.changeLanguage(value);
        }}>
        <Block
          justifyCenter
          radius={12}
          height={36}
          width={width * 0.3}
          marginHorizontal={8}
          borderWidth={1}
          borderColor={isSelected ? COLORS.primary : COLORS.sub_text}
          backgroundColor={isSelected ? COLORS.primary : COLORS.secondary_background}>
          <Text center color={isSelected ? '#F5F5F5' : COLORS.sub_text}>
            {label}
          </Text>
        </Block>
      </Pressable>
    );
  };

  return (
    <Block marginBottom={24}>
      <Text marginBottom={12} type="bold">
        {t('gadgets.customization.language.label')}
      </Text>
      <Block row alignCenter justifyCenter>
        {langs.map(_renderItem)}
      </Block>
    </Block>
  );
};

export default Language;
