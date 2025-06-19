import { colors } from '@/constants/theme'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Typo = ({
    size,
    color = colors.text,
    fontWeight = '400',
    
}) => {
  return (
    <View>
      <Text>Typo</Text>
    </View>
  )
}

export default Typo

const styles = StyleSheet.create({})