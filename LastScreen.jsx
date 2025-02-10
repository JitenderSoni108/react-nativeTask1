import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';

const LastScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Last Page</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LastScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E3F2FD', 
    padding: 20,
  },
  
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0D47A1', 
    marginBottom: 20,
  },

  button: {
    backgroundColor: '#1976D2', 
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, 
  },

  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  }
});
