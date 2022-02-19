import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {Wallets} from './Wallets.js';
import {WalletDetails} from './WalletDetails.js';


const Stack = createStackNavigator();

export const AppNavigator = () =>  {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="wallets" component={Wallets} />
      <Stack.Screen name="walletdetails" component={WalletDetails} />
    </Stack.Navigator>
  );
}