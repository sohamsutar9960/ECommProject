import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../screens/Home';
import ProductDetails from '../screens/ProductDetails';
import Cart from '../screens/Cart';
import OrderCompleted from '../screens/OrderCompleted';

const Stack = createNativeStackNavigator();
const screenOptions = {
  headerShown: false,
};

export default function AppStack() {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
      <>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ProductDetails" component={ProductDetails} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="OrderCompleted" component={OrderCompleted} />
      </>
    </Stack.Navigator>
  );
}
