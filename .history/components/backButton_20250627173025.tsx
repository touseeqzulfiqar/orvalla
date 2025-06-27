import { colors, radius } from '@/constants/theme'
import { BackButtonProps } from '@/types'
import { verticalScale } from '@/utils/styling'
import { useRouter } from 'expo-router'
import { CaretLeft } from 'phosphor-react-native'
import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const BackButton = ({
    style,
    iconSize = 24,

}: BackButtonProps) => {
    const router = useRouter();
  return (
    <TouchableOpacity
      onPress={() => router.back()}
      style={[styles.button, style]}
    >
      <CaretLeft size={verticalScale(iconSize)} color={Colors.white} weight='bold' />
    </TouchableOpacity>
  );
}

export default BackButton

const styles = StyleSheet.create({
    button: {
       backgroundColor: colors.neutral600,
       alignSelf: 'flex-start',
       borderRadius: radius._12,
       
    },
})