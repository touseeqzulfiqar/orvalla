import { BackButtonProps } from '@/types'
import { useRouter } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const backButton = ({
    style,
    iconSize = 24,

}: BackButtonProps) => {
    const router = useRouter();
  return (
    <TouchableOpacity onPress={()=> router.back()} style={[{ flexDirection: 'row', alignItems: 'center' }, style]}>
      <Text>backButton</Text>
    </TouchableOpacity>
  )
}

export default backButton

const styles = StyleSheet.create({})