import { ScreenWrapperProps } from '@/types'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const screenWrapper = ({style, children}: ScreenWrapperProps) => {
  return (
    <View>
      <Text>screenWrapper</Text>
    </View>
  )
}

export default screenWrapper

const styles = StyleSheet.create({})