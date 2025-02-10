import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


export default function HomeScreen({ navigation,route}) {
  const {user}=route.params;
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
      <Text style={styles.text} >Name : {user.Data.FullName}</Text>
      <Text style={styles.text}>Email : {user.Data.Email}</Text>
      <Text style={styles.text}>PhoneNumber : {user.Data.PhoneNumber}</Text>
      <Text style={styles.text}>
        Date: {user.Data.RegisteredOn.slice(8, 10)}-{user.Data.RegisteredOn.slice(5, 7)}-{user.Data.RegisteredOn.slice(0, 4)}
      </Text>
      </View>
      <View style={styles.btnCon}>
      <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.btn}>
        <Text style={styles.btnTxt}>Back</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate('Last')} style={styles.btn}>
        <Text style={styles.btnTxt}>Next</Text>
      </TouchableOpacity>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  textContainer:{
    backgroundColor:'lightblue',
    width:400,
    borderRadius:10,
    marginHorizontal:8,
    marginBottom:10,
    elevation:6,
    shadowColor:'blue'
  },
  container: 
  { flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 16,
        backgroundColor: '#f5f5f5'
      },
  text: 
  { fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    marginHorizontal:10,
    marginVertical:8,
    color:'blue',
    width:380,
    backgroundColor:'white',
    height:40,
    borderRadius:10,
    paddingLeft:10
    
  },
  btnCon:{
    display:'flex',
    flexDirection:'row'
  },  
  btn:{
    width:60,
    height:60,
    backgroundColor:'blue',
    marginRight:10,
    alignItems:'center',
    display:'flex',
    justifyContent:'center',
    borderRadius:50,
    color:'white'
  },
  btnTxt:{
    color:'white'
  }
});
