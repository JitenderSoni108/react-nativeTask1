import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const LastScreen = ({navigation}) => {
  return (
    <View>
      <Text>LastScreen is that ................</Text>
      <Button title = "GoBack" onPress={()=>navigation.goBack()} />
    </View>
  )
}

export default LastScreen

const styles = StyleSheet.create({})