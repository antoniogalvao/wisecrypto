import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import { Fontisto } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import { SettingCard } from '../../components/SettingCard';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

export function Profile() {
  const navigation = useNavigation();
  function handleLogout() {
    navigation.navigate('SignIn');
  }

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

      <ScrollView showsVerticalScrollIndicator={false}>
        <SettingCard
          title='Transactions'
          description='Your transactions list'
          iconBackgroundColor={theme.colors.lightGreen}
        >
          <Ionicons name='newspaper' size={20} color={theme.colors.primary} />
        </SettingCard>
        <View style={{ marginBottom: 24 }} />

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
            <Ionicons name='card' size={20} color={theme.colors.purple} />
          </SettingCard>
          <View style={{ marginBottom: 8 }} />

          <SettingCard
            title='Notifications'
            description='Change notification settings'
            iconBackgroundColor={theme.colors.lightWarning}
          >
            <Fontisto name='bell-alt' size={20} color={theme.colors.warning} />
          </SettingCard>
          <View style={{ marginBottom: 16 }} />

          <SettingCard
            onPress={handleLogout}
            title='Logout'
            description='Exit the app'
            iconBackgroundColor={theme.colors.lightDanger}
          >
            <Ionicons name='exit' size={20} color={theme.colors.danger} />
          </SettingCard>
        </View>
      </ScrollView>
    </View>
  );
}
