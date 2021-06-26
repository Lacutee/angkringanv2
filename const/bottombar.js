import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HomeLogo, {EditLogo,SettingLogo} from './bottomLogo';


const BottomBar = () =>{
  return(
    <View style={[styles.container, {
      // Try setting `flexDirection` to `"row"`.
      flexDirection: "row"
    }]}>
      <View style={{ flex: 2, backgroundColor: "white" }}>
          <HomeLogo/>
      </View>
      <View style={{ flex: 2, backgroundColor: "white" }}>
          <EditLogo/>
      </View>
      <View style={{ flex: 2, backgroundColor: "white" }}>
          <SettingLogo/>
      </View>

    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    elevation: 15,

  },
});

export default BottomBar;
