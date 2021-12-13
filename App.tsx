import React from 'react';
import { useFonts } from 'expo-font';
import { Montserrat_500Medium } from '@expo-google-fonts/montserrat';
import {
  Mulish_400Regular,
  Mulish_600SemiBold,
  Mulish_700Bold,
  Mulish_800ExtraBold,
} from '@expo-google-fonts/mulish';
import { StatusBar } from 'react-native';
import AppLoading from 'expo-app-loading';

import { Background } from './src/components/Background';
import Navigation from './src/navigation';

export default function App() {
  const [fontsLoaded] = useFonts({
    Montserrat_500Medium,
    Mulish_400Regular,
    Mulish_600SemiBold,
    Mulish_700Bold,
    Mulish_800ExtraBold,
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
      <Navigation />
    </Background>
  );
}
