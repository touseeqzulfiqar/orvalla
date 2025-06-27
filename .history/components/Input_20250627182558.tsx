import { InputProps } from '@/types'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const Input = ( props: InputProps) => {
  return (
    <View
    style={[styles.container, props.containerStyle && props.containerStyle]}
    >
      
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
  container:{

  }
});