import React from 'react';
import { useFonts } from 'expo-font';
import { Montserrat_500Medium } from '@expo-google-fonts/montserrat';
import {
  Mulish_400Regular,
  Mulish_600SemiBold,
  Mulish_700Bold,
} from '@expo-google-fonts/mulish';
import { StatusBar } from 'react-native';
import AppLoading from 'expo-app-loading';

import { SignIn } from './src/screens/SignIn';
import { Home } from './src/screens/Home';
import { Background } from './src/components/Background';

export default function App() {
  const [fontsLoaded] = useFonts({
    Montserrat_500Medium,
    Mulish_400Regular,
    Mulish_600SemiBold,
    Mulish_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Background>
      <StatusBar
        barStyle='dark-content'
        backgroundColor='transparent'
        translucent
      />
      <Home />
    </Background>
  );
}
