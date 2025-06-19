import { HeaderShownContext } from '@react-navigation/elements'
import { Stack } from 'expo-router'
import React from 'react'
import { StyleSheet } from 'react-native'

const _layout = () => {
  return (
    <Stack screenOptions={HeaderShownContext}></Stack>
  )
}

export default _layout

const styles = StyleSheet.create({})