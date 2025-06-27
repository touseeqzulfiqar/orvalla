import { InputProps } from '@/types'
import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'

const Input = ( props: InputProps) => {
  return (
    <View
    style={[styles.container, props.containerStyle && props.containerStyle]}
    >
      {props.icon && props.icon}
      <TextInput
      
      
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',

  }
});