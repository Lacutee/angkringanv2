import React, {useState} from 'react';
import { SafeAreaView, View, StyleSheet, Text, ScrollView,FlatList,Image } from 'react-native';

export default function HomeItem(){
const [items, setItems] = useState([
  {name: 'Nasi kucing',url:'https://foto.kontan.co.id/48qMtyEd1FClBY28sb91IpHenxE=/smart/2020/09/03/606416102p.jpg', key: '1'},
  {name: 'tahu',url:'https://reactnative.dev/img/tiny_logo.png', key: '2'},
  {name: 'tempe',url:'https://reactnative.dev/img/tiny_logo.png', key: '3'},
  {name: 'telur puyuh',url:'https://reactnative.dev/img/tiny_logo.png', key: '4'},
  {name: 'tes manis',url:'https://reactnative.dev/img/tiny_logo.png', key: '3'},
]);

return (
    <View style={styles.container}>
        <FlatList
            numColumns={2}
            keyExtractor={(item) => item.key}
            data={items}
            renderItem={({items}) => (
              <View style={styles.item}>
                <View style={{flex:3}}>
                <Image
                  style={styles.tinyLogo}
                  uri={item.url}
                  />
                </View>
                <View style={{flex:1}}>
                  <Text style={styles.title}>{item.name}</Text>
                </View>
              </View>

            )}
        />

    </View>
);
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  padding:0,
  margin: 0,
  justifyContent: 'flex-start',
  alignItems: 'center',
  flexDirection: "column"
},
item: {
  // flex:1,
  backgroundColor: 'purple',
  // padding: 50,
  margin:20,
  height: 120,
  width: 120,
  borderRadius: 20,
  justifyContent: 'space-around',
  alignItems: 'center',
  fontSize: 10,
  elevation: 10,
},
title: {

  fontSize: 10,

},
tinyLogo: {
  width: 50,
  height: 50,
},
});
