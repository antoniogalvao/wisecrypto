import React, { useState } from 'react';

import { View, Text, TextInput, TextInputProps } from 'react-native';
import { theme } from '../../global/styles/theme';

import { styles } from './styles';

type Props = TextInputProps & {
  title: string;
};

export function LabeledTextInput({ title, ...rest }: Props) {
  const { primary, lightGreen } = theme.colors;
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{title}</Text>
      <TextInput
        {...rest}
        style={[
          styles.input,
          { borderColor: isFocused ? primary : lightGreen },
        ]}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </View>
  );
}
