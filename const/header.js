import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HeaderItem from './headerItem';

const Header = () =>{
  return(
      <View style={styles.container}>
          <HeaderItem/>
      </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:0,
    backgroundColor: '#F0F0F0',
    // marginBottom:20,
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,

    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,

  },
});

export default Header;
