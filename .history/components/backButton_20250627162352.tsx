import { BackButtonProps } from '@/types'
import { useRouter } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const BackButton = ({
    style,
    iconSize = 24,

}: BackButtonProps) => {
    const router = useRouter();
  return (
    <TouchableOpacity onPress={()=> router.back()} style={[styles.button, style]}>
      <Text>backButton</Text>
    </TouchableOpacity>
  )
}

export default BackButton

const styles = StyleSheet.create({
    button: {
        padding: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
})