import React from 'react'
import { ActivityIndicatorIOSProps, StyleSheet, Text, View } from 'react-native'

const Loading = ({
    size = 'large',
    color = colors.primary,
}: ActivityIndicatorIOSProps) => {
  return (
    <View>
      <Text>Loading</Text>
    </View>
  )
}

export default Loading

const styles = StyleSheet.create({})