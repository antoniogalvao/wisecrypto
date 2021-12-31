import React, { useState } from 'react';
import { Alert, Image, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import { api } from '../../services/api';

import { Button } from '../../components/Button';
import { LabeledTextInput } from '../../components/LabeledTextInput';
import LogoImg from '../../assets/logo.png';

import { styles } from './styles';

export function SignIn() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleLogin() {
    // try {
    //   await api.post('auth/session', { email, password });
    //   navigation.navigate('Root');
    // } catch (error) {
    //   console.log(error);
    //   Alert.alert('Invalid credentials!');
    // }
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
          <LabeledTextInput
            title='Email'
            keyboardType='email-address'
            onChangeText={setEmail}
            value={email}
          />

          <LabeledTextInput
            title='Password'
            secureTextEntry={true}
            onChangeText={setPassword}
            value={password}
          />

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
