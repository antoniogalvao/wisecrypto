import React from 'react';
import { Image, Text, View } from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import { SettingCard } from '../../components/SettingCard';

export function Profile() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.avatar}
        source={{ uri: 'https://github.com/antoniogalvao.png' }}
      />
      <Text style={styles.username}>Antonio Galvão</Text>

      <View style={styles.header}>
        <View>
          <Text style={styles.balanceTitle}>Current Balance</Text>
          <Text style={styles.accountCode}>= Rp.360.242.500</Text>
        </View>

        <Text style={styles.amount}>$25,000</Text>
      </View>

      <View style={styles.headerAppend}>
        <View style={styles.headerOption}>
          <Ionicons
            name='push'
            size={26}
            color={theme.colors.primary20}
            style={{ transform: [{ rotate: '180deg' }] }}
          />
          <Text style={styles.headerLabel}>Withdraw</Text>
        </View>
        <View style={styles.headerDivider} />
        <View style={styles.headerOption}>
          <FontAwesome
            name='plus-square'
            size={26}
            color={theme.colors.primary20}
          />
          <Text style={styles.headerLabel}>Deposit</Text>
        </View>
      </View>

      <View style={styles.settingsContainer}>
        <Text style={styles.settingsHeader}>Settings</Text>

        <SettingCard
          title='Privacy'
          description='Change email and password'
          iconBackgroundColor={theme.colors.lightBlue}
        >
          <Fontisto name='locked' size={20} color={theme.colors.blue} />
        </SettingCard>
        <View style={{ marginBottom: 8 }} />

        <SettingCard
          title='Payment'
          description='Update payment settings'
          iconBackgroundColor={theme.colors.lightPurple}
        >
          <Fontisto name='locked' size={20} color={theme.colors.purple} />
        </SettingCard>
        <View style={{ marginBottom: 8 }} />

        <SettingCard
          title='Notifications'
          description='Change notification settings'
          iconBackgroundColor={theme.colors.lightWarning}
        >
          <Fontisto name='locked' size={20} color={theme.colors.warning} />
        </SettingCard>
        <View style={{ marginBottom: 16 }} />

        <SettingCard
          title='Logout'
          description='Exit the app'
          iconBackgroundColor={theme.colors.lightDanger}
        >
          <Fontisto name='locked' size={20} color={theme.colors.danger} />
        </SettingCard>
      </View>
    </View>
  );
}
