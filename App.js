import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import Home from './src/views/Home.js';
import LandingPage from './src/views/LandingPage.js';
import store from './src/store';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LandingPage">
          <Stack.Screen
            name="LandingPage"
            component={LandingPage}
            options={{
              headerShown: false
            }}  
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerLeft: null
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}