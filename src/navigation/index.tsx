import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

import { SignIn } from '../screens/SignIn';
import { Home } from '../screens/Home';
import { Market } from '../screens/Market';
import { Profile } from '../screens/Profile';

import { theme } from '../global/styles/theme';

export default function Navigation() {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator();

function AuthNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='SignIn'
        component={SignIn}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Root'
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen
        name='NotFound'
        component={NotFoundScreen}
        options={{ title: 'Oops!' }}
      /> */}
      {/* <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name='Modal' component={ModalScreen} />
      </Stack.Group> */}
    </Stack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
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
      <BottomTab.Screen name='Home' component={Home} />
      <BottomTab.Screen name='Market' component={Market} />
      <BottomTab.Screen name='Profile' component={Profile} />
    </BottomTab.Navigator>
  );
}
