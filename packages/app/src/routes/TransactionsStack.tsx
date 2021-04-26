/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';

import { Platform } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';

// import Reporting from '../pages/Reporting';
// import Dashboard from '../pages/Dashboard';
import Transaction from '../pages/Transaction';
import Register from '../pages/Register';
import Listing from '../pages/Listing';

const { Navigator, Screen } = createBottomTabNavigator();

function TransactionsStack() {
  return (
    <Navigator
      tabBarOptions={{
        style: {
          elevation: 1,
          shadowOpacity: 0,
          height: Platform.OS === 'ios' ? 74 : 54,
        },
        tabStyle: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          paddingBottom: Platform.OS === 'ios' ? 20 : 0,
        },
        safeAreaInsets: {
          bottom: 0,
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: Platform.OS === 'ios' ? 14 : 10,
        },
        labelStyle: {
          fontFamily: 'Archivo_700Bold',
          fontSize: 13,
          marginLeft: 16,
        },
        inactiveBackgroundColor: '#ffff',
        activeBackgroundColor: '#fafafa',
        inactiveTintColor: '#c1bccc',
        activeTintColor: '#FF872C',
      }}
    >
      {/* <Screen
        name="Reporting"
        component={Reporting}
        options={{
          tabBarLabel: 'Relatórios',
          tabBarIcon: ({ color, size, focused }) => (
            <AntDesign
              name="barchart"
              size={size}
              color={focused ? '#FF872C' : color}
            />
          ),
        }}
      /> */}
      <Screen
        name="Listing"
        component={Listing}
        options={{
          tabBarLabel: 'Listagem',
          tabBarIcon: ({ color, size, focused }) => (
            <AntDesign
              name="bars"
              size={size}
              color={focused ? '#FF872C' : color}
            />
          ),
        }}
      />
      <Screen
        name="Transaction"
        component={Transaction}
        options={{
          tabBarLabel: 'Vender',
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialIcons
              name="attach-money"
              size={size}
              color={focused ? '#FF872C' : color}
            />
          ),
        }}
      />
      <Screen
        name="Register"
        component={Register}
        options={{
          tabBarLabel: 'Cadastrar',
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialIcons
              name="attach-money"
              size={size}
              color={focused ? '#FF872C' : color}
            />
          ),
        }}
      />
    </Navigator>
  );
}

export default TransactionsStack;
