//App / Root Navigator
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import AuthScreen from '../screens/Splash screen/AuthScreen';
import SplashScreen from '../screens/Splash screen/Splashscreen';
import PeriodTrackingOnboarding from '../screens/Period tracking/Onboarding/index';
import PeriodTrackingHome from '../screens/Period tracking/Home';
import PregnancyOnboarding from '../screens/Pregnancy tracking/Onboarding';
import PregnancyHome from '../screens/Pregnancy tracking/Home';
import NavigationService from './NavigationService';

const Stack = createStackNavigator();

const AppNavigator = () => (
  <NavigationContainer
    ref={navigatorRef => {
      NavigationService.setTopLevelNavigator(navigatorRef);
    }}>
    <Stack.Navigator initialRouteName="AuthScreen">
      <Stack.Screen name='AuthScreen' component={AuthScreen} options={{headerShown: false}} />
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PeriodTrackingOnboarding"
        component={PeriodTrackingOnboarding}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PeriodTrackingHome"
        component={PeriodTrackingHome}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PregnancyOnboarding"
        component={PregnancyOnboarding}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PregnancyHome"
        component={PregnancyHome}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
