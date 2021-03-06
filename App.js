import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BottomBar from './const/bottombar'

export default function App() {
  return (
    <View style = {styles.container}>
      <BottomBar style = {{flex: 1}}>
      </BottomBar>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(90, 90, 90, 1)',
    flexDirection: 'column'
  },
});
