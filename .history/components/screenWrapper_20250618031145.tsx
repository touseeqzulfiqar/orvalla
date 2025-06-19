import { colors } from '@/constants/theme'
import { ScreenWrapperProps } from '@/types'
import React from 'react'
import { Dimensions, Platform, StatusBar, StyleSheet, View } from 'react-native'

const { height } = Dimensions.get('window')
const screenWrapper = ({style, children}: ScreenWrapperProps) => {
    let paddingTop = Platform.OS === 'ios' ?  height * 0.06 : 50;
  return (
    <View
      style={[
        {
          paddingTop,
          flex: 1,
          backgroundColor: colors.neutral900,
        },
      ]}
    >
        <StatusBar />
      {children}
    </View>
  );
}

export default screenWrapper

const styles = StyleSheet.create({})