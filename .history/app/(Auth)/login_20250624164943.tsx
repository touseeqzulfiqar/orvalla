import ScreenWrapper from '@/components/screenWrapper'
import Typo from '@/components/Typo'
import { spacingY } from '@/constants/theme'
import { verticalScale } from '@/utils/styling'
import React from 'react'
import { StyleSheet } from 'react-native'

const Login = () => {
  return (
    <ScreenWrapper>
      <Typo>login</Typo>
    </ScreenWrapper>
  )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: spacingY._30,
        paddingHorizontal: spacingY._20,
    }
    welcomeText: {
        fontSize: verticalScale(20),
        fontWeight: 'bold',
        
    }
})