import { colors, radius } from '@/constants/theme'
import { CustomButtonProps } from '@/types'
import { verticalScale } from '@/utils/styling'
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
    button:{
        backgroundColor: colors.primary,
        borderRadius: radius._17,
        borderCurve: 'continuous',
        height: verticalScale(50),
        justifyContent: 'center',
    }
})