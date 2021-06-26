import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Flex from './const/home';

export default function App() {
  return <Flex />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
