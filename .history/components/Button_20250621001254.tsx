import { CustomButtonProps } from '@/types'
import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'

const Button = ({
    style,
    onPress,
    loading = false,
    children,
}: CustomButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      {children}
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#007BFF', // Default button color
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
})