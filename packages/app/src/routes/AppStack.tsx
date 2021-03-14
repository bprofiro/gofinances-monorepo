/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Onboarding from '../pages/Onboarding';
import Listing from '../pages/Listing';
import SignUpSuccess from '../pages/SignUpSuccess';

const Stack = createStackNavigator();

export default function AppStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Listing" component={Listing} />
        <Stack.Screen name="SignUpSuccess" component={SignUpSuccess} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
