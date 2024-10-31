import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import home from './home'; 
import signin from './signin'; 

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={home} />
        <Stack.Screen name="SignIn" component={signin} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
