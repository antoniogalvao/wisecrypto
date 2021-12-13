import React from 'react';
import { Image, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';

import LogoImg from '../../assets/logo.png';
import { Button } from '../../components/Button';
import { LabeledTextInput } from '../../components/LabeledTextInput';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

import { Feather } from '@expo/vector-icons';

export function SignIn() {
  const navigation = useNavigation();

  function handleLogin() {
    navigation.navigate('Root');
  }

  function handleNavigateToRegisterScreen() {
    navigation.navigate('Register');
  }

  return (
    <View style={styles.container}>
      <Image source={LogoImg} style={styles.image} />

      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Welcome</Text>
          <Text style={styles.subtitle}>
            Trusted by millions of users worldwide
          </Text>
        </View>

        <View style={styles.form}>
          <LabeledTextInput title='Email' />

          <LabeledTextInput title='Password' />

          <Text style={styles.forgotPassword}>Forgot your password?</Text>

          <Button title='Login' onPress={handleLogin} />
          <RectButton onPress={handleNavigateToRegisterScreen}>
            <Text style={styles.register}>
              Don't have an account yet? Register here
            </Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
}
