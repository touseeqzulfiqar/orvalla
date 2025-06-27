import { BackButtonProps } from '@/types'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const backButton = ({
    style,
    iconSize = 24,

}: BackButtonProps) => {
  return (
    <TouchableOpacity onPress={}>
      <Text>backButton</Text>
    </TouchableOpacity>
  )
}

export default backButton

const styles = StyleSheet.create({})