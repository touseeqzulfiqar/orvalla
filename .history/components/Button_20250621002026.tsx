import { colors, radius } from '@/constants/theme'
import { CustomButtonProps } from '@/types'
import { verticalScale } from '@/utils/styling'
import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'

const Button = ({
    style,
    onPress,
    loading = false,
    children,
}: CustomButtonProps) => {
    if (loading){
        return(
            <View style={[styles.button, style, ]}
        )
    }
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
        alignItems: 'center',
    }
})