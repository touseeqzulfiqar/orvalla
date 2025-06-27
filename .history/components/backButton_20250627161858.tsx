import { BackButtonProps } from '@/types'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const backButton = ({
    style,
    iconSize = 24,

}: BackButtonProps) => {
  return (
    <View>
      <Text>backButton</Text>
    </View>
  )
}

export default backButton

const styles = StyleSheet.create({})