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
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

import { SignIn } from './src/screens/SignIn';
import { Home } from './src/screens/Home';
import { Market } from './src/screens/Market';
import { Background } from './src/components/Background';
import { theme } from './src/global/styles/theme';

const Tab = createBottomTabNavigator();

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
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              switch (route.name) {
                case 'Home':
                  return <Ionicons name='home-sharp' size={24} color={color} />;
                case 'Market':
                  return (
                    <FontAwesome5 name='shopping-bag' size={24} color={color} />
                  );
                case 'Profile':
                  return <Ionicons name='person' size={24} color={color} />;
              }
            },
            tabBarActiveTintColor: theme.colors.primary,
            tabBarInactiveTintColor: theme.colors.gray2,
            headerShown: false,
          })}
        >
          <Tab.Screen name='Home' component={Home} />
          <Tab.Screen name='Market' component={Market} />
          <Tab.Screen name='Profile' component={SignIn} />
        </Tab.Navigator>
      </NavigationContainer>
    </Background>
  );
}
