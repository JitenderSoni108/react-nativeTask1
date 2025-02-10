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

  const handlePress = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        'https://ecomm.vergocrm.com/api/Token',
        {
          grant_type: 'password',
          username,
          password,
        },
        { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
      );
      if (response.status === 200) {
        const token = response.data.access_token;
          navigation.navigate('Home', { tokens : token , status : response.status});
        }
      else {
        Alert.alert('Failed', 'Invalid username and password');
      }
    } catch (error) {
      console.error('API Error:', error);
      Alert.alert('Error', 'An error occurred while logging in.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Text style={styles.headText}>Welcome Back!</Text>
        <Text style={styles.subText}>Login to continue</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter Username"
          placeholderTextColor="#aaa"
          onChangeText={setUserName}
          value={username}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Password"
          placeholderTextColor="#aaa"
          onChangeText={setPassword}
          value={password}
          secureTextEntry
        />

        {loading ? (
          <ActivityIndicator size="large" color="#1976D2" />
        ) : (
          <TouchableOpacity style={styles.button} onPress={handlePress}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        )}

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#E3F2FD',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    width: 350,
    borderRadius: 15,
    alignItems: 'center',
    elevation: 10, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  headText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#0D47A1',
    marginBottom: 5,
  },
  subText: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: '#F9F9F9',
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#1976D2',
    paddingVertical: 12,
    width: '100%',
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
    elevation: 5,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footerText: {
    marginTop: 15,
    fontSize: 14,
    color: '#555',
  },
  linkText: {
    color: '#1976D2',
    fontWeight: 'bold',
  },
});
