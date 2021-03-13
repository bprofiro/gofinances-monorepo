/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignUp from '../pages/SignUp';
import SignUpSuccess from '../pages/SignUpSuccess';

const Stack = createStackNavigator();

export default function AppStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SignUpSuccess" component={SignUpSuccess} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
