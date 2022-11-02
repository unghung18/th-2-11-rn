import React from 'react';

import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Onboarding from './components/onBoarding';
import Landingscreen from './components/LandingScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Onboarding'>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Landingscreen" component={Landingscreen} />
      </Stack.Navigator>
    </NavigationContainer >
  )
}