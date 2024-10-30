import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import index from './app/index'; 
import signin from './app/signin'; 

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={index} />
        <Stack.Screen name="SignIn" component={signin} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
