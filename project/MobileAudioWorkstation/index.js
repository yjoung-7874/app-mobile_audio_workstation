import {AppRegistry, StyleSheet} from 'react-native';
import {name as appName} from './app.json';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';  
import { NavigationContainer } from '@react-navigation/native';

import FrontPage from './container/FrontPage'
import SamplePage from './container/SamplePage';
import Workstation from './container/Workstation';

const Stack = createStackNavigator();

function MyStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Mobile Audio Workstation" component={FrontPage} options={ styles.Stack }/>
        <Stack.Screen name="Samples"       component={SamplePage}   options={ styles.Stack }/>
        <Stack.Screen name="Workstation" component={Workstation} options={ styles.Stack }/>
      </Stack.Navigator>
    );
  }

const styles = StyleSheet.create({
  Stack: {
    headerStyle: {
      backgroundColor: '#000',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
});

export function Appz() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

AppRegistry.registerComponent(appName, () => Appz);