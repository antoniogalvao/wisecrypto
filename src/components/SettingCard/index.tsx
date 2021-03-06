import React from 'react';
import { Text, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

import { theme } from '../../global/styles/theme';

import { styles } from './styles';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

type Props = RectButtonProps & {
  title: string;
  description: string;
  iconBackgroundColor: string;
  children: React.ReactNode;
};

export function SettingCard({
  title,
  description,
  iconBackgroundColor,
  children,
  ...rest
}: Props) {
  return (
    <RectButton style={styles.container} {...rest}>
      <View style={styles.content}>
        <View
          style={[
            styles.iconContainer,
            { backgroundColor: iconBackgroundColor },
          ]}
        >
          {children}
        </View>
        <View>
          <Text style={styles.settingTitle}>{title}</Text>
          <Text style={styles.settingDescription}>{description}</Text>
        </View>
      </View>

      <View style={styles.chevronContainer}>
        <FontAwesome5
          name='chevron-right'
          size={24}
          color={theme.colors.gray2}
        />
      </View>
    </RectButton>
  );
}
