  import React from 'react';
  import { NavigationContainer } from '@react-navigation/native';
  import { createNativeStackNavigator } from '@react-navigation/native-stack';
  import LoginScreen from './LoginScreen';
  import HomeScreen from './HomeScreen';
  import LastScreen from './LastScreen';

  const Stack = createNativeStackNavigator();

  export default function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen 
            name="Login" 
            component={LoginScreen} 
            options={{ headerShown: false }} 
          />
          
          <Stack.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{ headerBackVisible: true }} 
          />

          <Stack.Screen 
          name="Last"
          component = {LastScreen}
          options ={{headerShown: true}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
