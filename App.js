import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Flex from './const/home';

export default function App() {
  return <Flex />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(90, 90, 90, 1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
