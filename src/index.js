import React from 'react';

import { NavigationContainer } from '@react-navigation/native'
import Navigation from '../navigation';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor='#ef233c' barStyle='light-content'/>
      <NavigationContainer>
        <Navigation/>
      </NavigationContainer>
    </>  
  );
}

