import React from 'react';

import { Text, View } from 'react-native';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

type Props = {
  isSelected?: boolean;
  label: string;
};

export function Badge({ label, isSelected = false }: Props) {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isSelected
            ? theme.colors.primary
            : theme.colors.white,
        },
      ]}
    >
      <Text
        style={[
          styles.label,
          {
            color: isSelected ? theme.colors.white : theme.colors.primary,
          },
        ]}
      >
        {label}
      </Text>
    </View>
  );
}
