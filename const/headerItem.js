import React from "react";
import { StyleSheet, Text, View } from "react-native";

const HeaderItem = () =>{
  return(
        <View>
            <Text style={styles.fontStyle}>Rp 120.000</Text>
        </View>
  );
};

const styles = StyleSheet.create({
    fontStyle:{
      fontSize: 20,
      fontFamily: 'Segoe UI Black',
      fontWeight: "900",


    }
});



export default HeaderItem;
