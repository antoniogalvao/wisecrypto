import React from 'react';
import { TextInput, TextInputProps, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

type Props = TextInputProps;

export function SearchBar({ ...rest }: Props) {
  return (
    <View style={styles.container}>
      <TextInput maxLength={30} style={styles.input} {...rest} />
      <Feather
        name='search'
        size={24}
        color={theme.colors.primary}
        style={styles.icon}
      />
    </View>
  );
}
