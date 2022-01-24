import React from 'react';
import {Home} from './src/screens/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Cities} from './src/screens/Cities';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {backgroundColor: '#eac364'},
          headerTintColor: '#222',
          headerTitleAlign: 'center',
        }}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'State list of Brazil States'}}></Stack.Screen>
        <Stack.Screen name="Cities" component={Cities}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
