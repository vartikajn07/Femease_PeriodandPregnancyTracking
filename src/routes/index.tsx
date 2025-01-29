//App / Root Navigator
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import RegisterUser from '../screens/Auth screens/RegisterUser';
import SplashScreen from '../screens/Splash screen/Splashscreen';
import PeriodTrackingOnboarding from '../screens/Period tracking/Onboarding/index';
import PeriodTrackingHome from '../screens/Period tracking/Home';
import PregnancyOnboarding from '../screens/Pregnancy tracking/Onboarding';
import PregnancyHome from '../screens/Pregnancy tracking/Home';
import NavigationService from './NavigationService';
import LoginScreen from '../screens/Auth screens/LoginScreen';
import Welcome from "../screens/Welcome screen/Welcome"

const Stack = createStackNavigator();

const AppNavigator = () => (
  <NavigationContainer
    ref={navigatorRef => {
      NavigationService.setTopLevelNavigator(navigatorRef);
    }}>
    <Stack.Navigator initialRouteName="WelcomeScreen">
      <Stack.Screen name='WelcomeScreen' component={Welcome} options={{ headerShown: false }} />
      <Stack.Screen
        name="RegisterUser"
        component={RegisterUser}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PeriodTrackingOnboarding"
        component={PeriodTrackingOnboarding}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PeriodTrackingHome"
        component={PeriodTrackingHome}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PregnancyOnboarding"
        component={PregnancyOnboarding}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PregnancyHome"
        component={PregnancyHome}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
