import { ScreenWrapperProps } from '@/types'
import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'

const { height } = Dimensions.get('window')
const screenWrapper = ({style, children}: ScreenWrapperProps) => {
    let 
  return (
    <View>
      <Text>screenWrapper</Text>
    </View>
  )
}

export default screenWrapper

const styles = StyleSheet.create({})