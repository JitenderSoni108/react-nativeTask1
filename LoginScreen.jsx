import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Alert,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import axios from 'axios';

export default function LoginScreen({ navigation }) {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [userInfo, setUserInfo] = useState(null); 

  const handlePress = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        'https://ecomm.vergocrm.com/api/Token',
        { grant_type: 'password', username, password },
        { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
      );

      if (response.status === 200) {
        const token = response.data.access_token;

        const userResponse = await axios.get(
          'https://ecomm.vergocrm.com/api/en/user/info/',
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          }
        );

        if (userResponse.status === 200) {
          const userData = userResponse.data; 
          setUserInfo(userData); 

          navigation.navigate('Home', { user: userData });
        } else {
          Alert.alert('Error', 'Failed to fetch user information.');
        }
      } else {
        Alert.alert('Error', 'Invalid username or password.');
      }
    } catch (error) {
      console.error('API Error:', error);
      Alert.alert('Error', 'An error occurred while logging in.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter username"
        onChangeText={setUserName}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  text: { fontSize: 18, marginBottom: 20 },
  input: {
    borderWidth: 1,
    width: '80%',
    height: 40,
    borderColor: 'gray',
    marginBottom: 10,
    paddingLeft: 8,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  button: {
    width: '80%',
    backgroundColor: 'red',
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: { color: 'white', fontSize: 16 },
});
