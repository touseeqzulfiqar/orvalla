import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Button = ({
    style,
    onPress,
    loading = false,
    children,
}) => {
  return (
    <View>
      <Text>Button</Text>
    </View>
  )
}

export default Button

const styles = StyleSheet.create({})