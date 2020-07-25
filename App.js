import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppNavigation } from './src/navigation/MainNavigation'

export default function App() {
  return <AppNavigation/>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fabdfc',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});
