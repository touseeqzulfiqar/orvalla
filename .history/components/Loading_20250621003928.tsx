import { colors } from '@/constants/theme'
import React from 'react'
import { ActivityIndicatorProps, StyleSheet, Text, View } from 'react-native'

const Loading = ({
    size = 'large',
    color = colors.primary,
}: ActivityIndicatorProps) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Loading</Text>
    </View>
  )
}

export default Loading

const styles = StyleSheet.create({})