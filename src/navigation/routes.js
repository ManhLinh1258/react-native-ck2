// You can import Ionicons from @expo/vector-icons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.
import * as React from 'react';
import { Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home'
import ProductList from '../screens/ProductList'
import Detail from '../screens/Detail'
import WishList from '../screens/WishList'
import Cart from '../screens/Cart'
import Me from '../screens/Me'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Product" component={ProductList} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  )
}



export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home-outline' : 'home-sharp';
            } else if (route.name === 'WishList') {
              iconName = focused ? 'heart' : 'ios-heart';
            } else if (route.name === 'Cart') {
              iconName = focused ? 'cart-outline' : 'cart-sharp';
            } else if (route.name === 'Me') {
              iconName = focused ? 'person-outline' : 'person';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="WishList" component={WishList} />
        <Tab.Screen name="Cart" component={Cart} />
        <Tab.Screen name="Me" component={Me} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}