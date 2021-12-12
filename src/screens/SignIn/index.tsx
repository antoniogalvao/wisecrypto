import React from 'react';
import { Image, Text, TextInput, View } from 'react-native';

import LogoImg from '../../assets/logo.png';
import { Button } from '../../components/Button';

import { styles } from './styles';

export function SignIn() {
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
          <Text style={styles.label}>Email</Text>
          <TextInput style={[styles.input, { marginBottom: 16 }]} />

          <Text style={styles.label}>Password</Text>
          <TextInput style={styles.input} />

          <Text style={styles.forgotPassword}>Forgot your password?</Text>

          <Button title='Login' />
          <Text style={styles.register}>
            Don't have an account yet? Register here
          </Text>
        </View>
      </View>
    </View>
  );
}