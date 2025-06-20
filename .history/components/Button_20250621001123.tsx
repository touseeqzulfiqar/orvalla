import { CustomButtonProps } from '@/types'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const Button = ({
    style,
    onPress,
    loading = false,
    children,
}: CustomButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      <Text>Button</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({})