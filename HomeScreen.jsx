import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert,ActivityIndicator } from 'react-native';
import axios from 'axios';

export default function HomeScreen({ navigation, route }) {
  const { tokens, status } = route.params;
  const[userD,setUserD] = useState(null);
  const[loading,setLoading] = useState(true);

  const fetchUserData = async () => {
    try {
      if (status === 200) {
        const userResponse = await axios.get(
          'https://ecomm.vergocrm.com/api/en/user/info/',
          {
            headers: {
              Authorization: `Bearer ${tokens}`,
              'Content-Type': 'application/json',
            },
          }
        );

        if (userResponse.status === 200) {
          setUserD(userResponse.data);
        } else {
          Alert.alert('Error', 'Invalid User Data');
        }
      } else {
        Alert.alert('Error', 'Something went wrong in API calling.');
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
      Alert.alert('Error', 'Failed to fetch user details.');
    } finally {
      setLoading(false);
    }
  };

  fetchUserData();
  
  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size='large' color="white"></ActivityIndicator>
      ):(
        
        <View style={styles.container}>
          <View style={styles.textContainer}>
        <Text style={styles.text} >Name : {userD.Data.FullName}</Text>
        <Text style={styles.text}>Email : {userD.Data.Email}</Text>
        <Text style={styles.text}>PhoneNumber : {userD.Data.PhoneNumber}</Text>
        <Text style={styles.text}>
          Date: {userD.Data.RegisteredOn.slice(8,10)}-{userD.Data.RegisteredOn.slice(5,7)}-{userD.Data.RegisteredOn.slice(0,4)}
        </Text>
        </View>
        <View style={styles.btnCon}>
          <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.btn}>
            <Text style={styles.btnTxt}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Last')} style={styles.btn}>
            <Text style={styles.btnTxt}>Next</Text>
          </TouchableOpacity>
        </View>
        </View>
        
            
        
      ) }
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#E3F2FD', 
  },
  innerContainer: {
    width: '100%',
    alignItems: 'center',
  },
  textContainer: {
    backgroundColor: '#FFFFFF',
    width: '90%',
    borderRadius: 12,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 20,
    elevation: 5,
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  text: { 
    fontSize: 18,
    fontWeight: '500',
    color: '#1E88E5', 
    paddingVertical: 5,
  },
  btnCon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
  btn: {
    width: 70,
    height: 70,
    backgroundColor: '#1976D2',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 35, 
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 4,
  },
  btnTxt: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});